const request = require("supertest");

const server = require("./server.js");



describe("server", () => {
    it("sets the environment to testing", () => {
        expect(process.env.DB_ENV).toBe("testing");
    });

    // open insomnia (client), make a request/call to API passing in args needed, expect a response
    describe("GET /", () => {

        // ========== USING PROMISE (return promise) (using expect from library)
        it("should return 200 OK", () => { 
            return request(server)
            .get("/")
            .expect(200);
        })

        // ========== USING SQUAD ASYNC/AWAIT (using expect from jest)
        it("using the squad (async/await) - res.status", async () => { 
            const response = await request(server).get("/");
            expect(response.status).toBe(200);
        });

        // ========== USING SQUAD ASYNC/AWAIT (using expect from jest)
        it("using the squad (async/await) - res.type", async () => { 
            const response = await request(server).get("/");
            expect(response.type).toBe("application/json"); // content-type
        });

        // ========== USING DONE CALLBACK (using expect from jest)
        it("using the squad (async/await) - res.type", done => { 
            request(server).get("/").then(res => {
                expect(res.type).toBe("application/json"); // content-type
                done();
            });     
        });

        // ========== CHECKING BODY/SHAPE OF RESPONSE (return Promise!)
        it("should return { api: 'up' }", () => {
            const expectedBody = { api: 'up' };
            return request(server).get("/").then(res => {
                expect(res.body).toEqual(expectedBody);
            });
        });

        // ========== CHECKING BODY/SHAPE OF RESPONSE (ASYNC)
        it("should return { api: 'up' } using async", async () => {
            const expectedBody = { api: 'up' };
            const response = await request(server).get("/");
            expect(response.body).toEqual(expectedBody);
            
        });
    });

});