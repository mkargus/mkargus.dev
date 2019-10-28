import supertest from 'supertest'
import app from '../src/app'

describe('App', () => {

  describe('getIndex', () => {
    it('returns status 200', () => {
      return supertest(app).get('/').expect(200)
    })
  })

  describe('error pages', () => {
    it('/abc123 returns status 404', () => {
      return supertest(app).get('/abc123').expect(404)
    })
  })

})
