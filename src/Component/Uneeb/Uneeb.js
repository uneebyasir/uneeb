import React  from  'react';
import LocalStorage from '../LocalStorage/LocalStorage';



export  default()=>{
    const Logout=()=>{
            localStorage.removeItem("token");
            window.location.replace("/")
    }
    return(

        

        <div>
    <h >Welcome </h>
    <button   onClick={()=>Logout()}>Logout</button>
    </div>

    );
}