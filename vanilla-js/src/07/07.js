const people = {
  age: 5
}

// add to people
people.name = 'Jack' // variant 1
people['country'] = 'Belarus' // variant 2

console.log(people)


// method map
const users = ['Jack', 'Vladimir', 'Anna', 'Leopold', 'Jessica']
const usersLower =  users['map']((item) => item.toLowerCase())

console.log(usersLower)


const userObj = {
  '0': 'Artem',
  '1': 'Valera',
  '2': 'Igor',
  '3': 'Anna',
}
// userObj['0'] ---> 'Artem'
userObj['hello how are you'] = 'i\'m fine'
userObj[null] = 'nothing'  // null will be like a key (string)
console.log(userObj)
console.log(Object.keys(userObj))
console.log(Object.values(userObj))