// Test #1
test("should take men older than 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14]

  const oldAges = ages.filter((item) => item > 90)

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

// Test #2
test("should take course's price less than 160", () => {
  const courses = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
  ]

  const cheapCourses = courses.filter((elem) => elem.price < 160)

  expect(cheapCourses.length).toBe(2)
  expect(cheapCourses[0].title).toBe('CSS')
  expect(cheapCourses[1].title).toBe('React')
})

// Test #3
test("get only completed tasks", () => {
  const tasks = [
    {id:1, name: 'bread', isDone: false},
    {id:2, name: 'milk', isDone: true},
    {id:3, name: 'salt', isDone: false},
    {id:4, name: 'sugar', isDone: true}
  ]

  const completedTasks = tasks.filter((item) => item.isDone)

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].id).toBe(2)
  expect(completedTasks[1].id).toBe(4)
})