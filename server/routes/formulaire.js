const express = require('express');
const router = express.Router();
const FormCtrl = require('../controllers/formulaire');
const check = require('express-validator/check').check;





router.get('/', FormCtrl.getAllForms); 


 router.post('/', [
    check('name', 'Please provide a name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
], FormCtrl.createFormulaire);




module.exports = router;
