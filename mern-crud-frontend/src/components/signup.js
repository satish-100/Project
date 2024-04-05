import React, { useState } from 'react';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {FormControl} from '@mui/material';
import {Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 
 const url = "http://localhost:5000"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
 const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/signup`, formData);
      console.log('User signed up successfully!', response.data);
      // Reset form after successful signup
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

      navigate("/login")
    } catch (error) {
      console.error('Error occurred while signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Signup
      </Typography>
      <FormControl fullWidth margin="normal">
        <TextField
          label="First Name"
          sx = {{width:"40%"}}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Last Name"
          name="lastName"
          sx = {{width:"40%"}}
          value={formData.lastName}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Email"
          name="email"
          type="email"
          sx = {{width:"40%"}}
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Password"
          name="password"
          sx = {{width:"40%"}}
          type="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
