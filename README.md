
## Description
This projects validates CPF through a client that checks ViaCEP api, also create an account through 
the endpoint.

The Layer Structure:

![Screenshot from 2022-07-20 20-10-05](https://user-images.githubusercontent.com/20117606/180103308-f4636410-cff2-4137-8812-3da8c1adf29a.png)


[GET] /address/{cep}  <= Returns if address further information if it exists

E.g. response 
```
{
    "cep": "69080-520",
    "address": "Travessa da Salvação",
    "address1": "",
    "city": "Manaus",
    "neighborhood": "Coroado",
    "state": "AM"
}
```

[POST] /account

input body:
```
{
  "cpf": "0091382432",
  "firstName": "John",
  "lastName": "Paul",
  "phone": "+559298284322",
  "accountAddress": {
    "address": "asdas",
    "address1": "",
    "cep": "69080520",
    "city": "Manaus",
    "state": "AM",
    "neighborhood": "centro"
  }
}
```

Example of how to use through Postman:

![omnichannel](https://user-images.githubusercontent.com/20117606/180104129-653c9e86-cb80-47ff-805d-f047f3d82599.gif)


### How to start a docker of this application

If in your machine you have a docker-compose version installed just run, and 
a docker image will be started, the endpoints can be accessed in localhost in port localhost:3000:

```bash 
$ docker-compose up -d
```

##Requirements: 
- node 16.0.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

