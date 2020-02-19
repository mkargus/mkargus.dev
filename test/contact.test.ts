import supertest from 'supertest'
import app from '../src/app'

describe('Contact', () => {

  describe('getContactIndex', () => {
    it('returns status 200', () => {
      return supertest(app).get('/contact').expect(200)
    })
  })

})
