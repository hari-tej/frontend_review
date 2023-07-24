import React from 'react'
import{Link} from 'react-router-dom';
import '../styling/home.css';

export const Home = () => {
  return (
    < >
    <h1 id="only" className="text-center  text-light text-bolder ">TRENDING RELEASES</h1>
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
      <Link to="/bhaijaan"><a href="#" class="btn btn-primary ">Review this film</a></Link>
      </div>
      </div>
      </div>
      </div>
        <div className="col d-flex flex-direction-center justify-content-center">
        <div class="card m-5 shadow-lg" style={{width: 18+"rem"}}>
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
   </div>
   </>
  );
};

