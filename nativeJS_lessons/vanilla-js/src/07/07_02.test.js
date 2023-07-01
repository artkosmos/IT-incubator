let users = {}

beforeEach(() => {
  users = {
    '101': {id: 101, name: 'Dima'},
    '232312': {id: 232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
  }
})

test('correct value', () => {
  users[1].name = 'Artem'
  users[1212].name = 'Konishya'

  expect(users[1].name).toBe('Artem')
  expect(users[1212]).toEqual({id: 1212, name: 'Konishya'})
  // проверяет именно по наполнению, а не сравнивает обьекты
})

test('correct delete value', () => {
  delete users[232312]

  expect(users[232312]).toBeUndefined()
  // проверяет существование (undefined)
})