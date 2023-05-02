import {PersonType} from "../02/02";

export function changeStudentActivity(student: PersonType) {
  student.isActive = true
}

export function doesLiveInCity(person: PersonType, city: string) {
  return person.location.city.toLowerCase() === city.toLowerCase();
}