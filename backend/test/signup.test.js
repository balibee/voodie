const request = require('supertest')
const app = require('../src/app')

describe('Signup endpoints', () => {
  it('post request to /signup should create a user', async () => {
    const userToCreate = {
      name: `SomeName${Date.now()}`,
      email: `SomeEmail${Date.now()}`,
      password: `SomePass${Date.now()}`,
    }

    const createdUser = (await request(app).post('/signup').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.email).toBe(userToCreate.email)
    expect(createdUser.password).toBe(userToCreate.password)
  })
})
