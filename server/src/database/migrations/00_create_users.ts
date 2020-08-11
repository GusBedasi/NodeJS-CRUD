import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('nascimento').notNullable();
        table.string('cpf').notNullable();
        table.string('celular').notNullable();
        table.string('email').notNullable();
        table.string('endereco').notNullable();
        table.string('obs').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}