import React from'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


function App (props){
    return(
        <BrowserRouter>
        <div className="container fluid">
          
          
          <Switch>
             <Route path ="/" component={Register} exact={true}/>
             <Route path="/login" component={Login}/>
             <Route path="/home" component={Home}/>
             <Route path="/register" component={Register}/>
          </Switch>
        </div>
        </BrowserRouter>
        
    )
}
export default App