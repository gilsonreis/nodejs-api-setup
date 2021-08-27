import User from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Gilson'

  expect(user.name).toEqual('Gilson')
})
