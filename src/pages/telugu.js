import React from 'react'
import{Link} from 'react-router-dom';
import '../styling/telugu.css';
export const Telugu = () => {
  return (
     <>
     <h3 id="tel">Witness Vintage PK in BRO in your nearest theatres!
     </h3>
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
      <img class="card-img-top" src="/images/baby.jpg" alt="Card image cap"/>
      <div class="card-body">
      <h5 class="card-title text-center">BABY</h5>
      <p class="card-text">Cast: Anand Devarakonda,Vaishnavi,Nagendra Babu</p>
      <p class="card-text">directed by: SAI RAJESH</p>
      <p class="card-text">music by:VIJAI BULGANIN </p>
      <p class="card-text">produced by: GEETA ARTS</p>
      <div className="text-center">
      <Link to="/baby"><a href="#" class="btn btn-primary ">Review this film</a></Link>
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
 </>
  );
};

