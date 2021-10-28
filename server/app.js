const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const RouteFormulaire = require('./routes/formulaire');



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use('/api/formulaire', RouteFormulaire)



 
    


module.exports = app