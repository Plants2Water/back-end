const db = require('../data/db-config');

function findById(id) {
return db("users")
.where("id", id)
.select("*").first();
}

function findBy(filter) {
    return db("users")
    .where(filter)
    .select("*");
  }

async function add({ username, password, last_name, first_name, e, email }) { 
    const user = await db('users')
    .insert({
        username, 
        password
    }, [
        "user_id",
        "username",
        "password"
    ]);
    return user;
}

module.exports = {
    add,
    findBy,
    findById,
};