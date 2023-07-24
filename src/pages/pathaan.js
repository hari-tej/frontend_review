import React from 'react';
import{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrash,FaRotate} from "react-icons/fa6";

export const Pathaan = () => {
    const[username,setUsername]=useState("");
    const[city,setCity]=useState("");
    const[review,setReview]=useState("");
    const[rating,setRating]=useState(0);
   
 
    const[details,setDetails]=useState([]);
    const[updatedreview,setUpdatedreview]=useState("");
 
    useEffect(()=>{
       
         Axios.get("https://movie-backend-kp39.onrender.com/Pathaan/read").then((response)=>{
           setDetails(response.data);
         });
      
      
       
    },[]);
 
    const addtoList=()=>{
   
     Axios.post("https://movie-backend-kp39.onrender.com/Pathaan/insert",{
       username:username,
       city:city,
       review:review,
       rating:rating
     });
   
     window.location.reload();
 
    };
 
    const updatereview=(id)=>{
      Axios.put("https://movie-backend-kp39.onrender.com/Pathaan/update",{
       id:id,
       review:updatedreview
      });
      window.location.reload();
    };
    const deletereview=(id)=>{
          Axios.delete(`https://movie-backend-kp39.onrender.com/Pathaan/delete/${id}`);
          window.location.reload();
    };
    
 
   return (
     <div className="App">
       <img src="pathaan.jpg" className="img-fluid shadow-4" id="e1" alt="picture" /><br></br><br></br>
       <section class="bg-warning p-5 m-4">
       <h4>PATHAAN trailer:</h4> 
       <div class="embed-responsive embed-responsive-16by9 container-fluid">
       <iframe id ="e3"class="embed-responsive-item" src="https://www.youtube.com/embed/vqu4z34wENw" allowfullscreen="true" autoplay></iframe>
      </div><br></br>
      <h3>An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.</h3>
      <h5>Director: Siddharth Anand</h5>
       <h5>Writers: Shridhar Raghavan Abbas Tyrewala Siddharth Anand</h5>
       <h5>Stars: Shah Rukh Khan Deepika Padukone John Abraham</h5><br></br>
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
       <h2 class="text-primary">More like this...</h2>
       <div  className="container-lg ">
    
    
    <div className="col d-flex flex-direction-center justify-content-center">
       <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
    <img class="card-img-top" src="/images/kisi.jpg" alt="Card image cap"/>
    <div class="card-body ">
    <h5 class="card-title text-center">KISI KA BHAI KISI KI JAAN</h5>
    <p class="card-text">Cast: Salman Khan, Venkatesh Daggupati, Pooja Hedge</p>
    <p class="card-text">directed by: FARHAD SAMJI</p>
    <p class="card-text">music by: Ravi Basrur Himesh Reshammiya Sajid Khan Sukhbir Payal Dev</p>
    <p class="card-text">produced by: Salman Khan Films</p>
    <div className="text-center">
    <Link to="/bhaijaan"><a href="#" class="btn btn-primary">Review this film</a></Link>
    </div>
    </div>
    </div>
    </div>
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
    </div>
     </div>






  );
};

