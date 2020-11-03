import React from 'react'
import {connect} from 'react-redux'
import {startUserLogout } from '../actions/userAction'
import {Navbar,Nav} from 'react-bootstrap'


function Home(props){
    const handleLogout=()=>{
      props.dispatch(startUserLogout())
    }
    
        return(<div>
             <Navbar bg="dark" variant="dark">
     { Object.keys(props.user).length!==0 ?(<div>
      <Nav className="mr-auto">
      <Nav.Link href="/home" onClick={handleLogout}>Logout</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link></Nav></div>):
      (<div>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
      </div>)
      }</Navbar>
       <table class="table table-striped">
  <thead>
    <tr class="table-secondary">
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">lastname</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    
  {props.user.map((ele)=>{
        return ( <tr class="table-warning">
            <td>{ele._id}</td>
            <td>{ele.username}</td>
            <td>{ele.lastname}</td>
           <td><button class="btn btn-success">{ele.role}</button></td> 
            </tr>)
        })}
    
 </tbody>
</table>
      </div>) }

    const mapStateToProps=(state)=>{
        return{
             user: state.user
        }
        }
        
        export default connect(mapStateToProps)(Home)
              
             