import  React, { useState }  from  'react'

import  Style  from  '../Signup/Signup.css'






export  default()=>{




  const submitHandler=(event)=>{
    event.preventDefault();
  }
    const[email ,  setemail] =  useState("");
    const[phone ,  setphone] =  useState("");
    const[name , setname] = useState("");
    

    const[password ,  setpassword] =  useState("");
    const[emailValidation , setemailValidation] = useState(false);
    const[passwordValidation, setpasswordValidation] = useState(false);
    const[phoneValidation, setphoneValidation] = useState(false);
    const[emailValidation1 , setemailValidation1] = useState(false);

  const handle=()=>{
 
  if(!email){
      setemailValidation(true)
     
         }
         else if (!email.match("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")){
          setemailValidation1(true)
  }
  
  
      if(!password){
    setpasswordValidation(true)
}
 if(!phone){
  setphoneValidation(true)
 
  
 }



 

 

  }

      
     
    return(


  <div   className="uneeb">
     <form onSubmit = {event=>submitHandler(event)}className="mind">
      <label for ="Email">Email</label>
        <input className="form-control" id="email" type="text" name="email" placeholder=" Enter  email" 
        //  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        onChange={(e)=>setemail(e.target.value)}
        />
       
       <p>{emailValidation ? "Email  isrequired ":"" }</p>
       <p>{emailValidation1? "@ is missing ":"" }</p>
     

       
       <label for = "password">  Password</label>
        <input className="form-control" id="password" type="password" name="password" placeholder="Enter password" required
        minLength="4" maxLength="6" 
      
         onChange={(e)=>setpassword(e.target.value)}/>
              <p>{passwordValidation? "password  is  required ":"" }</p>



          {/* <label for="number">phone</label>
          <input className="form-control" id="phone"   type="text" name="number" 
          onChange={(e) => setphone(e.target.value)}
          placeholder="Enter phone number" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"  required />
          <p>{phoneValidation? "phone  is required ":"" }</p>
          */}
        
   

   
       <div className="mine">
        <button  onClick={() => handle()} >  clicked  </button>
        </div>
         </form>
        </div>
        
     










    );
}