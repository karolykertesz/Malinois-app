const { response } = require("express")
const request = require("supertest")
const app = require("../app")
describe("GET /should return 200 status",()=> {
  test("testing get req", async()=> {
    const response  = await request(app)
    .get("/v1/ping").expect(200).then((res)=> {
      expect(res.body).toStrictEqual({
        message: "all ok"
      })
    })
   
  })
})
