import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
const Login=()=>{

       const[name,setName]=useState('');
       const[email,setEmail]=useState('');
       const windo=window.sessionStorage;
       
       const handleSubmit=(e)=>{
        e.preventDefault();
        windo.clear();
        setName('');
        setEmail('');

       }
       useEffect(()=>{
        if(windo.getItem('name'))
        setName(windo.getItem('name'));
    
        if(windo.getItem('email'))
        setName(windo.getItem('email'));
        

        
       },[]);
       useEffect(()=>{
        windo.setItem('name',name);
        windo.setItem('email',email);
        

       })
       useEffect(()=>{
        windo.setItem('name',name);
        windo.setItem('email',email);
        

       },[name,email])




    return <>
       <section>
        
        <form onSubmit={handleSubmit}>
        <div className="field ">
              <label htmlFor=""> Name</label><br/>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div className="field ">
              <label htmlFor=""> Email</label><br/>
              <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        </div>
        
       <div className="field">
       <NavLink to='/' ><Button type="Submit" variant="contained">submit</Button></NavLink>
       
        </div>
        </form>
       </section>
    </>
}
export default Login;