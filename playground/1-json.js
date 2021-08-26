const fs = require('fs')
// const book = {
//     title: 'Ego is the enemy, Instinct are savior',
//     author: 'Ryan Gosling'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString() 
const data = JSON.parse(dataJson)

data.name = 'Maxime',
data.age = '29'
console.log(data.age, '', data.name)