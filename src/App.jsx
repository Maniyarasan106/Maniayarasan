import React from "react";
import ManiArasan from "./Components/ManiArasan";
import ListType from "./Components/listType";
import CssObjectComp from "./Components/CssObjectComp";
import ApiCall from "./Components/ApiCall";
import HomeBage from "./Components/pages/HomeBage";
import AboutComp from "./Components/pages/AboutComp";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import GrosaryListComp from "./Components/GrosaryListComp";
import UseFetchApi from "./Components/UseFetchApi";
import ProductComp from "./Components/ProductComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import CartCount from "./Components/CartCount";
// import CountProduct from "./Components/CountProductComp";
// import CountProductComp from "./Components/CountProductComp";





function App(){
  return(

      // <BrowserRouter>
      // <h1> {}</h1>
      // {/* <ManiArasan/> */}
      // {/* <ListType/> */}
      // {/* <CssObjectComp/> */}
      // {/* <ApiCall/> */}

      // {/* <HomeBage/>
      // <AboutComp/>
      // <ProductComp/> */}

      // <Link to="/" >Home</Link>
      // <Link to="/product" >product</Link>   
      // <Link to="/about" >about</Link>  
      




      // <Routes>
      //   <Route  path="/"     element={<HomeBage/>}/>
      //   <Route   path="/About"     element={<AboutComp/>}/>
      //   <Route   path="/Product"     element={<productComp/>}/>


      // </Routes>
      
      
      
      // </BrowserRouter>

      <GrosaryListComp/>

      // <UseFetchApi/>
      // <ProductComp/>

    //   <CounterProvider>
      
    //   <CartCount/>
    //  <CountProductComp/>
      
    //   </CounterProvider>

      
      
    




    
      
      
  )
}

export default App