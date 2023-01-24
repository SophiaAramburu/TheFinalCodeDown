<<<<<<< HEAD
import React, {useState} from 'react';
import Auth from '../utils/auth';

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
=======
// https://ej2.syncfusion.com/react/documentation/textbox/how-to/add-textbox-programmatically/
// import { Input } from '@syncfusion/ej2-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Default extends React.Component {
    render() {
        return (<div className="inner-container">
            <p>Log In</p>
            <input id="input-01" type="text" ref={e1 => this.input1 = e1}/>
            <input id="input-02" type="text" ref={e2 => this.input2 = e2}/>
        </div>);
    }
    // require email
    email() {
        // Input.createInput({
        //     element: this.input1,
        //     properties: {
        //         placeholder: 'Enter email address'
        //     }
        // });
        // Input.createInput({
        //     buttons: ['e-input-group-icon e-input-down'],
        //     element: this.input2,
        //     properties: {
        //         placeholder: 'Enter Value'
        //     }
        // });
    }
    // password
    password() {
        // Input.createInput({
        //     element: this.input1,
        //     properties: {
        //         placeholder: 'Enter Password'
        //     }
        // });
        // Input.createInput({
        //     buttons: ['e-input-group-icon e-input-down'],
        //     element: this.input2,
        //     properties: {
        //         placeholder: 'Enter Value'
        //     }
        // });
    }
}

// need export default here 

>>>>>>> f07561c2f85865ae51dff88f44723419ea50c9f5

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
  );
};
