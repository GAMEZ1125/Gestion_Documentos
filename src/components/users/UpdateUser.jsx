import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const URI = 'http://localhost:8000/users';

export default function UpdateUser() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${URI}/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${URI}/${id}`, user)
      .then(() => {
        navigate('/users');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Actualizar Usuario
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Role"
              name="role"
              value={user.role}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
          Actualizar Usuario
        </Button>
      </form>
    </Box>
  );
}
