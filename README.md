# Dinamica 

## Funcinamento 

O sistema faz um CRUD, ele tem como funcionalidade, adicionar novos veículos, atualizar vários dados, ou apenas dados específicos, retornar os detalhes do veículo, e apagar qualquer tipo de dados do veículo

## Aplicação API Adonis

Isto é uma API REST, que utiliza o framework AdonisJs, ele vem pré-configurado com:

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Arquitetura 

O adonis já vem com uma arquitetura de pasta já definida, eu gosto de usá-lo porque ele ja tem uma "opinião", está "opinião" ajuda para a organização de um time, determinando por exemplo onde colocar as regras de negocios, fazendo assim que não aja atrito no time      


## Configuração do projeto 

Para configurar o projeto é bem simples, primeiro certfique que tenha a cli  do adonis instalado, se nao tiver é só usar o comando:


```bash
yarn add -g @adonisjs/cli
```

Depois de clonar o projeto rode o comando: 

```js
yarn add @adonisjs/ignitor
```
### Arquivo .env

O arquivo .env serve para configuar o projeto, nele pode-se definir em qual porta a api vai ser executada, o nome do banco de dados, a senha, e diversas outras coisas, nao pode esquecer de ter renomeado o arquivo .env.example para .env e configurado o seu banco de dados.    

### Migrations

A migration é uma forma de versionar o schema de sua aplicação, execute o seguinte comando para executar migrações de inicialização.

```js
adonis migration:run
```

## Testes

Existem 6 testes unitários que tem como objetivo testar se as funcionalidades da Api estão funcionando corretamente, e se elas nao afetam nenhuma outra do sistema, para rodar os testes execute o comando:  

```js
adonis test
```
