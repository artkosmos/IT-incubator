type AddressType = {
  street: string
  house: number
  postcode: number
}
type LocationType = {
  country: string
  city: string
  address: AddressType
}
type TechType = {
  id: number
  title: string
}
export type PersonType = {
  id: number
  name: string
  age: number
  isActive: boolean
  location: LocationType
  technologies: Array<TechType>
}

const person: PersonType = {
  id: 1,
  name: "Artem",
  age: 23,
  isActive: false,
  location: {
    country: "Belarus",
    city: "Grodno",
    address: {
      street: "Kovalevskaya",
      house: 10,
      postcode: 230000
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 1,
      title: "JavaScript"
    }
  ]
}

console.log(person.age)