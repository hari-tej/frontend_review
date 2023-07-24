import React from 'react';
import{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrash,FaRotate} from "react-icons/fa6";

export const Baby = () => {
    const[username,setUsername]=useState("");
   const[city,setCity]=useState("");
   const[review,setReview]=useState("");
   const[rating,setRating]=useState(0);
   const[likes,setLikes]=useState(0);
   const[dislikes,setDislikes]=useState(0);

   const[details,setDetails]=useState([]);
   const[updatedreview,setUpdatedreview]=useState("");

   

   useEffect(()=>{
      
        Axios.get("http://localhost:3003/Baby/read").then((response)=>{
          setDetails(response.data);
        });
     
     
      
   },[]);

   const addtoList=()=>{
  
    Axios.post("http://localhost:3003/Baby/insert",{
      username:username,
      city:city,
      review:review,
      rating:rating
    });
  
    window.location.reload();

   };

   const updatereview=(id)=>{
     Axios.put("http://localhost:3003/Baby/update",{
      id:id,
      review:updatedreview
     });
     window.location.reload();
   };
   const deletereview=(id)=>{
         Axios.delete(`http://localhost:3003/Baby/delete/${id}`);
         window.location.reload();
   };

  return (
    <div className="App">
       <img src="baby.jpg" className="img-fluid shadow-4" id="e1" alt="picture" /><br></br><br></br>
       <section class="bg-warning py-5 px-2  shadow-lg">
       <h4>BABY trailer:</h4> 
       <div class="embed-responsive embed-responsive-16by9 container-fluid">
       <iframe id ="e3"class="embed-responsive-item" src="https://www.youtube.com/embed/_npN4uwDMLk" allowfullscreen="true" autoplay></iframe>
      </div>
      <br></br>
       <h3>A love story between neighbours and childhood friends played and what happens to their relationship when they go to college and meets a new person.</h3><br></br>
       <h5 >Director: Sai Rajesh Neelam </h5>
       <h5 >Writer: Sai Rajesh Neelam</h5>
       <h5 >Stars: Anand Deverakonda  Vaishnavi Chaitanya Viraj Ashwin</h5>


       <h1 class="text-primary">Watched this movie? How did you like it? Help others know.</h1><br></br><br></br>
       <pre>{likes} <button class="btn btn-success" onClick={()=>{setLikes(likes+1)}}>Like</button>  {dislikes} <button class="btn btn-success" onClick={()=>{setDislikes(dislikes+1)}}>Dislike</button></pre>












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
    
    <div className="col d-flex flex-direction-center justify-content-center">
    <div class="card m-5 shadow-lg border-outline-dark" style={{width: 18+"rem"}}>
    <img class="card-img-top" src="/images/brro.jpg" alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title text-center">BRO</h5>
    <p class="card-text">Cast: Pawan Kalyan, Sai Dharam Tej, Ketika Sharma</p>
    <p class="card-text">directed by: P.SAMUTIRAKANI</p>
    <p class="card-text">music by: THAMAN.S</p>
    <p class="card-text">produced by: People Media Factory</p>
    <div className="text-center">
    <Link to="/bro"><a href="#" class="btn btn-primary ">Review this film</a></Link>
    </div>
    </div>
    </div>
    
 </div>
 <div className="col d-flex flex-direction-center justify-content-center">
      <div class="card m-5 shadow-lg border-outline-dark" style={{width: 18+"rem"}}>
      <img class="card-img-top" src="/images/ranga.jpg" alt="Card image cap"/>
      <div class="card-body">
      <h5 class="card-title text-center">RANGABALI</h5>
      <p class="card-text">Cast: Naga Shourya,Yukti Thareja, Satya</p>
      <p class="card-text">directed by: PAWAN BASAMSETTI</p>
      <p class="card-text">music by: PAWAN CH</p>
      <p class="card-text">produced by: Sudhakar Cherukuri</p>
      <div className="text-center">
      <Link to="/rangabali"><a href="#" class="btn btn-primary ">Review this film</a></Link>
      </div>
      </div>
      </div>
 
  
    
   
 </div>

  
 
   </div>
    </div>
  
  );
};

