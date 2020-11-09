const request = require('supertest')
const app = require('../src/app')

describe('Review endpoints', () => {
  it('post request to /recipes/:recipeId should create a review', async () => {
    const reviewToCreate = {
      foodieId: `5fa573db69e59702a61a2d35`,
      recipeId: `5fa5300a4e3fff0039498f25`,
      rating: 1,
      review: `This is a test review`,
    }

    const createdReview = (await request(app).post('/recipes/:recipeId').send(reviewToCreate)).body
    expect(createdReview.foodieId).toBe(reviewToCreate.foodieId)
    expect(createdReview.recipeId).toBe(reviewToCreate.recipeId)
    expect(createdReview.rating).toBe(reviewToCreate.rating)
    expect(createdReview.review).toBe(reviewToCreate.review)
  })
})
