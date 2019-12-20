import React,{useState,state}  from'react'

import {Table}  from 'react-bootstrap'
import Data from '../Data/Data.json'
import Style from  '../../Component/Table/Table.css'
import {Link} from 'react-router-dom'




export default (props)=>{
 
 const sortBy=(key)=>{
    Data.sort((a,b) => a.firstName.localeCompare(b.firstName));

}
const sortByDec=(key)=>{
    Data.sort((a,b) => b.firstName.localeCompare(a.firstName));

}

const [list, updateList] = useState(Data);
 const handleRemoveItem =  (firstName) => {
   updateList(list => list.filter(item => item.firstName !== firstName))
    



    
  
// }
 
}
 






// const [list, setlist]= useState("");
const[state,setState]=  useState("");
const[searchItemIndex ,setsearchItemIndex] =useState("")

 const[searchTerm , setsearchTerm] = useState("")
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [phone, setphone] = useState("");
const [email, setemail] = useState("");
const [postBody,setpostBody] = useState("");
const [id, setid] = useState("");
const[searchResult,setsearchResult]=useState("")


// const Add=()=> {
 
//   list.push({id:id,firstName:firstName,lastName:lastName,phone:phone,email:email,postBody:postBody})

// }

    //  };
    
 
       
const handleChange = event =>{
  setsearchTerm(event.target.value)
}; 
const results= !searchTerm ? Data:

 Data.filter(row =>
  row.firstName.toLowerCase().includes(searchTerm.toLowerCase())
);


    
    return(
      
      
     

     
        <Table striped bordered hover variant="dark">
        
        
      
    <thead>
    <input type="text"placeholder="Search"  value={searchTerm}  onChange={handleChange}></input>
 
    <tr>

      <th>id </th>
      <th>firstName</th>
      <th>lastName</th>
      <th>phone</th>
      <th>EMAIL</th>
      <th>postBody </th>
      <h1>{props.word}</h1>
      <Link to="/Form">
   <button > Click </button>
   </Link>
      <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#"onClick={() => sortBy('firstName') }>Assending</a>
    <a href="#"onClick={() => sortByDec('firstName')}>Descending</a>
    
   
  </div>
</div>
      
    </tr>
   
    </thead>
  
  
      {

          results.map(row=>(
       
              <tr>
                    
                 <td>{row.id}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.postBody}</td>
                  <td> <button onClick={()=>handleRemoveItem (row.firstName)}> Clear All  </button> </td>
                  
                         <td> <button>+</button> </td> 
{/*           
<td>{id}</td>  */}

               
                


              </tr>
          ))

      }



<div className=" box">
<div className="form-group0">
          <label for="id">id</label>
          <input className="form-control" id="id" type="id" name="id"
           onChange={(e) => setid(e.target.value)} 
           placeholder="Enter  id" required/>
        </div>

        <div className="form-group1">
          <label for="firstname">firstName</label>
          <input className="form-control" id="firstname" type="firstname" name="firstName"
           onChange={(e) => setfirstName(e.target.value)}
           placeholder="Enter firstName" required />
        </div>
        <div className="form-group2">
          <label for="lastName">lastName</label>
          <input className="form-control" id="lastName" type="lastName" name="lastName"
           onChange={(e) => setlastName(e.target.value)}
           placeholder="Enter lastName" required />
        </div>
        <div className="form-group3">
          <label for="number">phone</label>
          <input className="form-control" id="phone"   type="number" name="number" 
          onChange={(e) => setphone(e.target.value)}
          placeholder="Enter phone number" pattern="[0-9]{4}-[0-9]{7}"   minLength="10" required />
          </div>
            <div className="form-group4">
          <label for="email">email</label>
          <input className="form-control" id="email"   type="email" name="email"
           onChange={(e) => setemail(e.target.value)} 
           placeholder="Enter email" pattern = ".+@globex.com" required />
     
          </div>
               <div className="form-group5">
          <label for="message">postBody</label>
          <input className="form-control" id="postBody"   type="postBody" name="postBody"
           onChange={(e) => setpostBody(e.target.value)}
           placeholder="Enter postBody" required/>
        </div>
        <div  className="submit">
         
        {/* {<Link to={{pathname: '/'}} > */}
          <button type="submit" className="btn btn-primary" >submit </button>
          {/* </Link>}  */}
        {/* <button type="submit" className="btn btn-primary" >submit</button> */}

       
     

        </div>
      
    </div>



</Table>






   
    );
}
 

