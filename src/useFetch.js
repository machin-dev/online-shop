import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(endpoint) {
   
const [list,setList]=useState();   
const [loading,setLoading]=useState(true);
const [error, setError]=useState();
const url='https://ts-conectate.000webhostapp.com/bd_request/get/';

useEffect(()=>{ 
    setLoading(true);   
    setTimeout(() => {  
     axios.get(url+endpoint)
    .then((res)=>{return res.data})
    .then((response)=>setList(response))
    .catch((error)=>setError(error))
    .finally(()=>setLoading(false));          
}, 500);

},[]);

return {list,loading,error};
}