import React from 'react'
import signupPhoto from '../assets/images/signup.png'
import Logo from '../assets/images/header.jpg'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div class="create-account bg-yellow-200">
      
      <form>

      
      <div class="input-3 text-2xl md:font-serif">
        <label>
          Email:
          <input class ="bg-black" type="text" name="name" placeholder="Email" />
        </label>
      </div>
      <br></br>

      <div class="input-4 text-2xl md:font-serif">
        <label>
          Password:
          <input class ="bg-black" type="text" name="name" placeholder="Password" />
        </label>
      </div>
      
      <br></br>
      <div class="log-in text-2x1 font md:font-serif">
        <label>
          <button type="button"><Link to="/pages/comment"><em>Log In</em></Link></button>
        </label>
      </div>

      </form>


    </div>
  )
}
