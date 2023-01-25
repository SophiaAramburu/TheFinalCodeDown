import React from 'react'
import signupPhoto from '../assets/images/signup.png'
import Logo from '../assets/images/header.jpg'
import { Link } from 'react-router-dom';
import drunkBee from '../assets/images/drunkbee.png'
export default function Signup() {
  return (
    <div class="create-account bg-yellow-200"><br></br>
      <img class ="mx-auto outline" src={drunkBee} alt="Drunk bee" width="300" height="350"/><br></br>
      <form>

      <br></br>
      <div class="input-3 text-3xl md:font-serif text-center font-bold">
        <label>
          Email: <br></br>
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <div class="input-4 text-3xl md:font-serif text-center p-32 font-bold">
        <label>
          Password: <br></br>
          <input class ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>
      
      <div class="log-in text-3xl md:font-serif pb-24 underline animate-pulse text-center font-bold">
        <label>
          <button type="button"><Link to="/pages/comment"><em>Log In</em></Link></button>
        </label>
      </div>

      </form>


    </div>
  )
}
