import React from 'react'
import{Link} from 'react-router-dom';
import '../styling/hindi.css';

export const Hindi = () => {
  return (
   <>
   <h3 id="hind">Witness Bhai's magic in Kisi Ka Bhai Kisi ki Jaan in your nearest theatres!</h3>
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
 </>
  );
};

