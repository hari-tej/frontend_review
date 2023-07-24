import React from 'react'
import{Link} from 'react-router-dom';
import '../styling/english.css';

export const English = () => {
  return (
    <>
    <h3 id="eng">OPPENHEIMER has grossed 150M worldwide. Watch it in your nearest theatres.   <h5><i>'Christopher Nolan's msterpiece'</i>- New York Times</h5> </h3>

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
 </>
  );
};

