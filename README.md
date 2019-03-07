TravisCI
[![Build Status](https://travis-ci.org/peterito/foodOrderingApp.svg?branch=master)](https://travis-ci.org/peterito/foodOrderingApp)

[![Coverage Status](https://coveralls.io/repos/github/peterito/foodOrderingApp/badge.svg?branch=master)](https://coveralls.io/github/peterito/foodOrderingApp?branch=master)


Prerequisites
The following tools will be needed to run this application successfully:

Node v8.11.1 or above
Npm v6.5.0 or above
Endpoints
GET api/v1/meals/ Caterers can get all meals

POST api/v1/meals/ Catereres can add meal

PUT api/vi/meals/:id Caterers can update meal

DELETE api/v1/meals/:id Caterers can delete meal

GET api/v1/menu/ Caterers and Users can Get the menu for the day

POST api/v1/menu/ Caterers can Set a menu for the day

GET api/v1/orders Get All Orders

POST api/v1/orders Users can make orders

PUT api/v1/orders/:id Users can modify their orders

Installation

On your Local Machine

Pull the development branch off this repository

Run npm install to install all dependencies

Run npm run dev-start to start the app

Run npm test to run test

Access endpoints on localhost:8000

Built With

Node.js - Runtime-Enviroment

Authors

Peter Oyebamiji