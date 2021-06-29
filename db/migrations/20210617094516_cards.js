exports.up = function(knex) {
    return knex.schema.createTable('cards', table => {
        table.increments('id');
        table.string('name');
        table.string('status');
        table.string('species');
        table.string('type');
        table.string('gender');
        table.string('image');
        table.integer('location_id').unsigned();
        table.foreign('location_id').references('id').inTable('locations');
        table.dateTime('created_at');
        table.dateTime('update_at');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cards');
};
