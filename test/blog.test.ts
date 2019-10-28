import supertest from 'supertest'
import app from '../src/app'

describe('Blog', () => {

  describe('getBlogIndex', () => {
    it('returns status 200', () => {
      return supertest(app).get('/blog').expect(200)
    })
  })

  describe('getBlogPost', () => {
    it('/blog/Post returns 404', () => {
      return supertest(app).get('/blog/Post').expect(404)
    })
  })

  describe('getBlogFeed', () => {
    it('rss returns 501', () => {
      return supertest(app).get('/blog/feed/rss').expect(501)
    })

    it('xml returns 501', () => {
      return supertest(app).get('/blog/feed/xml').expect(501)
    })

    it('randommarkup returns 404', () => {
      return supertest(app).get('/blog/feed/markup').expect(404)
    })
  })

})
