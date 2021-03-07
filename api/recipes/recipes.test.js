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

describe("recipes test", () => {


    // logs user in as all plants routers need auth user
    beforeEach(async () => {
        token = await supertest(server)
            .post("/api/auth/login")
            .send({username: "testing1", password: "abc1234"})
            .then(res => {
                return res.body.token;
            });
    });


    // get all recipes
  it("GET /api/recipes", async () => {
    const res = await supertest(server)
      .get("/api/recipes")
      expect(res.type).toBe("application/json")
  });


    // get recipe by id
  it("GET /api/recipes/:id", async () => {
    const res = await supertest(server)
    .get("/api/recipes/2")
    expect(res.type).toBe("application/json")
})

    // post a new recipe
    it("POST /api/recipes", async () => {
        const res = await supertest(server)
        .post("/api/recipes")
        .send({"title": "Peanut Butter Cookies",
        "source": "My Mother",
        "ingredients": "eggs, milk, flour, baking soda, peanut butter and vanilla",
        "instructions": "set the oven to 425. add all ingredients together and cook for about 25 minutes",
        "category": "Desserts",
        "img": ""})
        expect(res.type).toBe("application/json")
    })
    
    // edit a recipe
    it("PUT /api/recipes/:id", async () => {
        const res = await supertest(server)
        .put("/api/recipes/2")
        .send({"title": "PEANUT BUTTER COOKIE",
        "source": "My Mother",
        "ingredients": "eggs, milk, flour, baking soda, peanut butter and vanilla",
        "instructions": "set the oven to 425. add all ingredients together and cook for about 25 minutes",
        "category": "Desserts",
        "img": ""})
        expect(res.type).toBe("application/json")
    })
    
    // // delete a recipe
    it("DELETE /api/recipes/:id", async () => {
        const res = await supertest(server)
        .delete("/api/recipes/1")
        expect(res.body.message).toBe( "Deleted!" )
    })
});
