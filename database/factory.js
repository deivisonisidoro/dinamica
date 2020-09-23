

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/Veiculo');


Factory.blueprint('App/Models/Veiculo', (faker, i, data = {}) => {
    return {
        veiculo: faker.string(),
        marca: faker.string(),
        ano: faker.integer({min:1, max: 2020}),
        descricao: faker.paragraph(),
        vendido: faker.bool(),
       
        ...data,
    };
  
});