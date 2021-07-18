const request = require("supertest")
const app = require("../app")
describe("GET /should return 200 status",()=> {
  test("testing get req", async()=> {
    const response  = await  request(app)
    expect((await response.get("/")).statusCode).toBe(200)
  })
})
