exports.up = function(knex) {
    return knex.schema.createTable('episodes', table => {
        table.increments('id');
        table.string('name');
        table.dateTime('created_at');
        table.dateTime('update_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('episodes');
};
