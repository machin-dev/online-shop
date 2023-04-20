import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch2(endpoint) {
const [categ,setCateg]=useState();   
const url='http://localhost:8012/ecommerce/bd_request/get/';

useEffect(()=>{    
     axios.get(url+endpoint)
    .then((res)=>{return res.data})
    .then((response)=>{setCateg(response)});          
   
},[]);

return {categ};
}