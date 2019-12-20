import  React,{useState} from  'react'
import axios from 'axios';
import {apiPath} from '../Config/Config'
import Loader from 'react-loader-spinner'



export default(props)=>{
    let {dispatch,word,name}= props;
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [errormessage,setErrormessage]=useState("");

    const userAuthentication=(event)=>{
        event.preventDefault();
        let payLoad={email:email,password:password};
        axios.post(apiPath+"/api/login",payLoad).then(response=>{
            localStorage.setItem("token",response.data.token);
            setpassword("");
            setemail("");
            window.location.replace("/Uneeb");
        })
            .catch(err=>{
                if (err.message === "Request failed with status code 404") {
                    setErrormessage("Invalid Password");
                }
                else if (err.message === "Request failed with status code 500")
                {
                    setErrormessage("Email does not exist");
                }

            });


    };

    
        
    
       
    


    return(
    <div> 
        <h1>{props.word}</h1>
    <h2>{props.name}</h2>

       
       
        <form className='demoForm' onSubmit={event=>userAuthentication(event)}>
            <h2>Login</h2>
            <div className='form-group'>
                <label >Email</label>
                <input type='email' className='form-control' name='email' value={email} onChange={event=>setemail(event.target.value)} required/>
            </div>

            <div className='form-group'>
                <label >Password</label>
                <input type='password' className='form-control' name='password' value={password} onChange={event=>setpassword(event.target.value)} required />
            </div>
            <p style={{color: "red"}}>{errormessage}</p>
          
       
            <button   type="submit"> submit </button>
            <button onClick={()=>{dispatch({
                    type :"SET_WORD",
                    payLoad: "my  friend"
            })
            }}>
                Change  text
                </button>
          
        </form>
        </div>
    );
}