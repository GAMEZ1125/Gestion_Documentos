import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const URI = 'http://localhost:8000/users';

export default function ShowUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(URI)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      axios.delete(`${URI}/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Usuarios
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} key={user.id}>
            <TextField
              label="Username"
              value={user.username}
              fullWidth
              disabled
            />
            <TextField
              label="Email"
              value={user.email}
              fullWidth
              disabled
            />
            <TextField
              label="Password"
              value={user.password}
              fullWidth
              disabled
            />
            <TextField
              label="Role"
              value={user.role}
              fullWidth
              disabled
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
              onClick={() => handleDelete(user.id)}
            >
              Eliminar Usuario
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={() => navigate(`/edit/${user.id}`)}
            >
              Editar Usuario
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
