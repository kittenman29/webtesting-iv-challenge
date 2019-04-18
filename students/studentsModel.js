const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(student) {
  const [id] = await db('students').insert(student, 'id')
  return db('students')
  .where({id})
  .first()
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('students');
}

function findById(id) {
  return null;
}