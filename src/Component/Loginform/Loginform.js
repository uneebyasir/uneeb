import  React,{useState} from 'react'
import Style from '../../Component/Loginform/Loginform.css'
import axios from 'axios'
import Data from '../Data/Data.json'
import {Link} from 'react-router-dom'
import {apiPath} from  '../../Component/Config/Config'
import Uneeb from  '../Uneeb/Uneeb'





export default()=>{

  // const [data, setdata]= useState(Data);
   


 
  //  const [emailVaLidation , setemailValidation]  =   useState(false);
 
  // const [passwordValidation , setpasswordValidation] =  useState(false);
 
  // const userAuthentication=(event)=>{
  //       event.preventDefault();
  //       data.push({firstName:" ",lastName:" ",phone:"",email:email,postBody:""});
  //       console.log(data)
    
  // }


const [errormessage,setErrormessage]=useState("");
 const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const userAuthentication=(event)=>{
  event.preventDefault();
    // console.log(email,password)
    //  let payLoad={email:email,password:password};
    // axios.post("https://json-team-crud.herokuapp.com/api/team",payLoad).then(response=>{
    //     setpassword("");
    //     setemail("");
    //    window.location.replace("/Table");
       let payLoad={email:email,password:password};
       axios.post(apiPath +"/api/login",payLoad).then(response=>{
           localStorage.setItem("token",response.data.token);
            setpassword("");
            setemail("");
            window.location.replace("/Uneeb");
            


        })
            .catch(err=>{
                if (err.message == "Request failed with status code 404") {
                    setErrormessage("Invalid Password");
                }
                else if (err.message =="Request failed with status code 500")
                {
                    setErrormessage("Email does not exist");
                }

            });

       
};

   
  



// console.log(email,password)

    return (


    <form onSubmit={event=>userAuthentication(event)}  >
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email}
       onChange={(e)=>setemail(e.target.value)}
       placeholder="Enter Email" required/>
      
       
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"  value={password} 
       onChange={(e) => setpassword(e.target.value)} 
       placeholder="password" required/>
          <p style={{color:"red"}}>{errormessage} </p>
        
    </div>
    <div className="checkbox">
      <label><input type="checkbox" name="remember"/> Remember me</label>
   
    </div>
    <button type="submit" className="btn btn-default" >Submit</button>
  </form>



    );
  }