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

async function add({
    username, 
    password,
    lastName,
    firstName
}) { 
    const user = await db("users")
    .insert({
        username: username,
        password: password,
        last_name: lastName,
        first_name: firstName
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