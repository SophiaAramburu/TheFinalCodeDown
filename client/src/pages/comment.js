import React from 'react'
import signupPhoto from '../assets/images/signup.png'
import drunkBee from '../assets/images/drunkbee.png'
export default function Signup() {
  return (
     
    <div class="top-buzz-container bg-yellow-200">
       
       <img class ="mx-auto" src={drunkBee} alt="Drunk bee" width="150" height="200"/>
      <h3 class= "top-buzz-section-header bg-yellow-200 text-center font-sans md:font-serif text-5xl tracking-widest animate-pulse"> Latest Buzzes</h3>

      <br></br>

      <div class= "top-buzz">
        <div class= "buzz-contents"></div>
      <div class= "buzz-text-view border-solid border-2 border-indigo-600 space-y-3.5" >
      <p class= "buzz-text bg-yellow-200 text-center tracking-wide md:font-serif text-white bg-black text-2xl">I saw Sophia crying at the bar</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>
      
      <br></br>
    
      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
        <p class= "buzz-text text-center md:font-serif tracking-wide bg-black text-white text-2xl">I just saw Reggie's ex at Cyote Ugly!! Abort! </p> <br></br>
        <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl"> 📍Houston, TX </p></div><br></br>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-indigo-600 container mx-auto w-3/5">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black text-2xl">Have ya'll seen Alexandria, she wandered off and she's messed up.</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl">📍San Antonio, TX </p></div><br></br>
      </div>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black text-2xl">Don't go to Wonder Bar, Jose is here!!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl"> 📍Austin, TX </p></div><br></br>
      
      <br></br>

      <div class= "buzz-text-view border-solid border-2 border-indigo-600 space-y-3.5" >
      <p class= "buzz-text bg-yellow-200 text-center tracking-wide md:font-serif text-white bg-black text-2xl"> Get out of Alibi, Dee is trying to find us!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>
      
      <br></br>

      <div class= "buzz-text-view border-solid border-2 border-indigo-600 space-y-3.5" >
      <p class= "buzz-text bg-yellow-200 text-center tracking-wide md:font-serif text-white bg-black text-2xl"> Get out of Alibi, Dee is trying to find us!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>

      <button type="button">Create a Buzz!</button>

</div>
  )
}