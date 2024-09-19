import React from "react";
import UseFetchApi from "./UseFetchApi";
 function ProductComp(){
    const{data}=UseFetchApi("https://fakestoreapi.com/products")
     return(
        <div>
        <div class="row">

            {data.map((da)=>(
                <div class="card col-4" >
                <img  class="card-img-top h-50 w-50" src={da.image} alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{da.title}--{da.price}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
                
            ))}
        </div>
        </div>
     )
    }
          

            
 export default ProductComp