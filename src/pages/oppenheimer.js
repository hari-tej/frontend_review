import React from 'react';
import{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrash,FaRotate} from "react-icons/fa6";
import '../styling/english.css';

export const Oppenheimer = () => {
    const[username,setUsername]=useState("");
   const[city,setCity]=useState("");
   const[review,setReview]=useState("");
   const[rating,setRating]=useState(0);
  

   const[details,setDetails]=useState([]);
   const[updatedreview,setUpdatedreview]=useState("");
   

   useEffect(()=>{
      
        Axios.get("https://movie-backend-kp39.onrender.com/Oppenheimer/read").then((response)=>{
          setDetails(response.data);
        });
     
      
      
   },[]);

   const addtoList=()=>{
  
    Axios.post("https://movie-backend-kp39.onrender.com/Oppenheimer/insert",{
      username:username,
      city:city,
      review:review,
      rating:rating
    });
  
    window.location.reload();

   };

   const updatereview=(id)=>{
     Axios.put("https://movie-backend-kp39.onrender.com/Oppenheimer/update",{
      id:id,
      review:updatedreview
     });
     window.location.reload();
   };
   const deletereview=(id)=>{
         Axios.delete(`https://movie-backend-kp39.onrender.com/Oppenheimer/delete/${id}`);
         window.location.reload(); 
   };

  return (
    <>
    <h3 id="eng">OPPENHEIMER has grossed 150M worldwide. Watch it in your nearest theatres.   <h5><i>'Christopher Nolan's msterpiece'</i>- New York Times</h5> </h3>
    <div className="App">
      
       <img src="oppenheimer.jpeg" className="img-fluid shadow-4" id="e1" alt="picture" /><br></br><br></br>
       <section class="bg-warning p-5 m-4">
       <h4>OPPENHEIMER trailer:</h4>

       <div class="embed-responsive embed-responsive-16by9 container-fluid">
       <iframe id ="e3"class="embed-responsive-item" src="https://www.youtube.com/embed/uYPbbksJxIg" allowfullscreen="true" autoplay></iframe>
      </div>
      <br></br>
      <h3>The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.</h3><br></br>
      <h5>Director: Christopher Nolan</h5>
      <h5>Writers:Christopher Nolan Kai Bird Martin Sherwin</h5>
      <h5>Stars:Cillian Murphy Emily Blunt Matt Damon</h5><br></br>
       <h1 class="text-primary">Watched this movie? How did you like it? Help others know.</h1><br></br><br></br>













       </section>
      
        <form class="bg-secondary p-5  border rounded shadow-lg" id="e2">
        <div class="container-fluid">
        <label><h1>REVIEW</h1></label><br></br> 
        <label><h3>Username</h3></label><br></br>
       <input type="text" placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/><br></br><br></br>
       <label><h3>City</h3></label><br></br>
       <input type="text" placeholder="username" onChange={(e)=>{setCity(e.target.value)}}/><br></br><br></br>
       <label><h3>Review</h3></label><br></br>
       <input type="text" placeholder="username" onChange={(e)=>{setReview(e.target.value)}}/><br></br><br></br>
       <label><h3>Rating</h3></label><br></br>
       <input type="number" placeholder="username" onChange={(e)=>{setRating(e.target.value)}}/><br></br><br></br>
       <br></br>
       <button class="btn btn-success" onClick={addtoList}>Submit</button>
       </div>
       </form>
       <br></br>
       <br></br>
       <br></br>
       <h1 class="text-danger">REVIEWS:</h1>
       {
          details.map((val,key)=>{
            return <div class="container-lg">
            <div class="card p-4 my-3 shadow-lg">
            <div class="card-body">
            <h3 class="text-end text-primary">{val.username}</h3>
            <h5 class="text-end">{val.city}</h5>
            <p class="text-end">{val.updatedAt}</p>
            <br></br>
               <h5>"{val.review}"</h5>
               rating:<h3 class="text-success">{val.rating}</h3>
             
               <br></br><br></br>
              <input type="text" placeholder="new username..." onChange={(e)=>{setUpdatedreview(e.target.value)}}/>
              <button class="btn btn-warning" onClick={()=>updatereview(val._id)}><FaRotate/></button><br></br>
              <button class="btn btn-danger ps-4 pe-4 pt-2 pb-2" onClick={()=> deletereview(val._id)}><FaTrash/></button>

            </div>
          </div>
          </div>
          })

       }
       <br></br><br></br>
       <h2 class="text-primary">More like this...</h2>
       <div  className="container-lg  ">
       <div  className="col d-flex flex-direction-center justify-content-center ">
   
    <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
     <img class="card-img-top" src="/images/john.jpg" alt="Card image cap"/>
     <div class="card-body">
     <h5 class="card-title text-center">JOHN WICK:Chapter-4</h5>
     <p class="card-text">Cast: Keanu Reaves,Lance Reddick,Scott Adkins</p>
     <p class="card-text">directed by: CHAD STAHELSKI</p>
     <p class="card-text">music by: Tyler Bates</p>
     <p class="card-text">produced by: Lions Gate Movies</p>
     <div className="text-center">
     <Link to="/john"><a href="#" class="btn btn-primary">Review this film</a></Link>
     </div>
     </div>

   </div>
   </div>
   <div  className="col d-flex flex-direction-center justify-content-center ">
  
   <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
     <img class="card-img-top" src="/images/shezam.jpg" alt="Card image cap"/>
     <div class="card-body">
     <h5 class="card-title text-center">SHEZAM-Fury of the Gods</h5>
     <p class="card-text">Cast: Zachary Levi,Marta Milans, Rachel Zegler</p>
     <p class="card-text">directed by: DAVID S. SANDBERG</p>
     <p class="card-text">music by: Christophe Beck</p>
     <p class="card-text">produced by: Warner bros.</p>
     <div className="text-center">
     <Link to="/shezam"><a href="#" class="btn btn-primary">Review this film</a></Link>
     </div>
     </div>

   </div>
   </div>
   
</div>
    </div>
    </>
  );
};

