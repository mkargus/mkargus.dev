import supertest from 'supertest'
import app from '../app'

describe('Misc', () => {

  describe('getAbout', () => {
    it('returns status 200', () => {
      return supertest(app).get('/about').expect(200)
    })
  })

  describe('getProjects', () => {
    it('returns status 200', () => {
      return supertest(app).get('/projects').expect(200)
    })
  })

})
