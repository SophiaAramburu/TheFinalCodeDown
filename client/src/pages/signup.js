

import React from 'react'
import signupPhoto from '../assets/images/signup.png'
export default function Signup() {
  return (
    // <div>signup<img src={signupPhoto}/></div>

      // create text input field here 
  <form>
    <label for="fname">First name:</label><br>
    <input type="text" id="firstname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lastname" name="lname"><br>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email-address"><br>
    <label for="password">Password:</label><br>
    <input type="text" id="password" name="p-word"></input><br>
    <label for="confirm">Confirm Password:</label><br>
    <input type="text" id="confirm-password" name="confirm-pword"></input>

    <br></br>

    <button type="button">Register Now!</button>
    
  </form>
  )
}
