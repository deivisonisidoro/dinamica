# Dinamica 

## Adonis API application

Isto é uma API REST, que utiliza o framework AdonisJs, ele vem pré-configurado com.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Arquitetura 

O adonis já vem com uma arquitetura de pasta já definida, eu gosto de usá-lo porque ele ja tem uma "opinião", está "opinião" ajuda para a organização de um time, determinando por exemplo onde colocar as regras de negocios, fazendo assim que não aja atrito no time      
## Setup

Use o comando adonis para instalar o blueprint

```bash
adonis new yardstick --api-only
```

ou clone manualmente o repo e execute `npm install`.

## Configuração do projeto 

Para configurar o projeto é bem simples, renomeando o arquivo .env.example para .env e configurado o seu banco de dados, e adicioando o nome do banco de dados a sua escolha e a senha a sua escolha. Logo depois é só executar a migrations para adicionar base de dados
### Migrations

Execute o seguinte comando para executar migrações de inicialização.

```js
adonis migration:run
```
