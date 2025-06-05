import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Box
} from '@mui/material';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await signup(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account!');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Register
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
        >
          Register
        </Button>
      </Box>
    </Paper>
  );
};
