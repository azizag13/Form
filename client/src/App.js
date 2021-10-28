import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'



class App extends Component {
  
  constructor(){
    super() 
    this.state = {
      name: '',
      email: '',
      telephone: '',
    }
    
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeTelephone = this.changeTelephone.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
       
  changeName(event){
    this.setState({
      name:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changeTelephone(event){
    this.setState({
      telephone:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    const registered = {
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone
    };

    axios.post('http://localhost:3030/api/formulaire', registered )
    .then(response =>  this.setState({  registeredId: response.data.id }));
    this.setState({
      name: '',
      email: '',
      telephone: ''
    })
    
  }
  componentDidMount() {
    fetch('http://localhost:3030/api/formulaire')
    .then((response) => response.json())
    .then(json => {
        this.setState({ 
          formulaires: json
         });
    });
}
  render() { 
    console.log('State: ', this.state);
    return <div>
      <div className="container">
        <div className="form-div">
          <h1> Formulaire </h1>
         <form onSubmit={this.onSubmit}>
           <input type='text'
           placeholder='name'
           onChange= {this.changeName}
           value={this.state.name}
           className='form-control form-group'
           />
           <br/>
           <input type='text'
           placeholder='Email'
           onChange= {this.changeEmail}
           value={this.state.email}
           className='form-control form-group'
           />
           <br/>
           <input type='text'
           placeholder='telephone'
           onChange= {this.changeTelephone}
           value={this.state.telephone}
           className='form-control form-group'
           />
           <br/>
           <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
         </form>
            <div>
          
            </div>
        </div>
      </div>
    </div>;
  }
}
 
export default App;
