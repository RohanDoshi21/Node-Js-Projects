// const fs = require('fs');
// const book = {
//   title: 'Famous Five',
//   author: 'Enid Blyton',
// }
//
// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON);
// //
// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.title);
// // fs.writeFileSync('1-json.json', bookJSON // writing to the file
//
// const dataBuffer = fs.readFileSync('1-json.json') // reading a file
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
//
// console.log(data.title);

const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Rohan'
user.age = 19
user.planet = 'Mars'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
