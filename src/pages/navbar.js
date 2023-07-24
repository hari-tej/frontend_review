import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Navbar=()=>{
   
  const[color1,setColor1]=useState('warning');
  const[color2,setColor2]=useState('light');
  const[color3,setColor3]=useState('light');
  const[color4,setColor4]=useState('light');

  const setcolor1=()=>{
      setColor1('warning');
      setColor2('light');
      setColor3('light');
      setColor4('light');
  };
  const setcolor2=()=>{
    setColor1('light');
    setColor2('warning');
    setColor3('light');
    setColor4('light');
};
const setcolor3=()=>{
  setColor1('light');
  setColor2('light');
  setColor3('warning');
  setColor4('light');
};
const setcolor4=()=>{
  setColor1('light');
  setColor2('light');
  setColor3('light');
  setColor4('warning');
};
  
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-dark p-4">
    <div class="container-fluid mt-auto">
  <a class="navbar-brand text-light d-flex justify-content-center" href="#">CINEBUZZ</a>
  <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto align-items-center-lg">
      <li class="nav-item ">
       <Link to="/home"><a class={`nav-link text-${color1} `} onClick={setcolor1} href="#">Home <span class="sr-only"></span></a></Link>
      </li>
      <li class="nav-item ">
       <Link to="/english"><a class={`nav-link text-${color2} `} onClick={setcolor2} href="#">English <span class="sr-only"></span></a></Link>
      </li>
      <li class="nav-item ">
       <Link to="/hindi"><a class={`nav-link text-${color3} `} onClick={setcolor3} href="#">Hindi <span class="sr-only"></span></a></Link>
      </li>
      <li class="nav-item ">
       <Link to="/telugu"><a class={`nav-link text-${color4} `} onClick={setcolor4} href="#">Telugu <span class="sr-only"></span></a></Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

  );
};

