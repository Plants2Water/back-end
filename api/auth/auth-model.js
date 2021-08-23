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
    last_name,
    first_name,
    telephone,
    email
}) { 
    const user = await db("users")
    .insert({
        username: username,
        password: password,
        last_name: last_name,
        first_name: first_name,
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
    return user[0];
}

module.exports = {
    add,
    findBy,
    findById,
};