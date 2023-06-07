import { useEffect, useState } from "react"
import axios from 'axios'; 
import MovieCard  from "../component/MovieCard";
import Home from "../component/Home"

export const Api=()=>{
    const [data,setData]=useState([])

    useEffect(() => {
        ( async () => {
           try {
             const response= await axios.get("https://api.tvmaze.com/search/shows?q=all");
             
            //  const responsejson=await  response.
             setData(response.data);
             
         try{
            data.forEach(d=>{
                console.log(d);
            })
         }catch(e){
            console.log(e)
         }
            //  console.log(response.JSON.parse())
           } catch (e) {
             console.log(e);
           }
         })()
       }, []);
       
    return <>
        <div className="main">
     {
         data.map((data,index)=>{
            return <>
            <MovieCard data={data} key={data.id}/>
            {/* <Home data={data} key={data.id}/> */}
            </>
            
            })
    } 
                   </div>
    </>
}
