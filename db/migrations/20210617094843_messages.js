exports.up = function(knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id');
        table.integer('writer_id').unsigned();
        table.foreign('writer_id').references('id').inTable('users');
        table.text('text')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages');
};
