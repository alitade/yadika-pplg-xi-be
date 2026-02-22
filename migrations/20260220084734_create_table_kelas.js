/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('kelas', function(table) {
        table.string('kode_kelas').notNullable().unique()
        table.string('nama_kelas').notNullable()
        table.timestamps(true, true)
        table.timestamp("deleted_at")
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('kelas')

};
