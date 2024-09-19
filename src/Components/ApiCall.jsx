import React, { useState } from "react";
function ApiCall(){
    const[apidata,setapidata] =useState([]);
     
    
    
    const handlefetch=async ()=>{
        let res=await fetch("https://jsonplaceholder.typicode.com/todos")
        let data=await res.json();
        console.log(data);
        setapidata(data);
    }

        
    
    
    return(
<div> 
    <h1>apicall</h1>

    <button onClick={handlefetch}>click</button>
    {apidata.map((data)=>(
        <div>

            <h1>{data.userId} {data.title}</h1>
        </div>
      
    ))}
</div>

    )
}
export default ApiCall 