import React, { useState } from "react";
import GnanaVel from "./GnanaVel";

function ManiArasan(){
    //hook 
    // const [count,setcount]= useState(0)

    // const a=()=>{
    //     setcount(count + 1)

    // }


//     const [count,setcount]=useState(2)

//     const a=()=>{
// console.log("manimaran")

//     }
const [count,setcount]=useState("mani")

 const a=()=>
    {
setcount("ajith")
if(count=="mani")
{
    setcount("ajith")
}else
{
    setcount("mani")
}
    }
    


    return(

        <>
        <h2> movie Name:thangalaan </h2>
        <p>vikram is a hero  and he is a famius actor</p>
        <h1>ticket count-{count} </h1>

        <button onClick={a}>add ticket</button>
        
        
        
        </>
    )
}

export default ManiArasan