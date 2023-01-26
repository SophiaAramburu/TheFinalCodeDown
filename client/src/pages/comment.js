import React from 'react'
import drunkBee from '../assets/images/drunkbee.png'
import CommentList from '../components/comment-list'

function Comment() {
  return (

    <div class="top-buzz-container bg-yellow-200"><br></br>
       <img class ="mx-auto outline" src={drunkBee} alt="Drunk bee" width="300" height="350"/>
       <br></br><br></br>
      <h3 class= "top-buzz-section-header bg-yellow-200 text-center bg-black font-sans md:font-serif underline text-6xl tracking-widest animate-pulse"> Latest Buzzes</h3>

      <br></br>

      <div class= "top-buzz">
        <div class= "buzz-contents"></div>
      <div class= "buzz-text-view border-solid border-2border-red-400 bg-black mx-auto w-3/5" >
      <p class= "buzz-text text-center tracking-wide md:font-serif text-white bg-black text-2xl">I saw Sophia crying at the bar</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>
      
      <br></br>
    
      <div class= "buzz-text-view border-solid border-2 border-red-400 bg-black w-3/5 mx-auto">
        <p class= "buzz-text text-center md:font-serif tracking-wide bg-black text-white text-2xl bg-black">I just saw Reggie's ex at Cyote Ugly!! Abort! </p> <br></br>
        <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl"> 📍Houston, TX </p></div><br></br>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-red-400 container mx-auto w-3/5 bg-black">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black text-2xl">Have ya'll seen Alexandria, she wandered off and she's messed up.</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl">📍San Antonio, TX </p></div><br></br>
      </div>

      <br></br>

      <div class= "buzz-text-view  border-solid border-2 border-red-400 w-3/5 mx-auto bg-black">
        <p class= "buzz-text text-center md:font-serif tracking-wide text-white bg-black text-2xl">Don't go to Wonder Bar, Jose is here!!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl"> 📍Austin, TX </p></div><br></br>
      
      <br></br>

      <div class= "buzz-text-view border-solid border-2 border-red-400 w-3/5 mx-auto bg-black " >
      <p class= "buzz-text text-center tracking-wide md:font-serif text-white bg-black text-2xl"> Get out of Alibi, Dee is trying to find us!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>
      
      <br></br>

      <div class= "buzz-text-view border-solid border-2 border-red-400 w-3/5 mx-auto bg-black" >
      <p class= "buzz-text text-center tracking-wide md:font-serif text-white bg-black text-2xl"> Y'all need to come get Tangnay, she too lit!!</p><br></br>
      <p class= "buzz-details-text text-center md:font-serif text-white bg-black text-1xl" > 📍Austin, TX </p></div><br></br>
<br></br>
      <div class="font-serif text-4xl border-dashed px-72 pb-32 animate-pulse text-center">
        <button type="button">Create a Buzz!</button></div>

</div>
  )
}
export default Comment
// need export default here