import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Uncomment import statements below after building queries and mutations
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
const Home = () => {
  // const [matchupList, setMatchupList] = useState([]);
  // useEffect(() => {
  //   const getMatchupList = async () => {
  //     try {
  //       const res = await getAllMatchups();
  //       if (!res.ok) {
  //         throw new Error('No list of matchups');
  //       }
  //       const matchupList = await res.json();
  //       setMatchupList(matchupList);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getMatchupList();
  // }, []);

  return (
    <div className="card bg-white card-rounded w-50">

      <div class="input-1 text-2xl font md:font-serif">
        <label>
          Email: <input class="bg-black text-white" type="text" email="email" placeholder="Enter Email" />
        </label>
      </div>

    <br></br>

      <div class="input-1 text-2xl font md:font-serif">
        <label>
          Password: <input class="bg-black text-white" type="text" password="password" placeholder="Enter Password" />
        </label>
      </div>

    <br></br>

      <div class="input-1 text-2xl font md:font-serif">
        <label>
          <button type="button"><Link to="/pages/login">Log In!</Link></button>
        </label>
      </div>

      <br></br>

      <br></br>

      <div class="input-1 text-2xl font md:font-serif">
        <label>
          <button type="button"><Link to="/pages/create-account">Click here to Create Account!</Link></button>
        </label>
      </div>

    </div>
  );
};

export default Home;