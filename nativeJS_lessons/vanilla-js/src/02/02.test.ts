import {CityType} from "./02_02";


let city: CityType

beforeEach(() => {
  city = {
    minimalHouses: 100,
    neccessaryBuildings: ["Hospital", "Fire-station"],
    minimalPeople: 1000
  }
})

test.skip("Can the city be build?", () => {
  expect(city.minimalHouses).toBe(100)
  expect(city.neccessaryBuildings.length).toBe(2)
  expect(city.minimalPeople).toBe(1000)
})