/* const xyz = require('./people')
console.log(xyz)
console.log(xyz.people)
console.log(xyz.age) */
//console.log(people)

const {people, age} = require('./people')

console.log(people)
console.log(age)

const os = require('os')
console.log(os.platform())
console.log(os.homedir())