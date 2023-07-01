import {sumOfNumbers} from "./01";

let a: number
let b: number

beforeEach(() => {
  a = 5
  b = 3
})

test.skip("sum of two numbers should be", () => {
  // action
  const result = sumOfNumbers(a, b)

  // expected
  expect(result).toBe(8)
})