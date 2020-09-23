'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Veiculo = use('App/Models/Veiculo') 


/**
 * Controlador de recursos para interagir com os veiculos
 */
class VeiculoController {

   /**
   * Mostra uma lista de todos os veiculos.
   * GET veiculos
   */
  async index () {
    const veiculo = await Veiculo.all()
    return veiculo

  }

  /**
   * Cria / salva um novo veiculo.
   * POST veiculos
   */

  async store ({ request, response}) {
    const data = request.only(["veiculo", "marca", "ano", "descricao", "vendido"])
    const veiculo = await Veiculo.create(data)
    return  response.status(201).json(veiculo)
  }

  /**
   * Exibir um único veiculo.
   * GET veiculos/:id
   */
  async show ({ params}) {
    const veiculo = await Veiculo.find(params.id)
    return veiculo
  }

  
  /**
   * Atualize os detalhes do veiculo.
   * PUT ou PATCH veiculos/:id
   */
  async update ({ params, request}) {
    const data = request.only(["veiculo", "marca", "ano", "descricao", "vendido"])
    const veiculo = await Veiculo.find(params.id)
    veiculo.merge(data)
    await veiculo.save()
    return veiculo
  }
  /**
   * Exclua um veiculo com id.
   * DELETE veiculos/:id
   */
  async destroy ({ params}) {
    const veiculo = await Veiculo.find(params.id)
    await veiculo.delete()
  }
}

module.exports = VeiculoController
