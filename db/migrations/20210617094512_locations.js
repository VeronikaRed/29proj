exports.up = function(knex) {
    return knex.schema.createTable('locations', table => {
        table.increments('id');
        table.string('name');
        table.string('type');
        table.string('dimension');
        table.dateTime('created_at');
        table.dateTime('update_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations');
};
