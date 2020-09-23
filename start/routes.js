'use strict'

/*
|--------------------------------------------------------------------------
| Rotas
|--------------------------------------------------------------------------
|
| As rotas Http são pontos de entrada para o aplicativo
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
     O Route.resource atribui rotas CRUD a um controlador usando uma única linha de código
*/ 
Route.group(()=>{ 
    Route.resource("/veiculos", "VeiculoController").apiOnly()
})