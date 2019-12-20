import React,{useState,useEffect}  from 'react'



export default()=>{

    // const onChange  = event=>{
    //     localStorage.setItem("myValueInLocalstorage", event.target.value);
    const [value, setValue] = useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
  const onChange = event => setValue(event.target.value);

    
    // };


    return(
    
        <div>
        <h> hello  world  with  local Storage!</h>
        <input  value={value} type="text"  onChange={onChange} className="form-control" id="firstname" type="firstname" name="firstName"/>
       
         </div>

       );
        }