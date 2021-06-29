exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('nickname');
        table.string('password');
        table.string('refresh_token');
        table.boolean('is_admin').defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
