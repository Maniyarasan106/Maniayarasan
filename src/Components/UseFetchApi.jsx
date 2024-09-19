import React,{useState,useEffect} from "react";
import axios from "axios";


 function UseFetchApi(url){
    const[data,setdata]=useState([])
    
    const handlefetch=async()=>{
        let res= await axios.get(url)
        setdata(res.data)
    
    }


    useEffect(()=>{
        handlefetch()
    },[url])


    return{data}
 }
 export default UseFetchApi