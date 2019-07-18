// // index.js
// const redux = require('redux')

// // // simpliest reducer
// // const reducer = (state = 1, action = {}) => {
// //   return state
// // }

// // reducer responds diff for the actions
// const reducer = (state = 1, action = {}) => {
//   switch (action.type) {
//     case 'ADD_ONE':
//       return state + 1
//     case 'ADD_TWO':
//       return state + 2
//     case 'ADD_THREE':
//       return state + 3
//     default:
//       return state
//   }
// }

// const store = redux.createStore(reducer)
// console.log('Initial state of the store:', store.getState())

// store.subscribe(() => console.log('Next state:', store.getState()))

// const action = {
//   type: 'ADD_ONE'
// }

// store.dispatch(action)

// const actionTwo = {
//   type: 'ADD_TWO'
// }

// store.dispatch(actionTwo)

// const actionThree = {
//   type: 'ADD_THREE'
// }

// store.dispatch(actionThree)

// module.exports = { reducer }
// // diff syntaxes that do the same...
// // ...but affects the way of importing
// // module.exports = reducer
// // module.exports.reducer = reducer

// object reducer part
// const redux = require('redux')

// const initialState = {
//   firstName: 'Charles',
//   lastName: 'Eamnes',
//   age: 75
// }

// const reducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case 'SET_FIRST_NAME':
//       return {
//         ...state,
//         firstName: action.payload
//       }
//     case 'SET_LAST_NAME':
//       return {
//         ...state,
//         lastName: action.payload
//       }
//     case 'SET_AGE':
//       return {
//         ...state,
//         age: action.payload
//       }

//     default:
//       return state
//   }
// }

// const store = redux.createStore(reducer)
// console.log('Initial state of the store', store.getState())

// store.subscribe(() => console.log('Next state:', store.getState()))

// const action = {
//   type: 'SET_FIRST_NAME',
//   payload: 'Alice'
// }

// store.dispatch(action)

// const action2 = {
//   type: 'SET_LAST_NAME',
//   payload: 'Bob'
// }

// store.dispatch(action2)

// const action3 = {
//   type: 'SET_AGE',
//   payload: '12345'
// }

// store.dispatch(action3)

// module.exports = { reducer }

// array reducer part
const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_DOG':
      return [
        ...state,
        { ...action.payload }
      ]
    case 'SET_DOGS':
      // put a list of dog in place of initial values!
      // strange syntax for me but needed because the map()...
      // ...map needed because we wanted to copy (not add)...
      // ...a list as the new state
      return action.payload.map(dog => {return {...dog}})
      
    default:
      return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

store.dispatch(action)

const action2 = {
  type: 'SET_DOGS',
  payload: [
    {
      name: 'The new Dog in town',
      isAGoodBoy: true
    },
    {
      name: 'Snoop Dog',
      isAGoodBoy: true
    }
  ]
}

store.dispatch(action2)

module.exports = { reducer }