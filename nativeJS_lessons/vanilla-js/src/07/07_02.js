const users = {
  '101': {id: 101, name: 'Dima'},
  '232312': {id: 232312, name: 'Natasha'},
  '1212': {id: 1212, name: 'Valera'},
  '1': {id: 1, name: 'Katya'},
}

console.log(users[1212]) // without iteration O(1)

const user = {id: 3456, name: 'Igor'}
users[user.id] = user // add and overdrawing previous value
console.log(users)
delete users[101] // fast O(1)
console.log(users)
users[user.id].name = "Vasya" // fast and we don't need to delete copies
console.log(users)

const usersArray = [
  {id: 101, name: 'Dima'},
  {id: 232312, name: 'Natasha'},
  {id: 1212, name: 'Valera'},
  {id: 1, name: 'Katya'},
]

// all these actions above are faster in object then in arrays, because array
// do full iteration almost always, and we need use methods and keep track of copies

console.log(usersArray.find(item => item.id === 1212)) // full iteration O(n)
