import React from 'react'
import signupPhoto from '../assets/images/signup.png'

export default function Signup() {
  return (
    <div class="create-account bg-yellow-200 container">
      
     
      <form>
    <br></br><br></br>
      <div class="input-1 text-2xl font md:font-serif pl-7 pt-34 text-center border-solid">
        <label>
          First Name:
          <input class ="bg-black text-white pl-7"type="text" name="name" placeholder="First Name" />
        </label> 
      </div>
      <br></br><br></br>
      <div class="input-2 text-2xl md:font-serif pl-7 text-center">
        <label>
          Last Name:
          <input class ="bg-black text-white" type="text" name="name" placeholder="Last Name" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-3 text-2xl md:font-serif pl-7 text-center">
        <label>
          Email:
          <input class ="bg-black text-white" type="text" name="name" placeholder="Email" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-4 text-2xl md:font-serif pl-7 text-center">
        <label>
          Password:
          <input class ="bg-black text-white" type="text" name="name" placeholder="Password" />
        </label>
      </div>
      <br></br><br></br>
      <div class="input-5 text-2xl md:font-serif pl-7 text-center">
        <label>
          Confirm Password:
          <input class ="bg-black text-white" type="text" name="name" placeholder="Confirm Password" />
        </label>
      </div>
      <br></br><br></br>
      </form>

      <button class="button text-2xl md:font-serif pl-7 pb-64 text-center" type="button">Click me to create an account!</button>

    </div>
  )
}
