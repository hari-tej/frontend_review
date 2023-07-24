import React from 'react';
import{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrash,FaRotate} from "react-icons/fa6";

export const Bhai = () => {
    const[username,setUsername]=useState("");
    const[city,setCity]=useState("");
    const[review,setReview]=useState("");
    const[rating,setRating]=useState(0);
   
 
    const[details,setDetails]=useState([]);
    const[updatedreview,setUpdatedreview]=useState("");
 
    useEffect(()=>{
       
         Axios.get("http://localhost:3003/Bhai/read").then((response)=>{
           setDetails(response.data);
         });
      
      
       
    },[]);
 
    const addtoList=()=>{
   
     Axios.post("http://localhost:3003/Bhai/insert",{
       username:username,
       city:city,
       review:review,
       rating:rating
     });
   
     window.location.reload();
 
    };
 
    const updatereview=(id)=>{
      Axios.put("http://localhost:3003/Bhai/update",{
       id:id,
       review:updatedreview
      });
      window.location.reload();
    };
    const deletereview=(id)=>{
          Axios.delete(`http://localhost:3003/Bhai/delete/${id}`);
          window.location.reload();
    };
    
 
   return (
     <div className="App">
       <img src="bhaijaan.jpg" className="img-fluid shadow-4" id="e1" alt="picture" /><br></br><br></br>
       <section class="bg-warning p-5 m-4">
       <h4>KISI KA BHAI KISI KI JAAN trailer:</h4> 
       <div class="embed-responsive embed-responsive-16by9 container-fluid">
       <iframe id ="e3"class="embed-responsive-item" src="https://www.youtube.com/embed/bsi8_9EoYyg" allowfullscreen="true" autoplay></iframe>
      </div><br></br>
      <h3>The eldest brother refuses to marry since he believes it may create disharmony in his big family. His brothers, who've already found partners, come together to find a match for him.</h3>
      <h5>Director: Farhad Samji</h5>
       <h5>Writers: Tasha Bhambra Sparsh Khetarpal Sajid Nadiadwala</h5>
       <h5>Stars: Salman Khan Pooja Hegde Venkatesh Daggubati</h5><br></br>
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
       <button class="btn btn-success"onClick={addtoList}>Submit</button>
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
              <button class="btn btn-danger" onClick={()=> deletereview(val._id)}><FaTrash/></button>

            </div>
          </div>
          </div>
          })

       }
       <br></br><br></br>
       <h2 class="text-light">More like this...</h2>
       <div  className="container-lg ">
       <div className="col d-flex flex-direction-center justify-content-center">
         <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
      <img class="card-img-top" src="/images/bhola.jpg" alt="Card image cap"/>
      <div class="card-body ">
      <h5 class="card-title text-center">BHOLA</h5>
      <p class="card-text">Cast: Ajay Devgan, Taboo, Sanjay Mishra</p>
      <p class="card-text">directed by: Ajay Devgan</p>
      <p class="card-text">music by: Ravi Basrur</p>
      <p class="card-text">produced by: Ajay Devgan Films</p>
      <div className="text-center">
      <Link to="/bhola"><a href="#" class="btn btn-primary">Review this film</a></Link>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col d-flex flex-direction-center justify-content-center">
         <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
      <img class="card-img-top" src="/images/pot.jpg" alt="Card image cap"/>
      <div class="card-body ">
      <h5 class="card-title text-center">PATHAAN</h5>
      <p class="card-text">Cast: Sharukh Khan, Deepika Padukone, John Abraham</p>
      <p class="card-text">directed by: SIDDARTH ANAND</p>
      <p class="card-text">music by: PRITAM</p>
      <p class="card-text">produced by: Yash Raj Films</p>
      <div className="text-center">
      <Link to="/pathaan"><a href="#" class="btn btn-primary">Review this film</a></Link>
      </div>
      </div>
      </div>
      </div>
      
      
 </div>
     </div>






  );
};

