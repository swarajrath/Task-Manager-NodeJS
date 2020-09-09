const request = require('supertest')
const app = require('../src/app')

test('Should Sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Swaraj',
        email: 'swarajrath007@gmail.com',
        password: 'swarajrath123'
    }).expect(201)
})