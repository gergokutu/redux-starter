const objectOne = {
  firstName: 'Alice',
  lastName: 'the Rabbit Hunter'
}

console.log('Value of Object One: ', objectOne)

const objectTwo = objectOne
objectTwo.lastName = 'The nice girl'

console.log('Value of Object One: ', objectOne)
console.log('Value of Object Two: ', objectTwo)