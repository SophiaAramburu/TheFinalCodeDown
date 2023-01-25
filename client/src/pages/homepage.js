import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import drunkBee from '../assets/images/drunkbee.png'


const Home= () => {
  return (
    <div class="create-account bg-yellow-200 pb-64"><br></br>
      <img class ="mx-auto outline" src={drunkBee} alt="Drunk bee" width="700" height="750"/><br></br>
      <p class= 'font-bold text-6xl text-center md:font-serif'>You got buzzzed</p>
      </div>
  )
}
export default Home
