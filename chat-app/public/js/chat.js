const socket = io()

const $messageForm = document.querySelector('#message-form')
const $messageFormInput = document.querySelector('input')
const $messageFormButton = document.querySelector('#sendButton')
const $sendLocationButton = document.querySelector('#send-location')

socket.on('countUpdated', (count) => {
    console.log('The count has been updated:', count);
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log("Clicked");
    socket.emit('increment');
})

socket.on('message', (message) => {
    console.log(message);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const message = document.querySelector('input').value
    $messageFormButton.setAttribute('disabled', 'disabled');
    $messageFormInput.value = ''
    $messageFormInput.focus()

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled')
        if (error) {
            return console.log(error);
        }
        console.log('The message has been delivered!')
    })
})

$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return new alert('Geolocation is not supported')
    }

    $sendLocationButton.setAttribute('disabled', 'disabled')

    navigator.geolocation.getCurrentPosition((position) => {
        $sendLocationButton.removeAttribute('disabled')
        // console.log(position);
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared');
        })
    })
})