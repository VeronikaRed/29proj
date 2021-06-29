exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {nickname: 'John', password: '12345', is_admin: false},
        {nickname: 'George', password: '12345', is_admin: false},
        {nickname: 'Mark', password: '12345', is_admin: true},
        {nickname: 'Sophia', password: '12345', is_admin: false},
        {nickname: 'Isabella', password: '12345', is_admin: false},
        {nickname: 'Emma', password: '12345', is_admin: true},
        {nickname: 'Olivia', password: '12345', is_admin: false},
        {nickname: 'Robert', password: '12345', is_admin: false},
        {nickname: 'Michael', password: '12345', is_admin: true},
        {nickname: 'William', password: '12345', is_admin: false},
        {nickname: 'Richard', password: '12345', is_admin: false},
        {nickname: 'Thomas', password: '12345', is_admin: true},
      ]);
    });
};
