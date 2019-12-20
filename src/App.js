import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Data from '../../my-project/src/Component/Data/Data.json'
import './App.css';
import Home from './Component/Home/Home'
import Table from './Component/Table/Consumer'
import {BrowserRouter , Switch,Route}  from 'react-router-dom'
import  Form  from '../../my-project/src/Component/Form/Consumer'
import Loginform from './Component/Loginform/Loginform'
import LocalStorage from  './Component/LocalStorage/LocalStorage'
import Token from './Component/Token/Consumer'
import Uneeb   from  './Component/Uneeb/Uneeb'
import Animation from '../src/Component/Animation/Animation'
import Signup from './Component/Signup/Signup'
import Sidenav from  './Component/Sidenav/Sidenav'
import Spider  from './Component/Spider/Spider'
import Sidebar from './Component/Sidebar/Sidebar'
import Stylishbar from './Component/Stylishbar/Stylishbar'
import Designer from  './Component/Designer/Designer'
import Pure from  './Component/Pure/Pure'
import Show from './Component/Show/Show'

// import Diagslide from  './Component/diagslider/index'
// import Daraz   from  './Component/Daraz/Consumer1'

function App (){
//   constructor(props){
//     super(props)
//    this.state={
//      Data:Data
   
//    this.sortBy = this.sortBy.bind(this)
//   //  this.clearAll = this.clearAll.bind(this)
//    this.sortByDec = this.sortByDec.bind(this)
//   //  this.Edit = this.Edit.bind(this)
//   //  this.findIndex = this.findIndex.bind(this)
//    }


// sortBy(key)
 
//     Data.sort((a,b) => a.firstName.localeCompare(b.firstName));
//       this.setState({Data: Data});


 
//  sortByDec(key)
 
//  Data.sort((a,b) => b.firstName.localeCompare(a.firstName));
//      this.setState({Data: Data});


 
// // clearAll = (i)=>{
//   let Data=this.state.Data;
//   Data.splice(i,1);
//   this.setState({
//     Data:Data

//   })
// }





  // render(){
  return (
   
    
      
    <div className="App">
      


     
        <BrowserRouter>
       <Route path ={"/"}  exact = {true} component= {Sidenav}/> 
       <Route path ={"/Uneeb"}  exact = {true} component= {Uneeb}/>
       <Route path ={"/Sidebar"}  exact = {true} component= {Sidebar}/>
       <Route path ={"/Spiderr"}  exact = {true} component= {Spider}/>
       <Route path ={"/Animation"}  exact = {true} component= {Animation}/>
       <Route path ={"/Stylishbar"}  exact = {true} component= {Stylishbar}/>
       <Route path ={"/Designer"}  exact = {true} component= {Designer}/>
       <Route path ={"/Home"}  exact = {true} component= {Home}/>
       <Route path ={"/Pure"}  exact = {true} component= {Pure}/>
       <Route path ={"/Show"}  exact = {true} component= {Show}/>
      

  
 
         <Route path={"/Form"} component={Form}/> 
       </BrowserRouter>   
       </div>
    //  {/* <Home/>  */}
    //    {/* <Table   */}
      
    //   {/* // Data={this.state.Data}
    //   // sortBy={this.sortBy}
    //   // sortByDec={this.sortByDec}
    //   // clearAll={this.clearAll}
    //   // /> */ */}
  
    
  );
    }
    export default App;
     
    


