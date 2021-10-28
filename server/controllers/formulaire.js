const Formulaire = require('../models/formulaire');
const { validationResult } = require('express-validator');



 exports.getAllForms =  (req, res) => {
 Formulaire.find()
 .then((forms)=>{ return res.status(200).json({forms}) })
 .catch((error) => { return res.status(400).json({error})})
}


exports.createFormulaire = async (req, res) => {

const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    else {
        const form = new Formulaire(req.body)
        form.save()
    .then((formulaire) => {
        return res.status(201).json({formulaire})
    })
    .catch((error) => { return res.status(400).json({error}) });
    }
    
     
    const {  name, email, telephone } = req.body;
  
    try {
      // 1) CHECK IF USER EXSITS
      let form = await Formulaire.findOne({ email });
      if (form) {
        return res.status(400).json({
          errors: [{
            msg: 'Formulaire already exists'
          }]
        })
      }
    
      
      form = new Formulaire({
        name, email, telephone
      })
     
    
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
      }

}

 
