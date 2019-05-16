const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const ids = await db("hobbits").insert(hobbit);
  return db("hobbits").where({ id: ids[0] }).first();

  // or

  
// const [id] = await db("hobbits").insert(hobbit);
// return db("hobbits").where({ id }).first();

  
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
