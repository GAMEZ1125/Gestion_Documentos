import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const URI = 'http://localhost:8000/users';

export default function CreateUser() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.email || !user.password || !user.role) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    axios.post(URI, user)
      .then(() => {
        navigate('/users');
      })
      .catch((error) => {
        setError('Error al crear usuario. Por favor, intenta nuevamente.');
        console.log(error);
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Crear Usuario
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
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }}>
          Crear Usuario
        </Button>
      </form>
    </Box>
  );
}
