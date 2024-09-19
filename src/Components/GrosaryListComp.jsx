import React, { useEffect,useState } from "react";
import axios from "axios";

function GrosaryListComp(){
    const[ grosarydata,setgrosarydata]=useState([])

    const[input,setinput]=useState("")
    
    const handlefetch =async ()=>{
         let res = await axios.get("http://localhost:3000/todoList")
       
         setgrosarydata(res.data)
    }

    useEffect(()=>{
        handlefetch()

    },[]);


    const handleinput=(e)=>{
      setinput(e.target.value);
    };
    const handlepost=()=>{
        let body ={
            task:input,
        };
        let post=axios.post("http://localhost:3000/todoList",body);
        alert("success")
        handlefetch();
    };

    return(
        <div>

  {/* http://localhost:3000/todoList */}
            <h1>grosary list</h1>
            <input onChange={handleinput} placeholder="enter your grosary product" />
            
            <button onClick={handlepost}>submit</button>

            
           {grosarydata.map((da,i)=>(

            <div key ={i}>
                 <h2>{i+1}.{da.task}

                 </h2>
            </div>
           ))}

            
            
        </div>
    )
}

export default GrosaryListComp