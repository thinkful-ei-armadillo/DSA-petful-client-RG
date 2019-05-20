# Petful

Petful is a dog and cat adoption app. We have a lot of good boys and girls ready to be adopted!
Whenever you're ready to give one of our dogs or cats a forever home, click the link below!

## How To Use
Start by clicking on 'lets adopt' to get redirected to the adoption page. From the adoption page you will see 2 list with the available dogs and cats that can be adopted. But, since we only allow pets to be adopted according to which pet came in into the clinic first, you can only adopted pets that are first in line waiting to be adopted.

## Demo

https://petful-app.robinkhiv.now.sh/

## Tech Summary

Our server utilizes the first-in, first-out (FIFO) Queue data structure to literally queue up the next cat and dog for adoption. Our GET and DELETE requests to the API access our lists of cats and dogs and removes the pet when adopted. Enjoy taking one of our pets home!

# Installation
```
git clone https://github.com/thinkful-ei-armadillo/DSA-petful-client-RG petful-client
cd petful-client  
npm install 
```
## Built With

* Express.js
* Node.js
* RESTful API
* Knex.js
* PostgreSQL
* Deployed with Heroku

## Contributions
Robin Khiv and Geordie Connell

## Api Reference 
https://github.com/thinkful-ei-armadillo/rg-petful-server

