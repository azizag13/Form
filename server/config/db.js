const mongoose = require('mongoose');

const URI =
'mongodb+srv://aziz:aziz123@aziz.yiwfb.mongodb.net/analyse?retryWrites=true&w=majority';
const connectDB = async ()=> {
    mongoose.connect (URI , {
      
      useNewUrlParser: true, 
      useUnifiedTopology: true
        
    });  err => {
      if(err) throw err;
      
   }
    

    
    console.log('db connected..!')

};

module.exports = connectDB