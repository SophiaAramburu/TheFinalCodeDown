import React from 'react'
import drunkBee from '../assets/images/drunkbee.png'
import signupPhoto from '../assets/images/signup.png'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div class="create-account bg-yellow-200 container">
      
      <form>
    <br></br><br></br>
    <img class ="mx-auto outline" src={drunkBee} alt="Drunk bee" width="300" height="350"/><br></br>
      <div class="input-1 text-2xl font md:font-serif pl-7 pt-34 text-center font-bold">
        <label>
          First Name:
          <input class ="bg-black text-white pl-7"type="text" name="name" placeholder="" />
        </label> 
      </div>

      <br></br><br></br>
      <div class="input-2 text-2xl md:font-serif pl-7 text-center font-bold">
      
      
        <label>
          Last Name:
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div class="input-3 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Email:
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div class="input-4 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Password:
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div class="input-5 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Confirm Password:
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      </form>
      <div class="log-in text-3xl md:font-serif pb-24 underline animate-pulse text-center font-bold">
      <button class="button text-2xl md:font-serif text-center" type="button"><Link to="/pages/comment">Click here to submit!</Link></button>
</div>
    </div>
  )
}
