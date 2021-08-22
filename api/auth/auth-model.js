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
    firstName,
    telephone,
    email
}) { 
    const user = await db("users")
    .insert({
        username: username,
        password: password,
        last_name: lastName,
        first_name: firstName,
        telephone: telephone,
        email: email
    }, [
        "user_id",
        "username",
        "password",
        "first_name",
        "last_name",
        "telephone",
        "email"
    ]);
    return user;
}

module.exports = {
    add,
    findBy,
    findById,
};