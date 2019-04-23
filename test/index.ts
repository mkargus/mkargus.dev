import supertest from 'supertest'
import app from '../src/app'

describe('mkargus.dev', () => {
  it('gzip enabled', () => {
    return supertest(app).get('/').expect('Content-Encoding', 'gzip')
  })

  it('security headers enabled', () => {
    return supertest(app).get('/')
    .expect('Content-Security-Policy', /./)
    .expect('Strict-Transport-Security', /./)
    .expect('X-Xss-Protection', /./)
    .expect('X-Content-Type-Options', /./)
    .expect('X-Frame-Options', /./)
  })

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
