const  validator = require('validator')

const notes = require('./notes')
const shownotes = notes()
// console.log(shownotes)

console.log(validator.isEmail('rafindraj@gmail.com'))
console.log(validator.isURL('https://labelioososao.d'))
// const add = require('./utils')

// const sum = add(4, 2)
 
// console.log(sum)