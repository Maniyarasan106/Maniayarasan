import React, { useState } from "react";
import"./CssObjectComp.css"


function CssObjectComp(){
    const[data,setdata]=useState([
        {
            name:"mani",
            age:21,
            img:"https://wallpapercave.com/wp/wp3376127.jpg"
        },
        {
            name:"mani",
            age:21,
            img:"https://tse2.mm.bing.net/th?id=OIP.bmuzJ3FVRklBY5KvYFqw9wHaEK&pid=Api&P=0&h=180"
        },
        {
            name:"mani",
            age:21,
            img:"https://wallpapercave.com/wp/wp3376127.jpg"
        },
    ])

    
    
    return(
        <div>
            <h1>picture</h1>
            {data.map((ch)=>(

            <div>
            <img className="one" src={ch.img} height={200} width={200} />
            <h1>{ch.name}--{ch.age}</h1>
            
            </div>
            
            

        


            ))}

        </div>

    )}

export default CssObjectComp