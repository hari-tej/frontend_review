import React from 'react';
import{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrash,FaRotate} from "react-icons/fa6";

export const John = () => {
    const[username,setUsername]=useState("");
   const[city,setCity]=useState("");
   const[review,setReview]=useState("");
   const[rating,setRating]=useState(0);
  

   const[details,setDetails]=useState([]);
   const[updatedreview,setUpdatedreview]=useState("");

   useEffect(()=>{
      
        Axios.get("https://movie-backend-kp39.onrender.com/John/read").then((response)=>{
          setDetails(response.data);
        });
     
     
      
   },[]);

   const addtoList=()=>{
  
    Axios.post("https://movie-backend-kp39.onrender.com/John/insert",{
      username:username,
      city:city,
      review:review,
      rating:rating
    });
  
    window.location.reload();

   };

   const updatereview=(id)=>{
     Axios.put("https://movie-backend-kp39.onrender.com/John/update",{
      id:id,
      review:updatedreview
     });
     window.location.reload();
   };
   const deletereview=(id)=>{
         Axios.delete(`https://movie-backend-kp39.onrender.com/John/delete/${id}`);
         window.location.reload();
   };

  return (
    <div className="App">
       <img src="john wick.jpg" className="img-fluid shadow-4" id="e1" alt="picture" /><br></br><br></br>
       <section class="bg-warning p-5 m-4">
       <h4>JOHN WICK: CHAPTER-4 trailer:</h4> 
       <div class="embed-responsive embed-responsive-16by9 container-fluid">
       <iframe id ="e3"class="embed-responsive-item" src="https://www.youtube.com/embed/yjRHZEUamCc" allowfullscreen="true" autoplay></iframe>
      </div><br></br>
      <h3>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</h3>
       <h5>Director: Chad Stahelski</h5>
       <h5>Writers: Shay Hatten Michael Finch Derek Kolstad</h5>
       <h5>Stars: Keanu Reeves Laurence Fishburne George Georgiou
</h5><br></br>
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
            <p class="text-end">{val.updatedAt}</p><br></br>
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

<div  className="container-lg ">
    <div  className="col d-flex flex-direction-center justify-content-center">
   
    <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
      <img class="card-img-top" src="/images/open.jpg" alt="Card image cap"/>
      <div class="card-body">
      <h5 class="card-title text-center">OPPENHEIMER</h5>
      <p class="card-text">Cast: Cillian Murphy, Emily Blunt, Robert Downey Jr.</p>
      <p class="card-text">directed by: CHRISTOPHER NOLAN</p>
      <p class="card-text">music by: Ludwig Gorannson</p>
      <p class="card-text">produced by: Universal Media</p>
      <div className="text-center">
      <Link to="/oppenheimer"><a href="#" class="btn btn-primary">Review this film</a></Link>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div  className="col d-flex flex-direction-center justify-content-center">
   
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
  );
};

