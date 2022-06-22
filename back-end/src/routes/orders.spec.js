const app = require("../app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
});


describe('Endpoint tests', () => {
  it("Async test", done => {
      // Do your async tests here
      done();
    }),
  it("gets return connect message", async () => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello from express!");
    })
  
});



