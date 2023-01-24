import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/header.jpg'

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
      <img src={ Logo } alt="Logo" width="1000px" background-size="cover" />
    </div>
  );
};

export default Home;