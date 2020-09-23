const { test, trait } = use('Test/Suite')('Veiculo');


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Veiculo = use('App/Models/Veiculo');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

// Testando a adição de um veiculo
test('Adiciona um novo veículo', async ({
  assert,
  client,
}) => {
    
  //usando um model falso para fazer o teste  
   await Factory.model('App/Models/Veiculo').create();

  // Passando como parametro dados até o pontos de entrada
  const response = await client
    .post('/veiculos')
    .send({
      veiculo: "Veiculo1",
      marca: 'Marca1',
      ano: 2020,
      descricao: 'Eu estou testando um texto',
      vendido: true,
    })
    .end();
  
  response.assertStatus(201)
  assert.exists(response.body.id);
});

// Testando a listagem de todo os veiculos existente 
test("Retorna todos os veículos", async ({assert, client})=>{

  const veiculo = await Factory.model('App/Models/Veiculo').make();

  
  const response = await client
    .get('/veiculos')
    .end()

  response.assertStatus(200)
  
  assert.equal(response.body.id, veiculo.id)
  
})

// Testando se um veiculo especifico pode ser encontrado
test("Retorna os detalhes do veículo", async ({assert, client})=>{

  const veiculo = await Factory.model('App/Models/Veiculo').create();

  
  const response = await client
    .get(`/veiculos/${veiculo.id}`)
    .end()

  response.assertStatus(200)
  
  assert.equal(response.body.marca, veiculo.marca)
})

// Testando a atualização de todos os dados de um veiculo especifico
test("Atualiza os dados de um veículo", async ({assert, client})=>{
  
  const veiculo = await Factory.model('App/Models/Veiculo').create();


  
  const response = await client
    .put(`/veiculos/${veiculo.id}`)
    .send({
      veiculo: "Veiculo2",
      marca: 'Marca2',
      ano: 2019,
      descricao: 'Texto testado',
      vendido: false,
    })
    .end()

  response.assertStatus(200)
  
  assert.equal(response.body.id, veiculo.id)
})

// Testando a atualização de um dado, de um veiculo especifico
test("Atualiza apenas alguns dados do veículo", async ({assert, client})=>{
  
  const veiculo = await Factory.model('App/Models/Veiculo').create();


  
  const response = await client
    .patch(`/veiculos/${veiculo.id}`)
    .send({
      veiculo: "Veiculo3"
    })
    .end()

  response.assertStatus(200)
  
  assert.equal(response.body.id, veiculo.id)
})

// Testando a exclusao de todos os dados de um veiculo especifico
test("Apaga o veículo", async ({assert, client})=>{
  const veiculo = await Factory.model('App/Models/Veiculo').create();

  
  const response = await client
    .delete(`/veiculos/${veiculo.id}`)
    .end()

  response.assertStatus(204)
  const checkVeiculo = await Veiculo.find(veiculo.id)  
  
  assert.isNull(checkVeiculo)
})