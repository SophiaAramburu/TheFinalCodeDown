import React from 'react'
import signupPhoto from '../assets/images/signup.png'
export default function Signup() {
  return (
    <div class="create-account">
      
      <form>

      <div class="input-1">
        <label>
          First Name:
          <input type="text" name="name" placeholder="First Name" />
        </label>
      </div>
        
      <div class="input-2">
        <label>
          Last Name:
          <input type="text" name="name" placeholder="Last Name" />
        </label>
      </div>

      <div class="input-3">
        <label>
          Email:
          <input type="text" name="name" placeholder="Email" />
        </label>
      </div>

      <div class="input-4">
        <label>
          Password:
          <input type="text" name="name" placeholder="Password" />
        </label>
      </div>

      <div class="input-5">
        <label>
          Confirm Password:
          <input type="text" name="name" placeholder="Confirm Password" />
        </label>
      </div>

      </form>

      <button class="button" type="button">Register Now!</button>

    </div>
  )
}
