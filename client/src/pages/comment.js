import React from 'react'
import signupPhoto from '../assets/images/signup.png'
export default function Signup() {
  return (
    
    <div class="top-buzz-container bg-yellow-200">
      <h3 class= "top-buzz-section-header bg-yellow-200 text-center font-sans md:font-serif text-5xl tracking-widest"> Buzzes from last week</h3>

      <br></br>

      <div class= "top-buzz">
        <div class= "buzz-contents"></div>
      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
      <p class= "buzz-text bg-yellow-200 text-center tracking-wide text-white bg-black rounded-md ">I saw Sophia crying at the bar!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black" > 📍Austin, TX </p></div><br></br>
      
      <br></br>
    
      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
        <p class= "buzz-text text-center md:font-serif tracking-wide bg-black text-white">Reggie is buying shots for everyone at The Lucky Duck</p> <br></br>
        <p class= "buzz-details-text text-center md:font-serif text-white bg-black"> 📍Austin, TX </p></div><br></br>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black">Has anyone seen Alexandria?</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black">📍Austin, TX </p></div><br></br>
      </div>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-indigo-600">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black">Hey Dee & I are here on 6th street, last call at the Library! Hurry guys!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black"> 📍Austin, TX </p></div><br></br>
      
      <br></br>

      <button type="button">Create a Buzz!</button>

</div>
  )
}