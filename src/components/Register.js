import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            role:'',
            email:'',
            password:''
        }
    }
    
        handleChange=(e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })

        }
        handleSubmit=(e)=>{
           e.preventDefault()
           
           const formData={
               firstname:this.state.firstname,
               lastname:this.state.lastname,
               username:this.state.username,
               role:this.state.role,
               email:this.state.email,
               password:this.state.password
           }
        //    console.log(formData)
           const redirect=()=>{
           return  this.props.history.push('/login')
        }
            this.props.dispatch(startRegisterUser(formData,redirect))
           
        }
        
    
    render(){
        return(<div>
            <h2>Register with us</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-group">
            <label>Firstname</label>
              <input type="text" name="firstname"  class="form-control"value={this.state.firstname} onChange={this.handleChange} /><br/>
            <label>Lastname</label>
              <input type="text" name="lastname"  class="form-control"value={this.state.lastname} onChange={this.handleChange} /><br/>
            <label>Username</label>
              <input type="text" name="username"  class="form-control"value={this.state.username} onChange={this.handleChange} /><br/>
            <label>Role</label>
              <input type="text" name="role"  class="form-control"value={this.state.role} onChange={this.handleChange} /><br/>
            <label>Email</label>
              <input  type="text" name="email" class="form-control" value={this.state.email} onChange={this.handleChange}/> <br/>
            <label>Password</label>
             <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange}/><br/></div>
             <input  type="submit" value="register" class="btn btn-primary"/>
            </form>
             </div>)
    }
}
export default connect() (Register)
              
             