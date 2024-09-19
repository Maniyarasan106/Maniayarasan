import React, { useState } from "react";
function ListType(){


    const studentdedails=[
        {
            name:"mani",
            age:21,
            role:"wed developer"
        },
        {
            name:"vasanth",
            age:21,
            role:"wed developer"
        },
        {
            name:"riyaz",
            age:21,
            role:"wed developer"
        },
        {
            name:"pragi",
            age:21,
            role:"wed developer"
        },
    ]
    const  [details,setdetails]=useState(studentdedails)
    
    
    
    return(
        <div>

            <h1>list</h1>
           <ol> {details.map((data)=>(
                
                    <li>
                    {data.name}--{data.age}--{data.role}
                        
                    </li>
                

            ))}
            </ol>
        </div>

    )
}

export default ListType

        
   