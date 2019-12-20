import React,{useState}  from  'react'
import {Link}   from  'react-router-dom'
import   Style from  '../../Component/Form/Form.css'
import Data from '../Data/Data.json'





export default(props)=>{
  let{dispatch,name,word} = props;

  const userAuthentication=(event)=>{
    event.preventDefault();
    Data.push({firstName:firstName,lastName:lastName,phone:phone,email:email,postBody:postBody});
    console.log(email)

};

  

 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [postBody,setpostBody] = useState("");



//   const Add=()=> {
//      let newlist = [...list];
//     newlist.push({firstName:firstName,lastName:lastName,phone:phone,email:email,postBody:postBody});
// //   }
//     setlist(newlist);
//     setfirstName("");
//     setlastName("");
//     setphone(" ");
// }
  
  
  
  
  






    return(
      


<div className="container-fluid">
	
    <h1>{props.word}</h1>
    <h2>{props.name}</h2>
  
	
	<div className="bird-container one">
		<div className="bird bird--one"></div>
	</div>
	
	<div className="bird-container two">
		<div className="bird bird--two"></div>
	</div>
	
	<div className="bird-container three">
		<div className="bird bird--three"></div>
	</div>
	
	<div className="bird-container four">
		<div className="bird bird--four"></div>
	</div>
   

        <div className=" box"  >
      

          <form onSubmit={event=>userAuthentication(event)}>
        <div className="form-group1">
          <label for="firstname">firstName</label>
          <input className="form-control" id="firstname" type="firstname" name="firstName"
           onChange={(e) => setfirstName(e.target.value)} 
           placeholder="Enter firstName" required/>
        </div>
        <div className="form-group2">
          <label for="lastName">lastName</label>
          <input className="form-control" id="lastName" type="lastName" name="lastName"
           onChange={(e) => setlastName(e.target.value)}
           placeholder="Enter lastName" required/>
        </div>
        <div className="form-group3">
          <label for="message">phone</label>
          <input className="form-control" id="phone"   type="phone" name="phone" 
          onChange={(e) => setphone(e.target.value)}
          placeholder="Enter phone number"  required/>
          </div>
            <div className="form-group4">
          <label for="message">email</label>
          <input className="form-control" id="email"   type="email" name="email"
           onChange={(e) => setemail(e.target.value)} 
           placeholder="Enter email" required/>
     
          </div>
               <div className="form-group5">
          <label for="message">postBody</label>
          <input className="form-control" id="postBody"   type="postBody" name="postBody"
           onChange={(e) => setpostBody(e.target.value)}
           placeholder="Enter your postBody"  required/>
        </div>
        <div  className="submit">
          
        {/* {<Link to={{pathname:'/'}} ><button type="submit" className="btn btn-primary" >submit</button></Link>} */}
        <button type="submit" className="btn btn-primary" >submit</button>
        <button onClick={()=>{dispatch({
                    type :"SET_WORD",
                    payLoad: "Adeel"
            })
            }}>
                Change text </button>
        </div>
       
            </form>
        
           
    </div>
    

    </div>
   
    
    );
}