import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import { Route ,Routes} from 'react-router-dom';


export default function Moviecard({data}) {
    // console.log(props.summary)
    const props=data.show;
  return <>
        
        <figure className="movie">
  <div className="movie__hero">
    <img src={props.image.medium} alt="Rambo" className="movie__img"/>
  </div>
  <div className="movie__content">
    <div className="movie__title">
      <h1 className="heading__primary">{props.name}<i class="fas fa-fire"></i></h1>
      <div className="movie__tag movie__tag--1">{props.genres[0]}</div>
      <div className="movie__tag movie__tag--2">{props.genres[1]}</div>
    </div>
    <p className="movie__description">
      {props.summary}  </p>
      <br></br>
      {/* <hr></hr> */}
      
     <Link to={props.url} ><Button variant="contained">more detail</Button></Link>
    <div className="movie__details">
      <p className="movie__detail"><span className="icons icons-red"><i class="fas fa-camera-retro"></i></span>{props.premiered}</p>
      <p className="movie__detail"><span className="icons icons-grey"><i class="fas fa-clock"></i> </span>{props.runtime} minutes</p>
      <p className="movie__detail"><span className="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
        </span>{props.rating.average}</p>
    </div>
  </div>
  
           
</figure>
  </>
}
