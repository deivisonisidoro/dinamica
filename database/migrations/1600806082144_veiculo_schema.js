'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeiculosSchema extends Schema {
  up () {
    this.create('veiculos', (table) => {
      table.increments();
      table.string('veiculo').notNullable();
      table.string('marca').notNullable();
      table.integer('ano').notNullable();
      table.text('descricao').notNullable();
      table.bool('vendido');
      table.timestamps();
    })
  }

  down () {
    this.drop('veiculos')
  }
}

module.exports = VeiculosSchema