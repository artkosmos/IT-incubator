type ManType = {
  name: string
  age: number
}

const people: ManType[] = [
  {name: "Alexander Ivanov", age: 33},
  {name: "Andrew Petrov", age: 24},
  {name: "Dmitry Stepanov", age: 18}
]

const developpers = people.map((item) => ({
  stack: ["css, html", "js", "tdd", "react"],
  firstName: item.name.split(' ')[0],
  secondName: item.name.split(' ')[1]
}))
