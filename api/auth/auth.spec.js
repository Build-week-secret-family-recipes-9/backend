const supertest = require("supertest");
const db = require("../../database/connection");
const server = require("../server");

// beforeAll(async () => {
//   await db.migrate.rollback();
//   await db.migrate.latest();
// });

// beforeEach(async () => {
//   await db("users").truncate();
// });

// afterAll(async () => {
//   await db.destroy();
// });

describe("Users Authorization testing", () => {


test("user login system works ", () =>{
// Loging the users tokena nd sending the credentials
        beforeEach(async () => {
            token = await supertest(server)
                .post("/api/auth/login")
                .send({username: "usersRealName", password: "ffdddda33ass"})
                .then(res => {
                    return res.body.token;
                });
        });

  
});


// GET Users is application/json header type and runs server
  it("GET /api/users", async () => {
    const res = await supertest(server)
      .get("/api/users")
      expect(res.type).toBe("application/json")
  });

// post /api/auth/register type is application/json
    it("POST /api/auth/register", async () => {
        const res = await supertest(server)
        .post("/api/auth/register")
        .send({"username": "theUser",
        "password" : "thepassword" ,
        "roles" : 1  })
        expect(res.type).toBe("application/json")
    })



 // userlimited is a application/json in the header type
    it("GET /api/users/userlimited", async () => {
        const res = await supertest(server)
        .get("/api/users/userlimited")
        expect(res.type).toBe("application/json")
    })
// GET /api/users/adminlimited is application/json

    it("GET /api/users/adminlimited", async () => {
        const res = await supertest(server)
        .get("/api/users/adminlimited")
        expect(res.type).toBe("application/json")
    })


    // GET Something unknown is text/html
    it("GET /api/anything/anythinghere", async () => {
        const res = await supertest(server)
        .get("/api/anything/anythinghere")
        expect(res.type).toBe("text/html")
    })
});



describe("User has a valid session", () =>{
     



 // // We want the user session with no token
    it("GET /api/users/limited", async () => {
        const res = await supertest(server)
        .get("/api/users/limited")
        expect(res.body).toBe("we want session token")
    })
     
} )