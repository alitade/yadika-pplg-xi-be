/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {hash} = require("bcrypt");

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()

  await knex('users').insert([
    {
      id:"10000000-0000-0000-0000-000000000001",
      username: 'admin',
      password: hash('123',10),
      role: 'admin'
    }
  ])};
