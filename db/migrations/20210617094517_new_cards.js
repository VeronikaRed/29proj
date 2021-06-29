exports.up = function(knex) {
    return knex.schema.table('cards', table => {
        table.dropColumn('update_at');
        table.dateTime('updated_at');
      })
};

exports.down = function(knex) {
    return knex.schema.table('cards', table => {
        table.dropColumn('updated_at');
        table.dateTime('update_at');

      })
};
