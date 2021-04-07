import React,{Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

import Create from "./Components/create.component"
import Edit from "./Components/edit.component"
import Index from "./Components/index.component"

class App extends Component{
    render(){
        return(
<Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand " >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

      <ul className="navbar-nav" >

        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" >Home</Link>
        </li>

        <li className="nav-item">
          <Link to={"/create"} className="nav-link" >Create</Link>
        </li>

        <li className="nav-item">
          <Link to={"/index"} className="nav-link" >Index</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>


<div className="container mt-5">
<h2>Welcome to React Crud application</h2>
</div>


<Switch>
 
 <Route exact path ="/create" component={Create}/>

 <Route exact path="/edit/:id" component={Edit}/>

 <Route exact path="/index" component={Index}/>

</Switch>



</Router>

        )

    }
}

export default App