import React from 'react'
import signupPhoto from '../assets/images/signup.png'
import Logo from '../assets/images/header.jpg'

export default function Signup() {
  return (
    <div class="create-account bg-yellow-200">
      
      <form>

      <div class="input-1 text-2xl font md:font-serif">
        <label>
          First Name:
          <input class ="bg-black text-white"type="text" name="name" placeholder="First Name" />
        </label> 
      </div>
      <br></br><br></br>
      <div class="input-2 text-2xl md:font-serif">
        <label>
          Last Name:
          <input class ="bg-black" type="text" name="name" placeholder="Last Name" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-3 text-2xl md:font-serif">
        <label>
          Email:
          <input class ="bg-black" type="text" name="name" placeholder="Email" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-4 text-2xl md:font-serif">
        <label>
          Password:
          <input class ="bg-black" type="text" name="name" placeholder="Password" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-5 text-2xl md:font-serif">
        <label>
          Confirm Password:
          <input class ="bg-black" type="text" name="name" placeholder="Confirm Password" />
        </label>
      </div>
      <br></br><br></br>
      </form>

      <button class="button text-2xl md:font-serif text-center" type="button">Register Now!</button>

    </div>
  )
}
