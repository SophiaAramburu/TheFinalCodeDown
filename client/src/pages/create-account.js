import React, {useState} from 'react'
import drunkBee from '../assets/images/drunkbee.png'
import signupPhoto from '../assets/images/signup.png'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

function Signup() {


  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  
  return (
    <div className="create-account bg-yellow-200 container">
      
      <form onSubmit={handleFormSubmit}>
    <br></br><br></br>
    <img className ="mx-auto outline" src={drunkBee} alt="Drunk bee" width="300" height="350"/><br></br>
      <div className="input-1 text-2xl font md:font-serif pl-7 pt-34 text-center font-bold">
        <label>
          First Name:
          <input className ="bg-black text-white pl-7"type="text" name="name" placeholder="" />
        </label> 
      </div>

      <br></br><br></br>
      <div className="input-2 text-2xl md:font-serif pl-7 text-center font-bold">
      
      
        <label>
          Last Name:
          <input className ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div className="input-3 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Email:
          <input onChange={handleChange} className ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div className="input-4 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Password:
          <input onChange={handleChange} className ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      <div className="input-5 text-2xl md:font-serif pl-7 text-center font-bold">

        <label>
          Confirm Password:
          <input onChange={handleChange} className ="bg-black text-white" type="text" name="name" placeholder="" />
        </label>
      </div>

      <br></br><br></br>

      
      <div className="log-in text-3xl md:font-serif pb-24 underline animate-pulse text-center font-bold">
      <button className="button text-2xl md:font-serif text-center" type="submit"><Link to="/pages/comment">Click here to submit!</Link></button>
    
</div>
</form>
    </div>
  )
}
export default Signup