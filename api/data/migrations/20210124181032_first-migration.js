exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
      table.increments('user_id');
      table.string('username', 200).unique().notNullable();
      table.string('password', 200).notNullable();
      table.string('last_name', 200).notNullable();
      table.string('first_name', 200).notNullable();
      table.string('telephone', 200).unique().notNullable();
      table.string('email', 200).unique().notNullable();
 
      table.timestamps(false, true);
    })
    .createTable('plants', (table) => {
      table.increments('plant_id');
      table.string('species', 200);
      table.string('nickname', 200).notNullable();
      table.integer('h2oFrequency');
      table.date('last_watered');
      table.string('photo_url', 250);
      table.string('notes', 1000);
      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('RESTRICT');
      table.timestamps(false, true);
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants');
  await knex.schema.dropTableIfExists('users');
};
