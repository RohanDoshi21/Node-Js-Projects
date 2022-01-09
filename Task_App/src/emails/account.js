const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rohandoshicollege@gmail.com',
        subject: 'Welcome to the task app!',
        text: `Welcome to the app, ${name}. Its nice to see you here!`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rohandoshicollege@gmail.com',
        subject: 'Feels bad to see you go',
        text: `FareWell, ${name}. Its please to serve you!`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

//? use backticks for es6 to put values!
// const name = "Rohan"
// console.log('Hello ${name}')