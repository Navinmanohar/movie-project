import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"
import { useState,useEffect } from 'react';
import axios from 'axios'

const Home=()=>{
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

      // const props=data.show

    return <>
         {
            data.map(data=>{
                return <>
              
                <div className="card">
           <img src={data.show.image.medium} alt="Avatar" className='imag-Home' style={{width:"100%"}}/>
           <div className="container">
            <h4><b>Name : {data.show.name}</b></h4>
           <p>language : {data.show.language}</p>
           <NavLink className="link-summery" to='/detail'><Button variant="contained">Movie</Button></NavLink>
           </div>
            </div>
         
  
            </>
            })
         }
    </>
}
export default Home;