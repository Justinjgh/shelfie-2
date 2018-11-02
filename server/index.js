const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

//Controller file
const controller =require('./controller');

const app = express();

app.use(bodyParser.json());

// Something isn't working here come back to if you get this far
massive( process.env.CONNECTION_STRING ).then( db => {
//    console.log(`connected to database via: ${process.env.CONNECTION_STRING}`)
    app.set('db', db);
  }).catch(err => {
      console.log('something is fkd, not connected to database', err)
  });

const port = process.env.PORT ;
app.listen(port, () => {
    console.log(`listening on port:${port}`)
})

app.get('/api/inventory',controller.getInventory)
app.post('/api/product',controller.addProduct)
app.delete('/api/inventory/:id',controller.deleteProduct)
