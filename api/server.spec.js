const supertest = require("supertest");
const db = require("../database/connection.js");
const server = require("./server");



describe("server test", () => {

    test("test the servers connection to database", () =>{
        beforeEach(async () => {
            await db("users").truncate();
            });
            beforeAll(async () => {
            await db.migrate.rollback();
            await db.migrate.latest();
            });
    
    
    
            afterAll(async () => {
            await db.destroy();
            });
    })



    });

