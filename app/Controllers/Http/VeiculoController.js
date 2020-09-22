'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Veiculo = use('App/Models/Veiculo') 

class VeiculoController {
 
  async index ({ request, response }) {
    const veiculo = await Veiculo.all()
    return veiculo

  }


  async store ({ request, response}) {
    const data = request.only(["veiculo", "marca", "ano", "descricao", "vendido"])
    const veiculo = await Veiculo.create(data)
    return  response.status(201).json(veiculo)
  }

  async show ({ params}) {
    const veiculo = await Veiculo.find(params.id)
    return veiculo
  }

  
  async update ({ params, request}) {
    const data = request.only(["veiculo", "marca", "ano", "descricao", "vendido"])
    const veiculo = await Veiculo.find(params.id)
    veiculo.merge(data)
    await veiculo.save()
    return veiculo
  }

  async destroy ({ params}) {
    const veiculo = await Veiculo.find(params.id)
    await veiculo.delete()
  }
}

module.exports = VeiculoController
