const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js"); // looking at testing db since we're testing


describe("Hobbits Model", () => {

    // prevent duplicate records when restarting test
    // before every test, go to hobbits table and truncate the table
    beforeEach(async () => {
        await db("hobbits").truncate();
    });

    describe("insert()", () => {
        it("should insert provided hobbit", async () => {
            await Hobbits.insert({ name: "gaffer" });

            const hobbits = await db("hobbits");

            expect(hobbits).toHaveLength(1);

        });

        it("should insert provided hobbits", async () => {
            let hobbit = await Hobbits.insert({ name: "gaffer" });
            expect(hobbit.name).toBe("gaffer");

            hobbit = await Hobbits.insert({ name: "sam" });
            expect(hobbit.name).toBe("sam");


            const hobbits = await db("hobbits");
            expect(hobbits).toHaveLength(2);

            

        });

        
    });
});