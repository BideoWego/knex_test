const knex = require('knex')({ client: 'pg' });

const query = knex.select('*').from('users').where('id', 1).toSQL().toNative();

console.log(query);
