/* eslint @typescript-eslint/explicit-function-return-type: off */
import supertest from 'supertest'
import app from '../src/app'

describe('mkargus.dev', () => {
  describe('index', () => {
    it('return status 200', () => {
      return supertest(app).get('/').expect(200)
    })
  })

  describe('blog', () => {
    it('return status 200', () => {
      return supertest(app).get('/blog').expect(200)
    })
  })

  describe('projects', () => {
    it('return status 200', () => {
      return supertest(app).get('/projects').expect(200)
    })
  })

  describe('missing pages', () => {
    it('return status 404', () => {
      return supertest(app).get('/abc123').expect(404)
    })
  })
})
