import {PersonType} from "../02/02";
import {changeStudentActivity, doesLiveInCity} from "./03";

let student: PersonType

beforeEach(() => {
  student = {
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
})

test("should be active", () => {
  expect(student.isActive).toBe(false)
  changeStudentActivity(student)
  expect(student.isActive).toBe(true)
})
test("does student live in city?", () => {
  const result_1 = doesLiveInCity(student, "Minsk")
  const result_2 = doesLiveInCity(student, "Grodno")
  expect(result_1).toBe(false)
  expect(result_2).toBe(true)
})