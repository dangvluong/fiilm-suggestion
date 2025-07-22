import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './authSlice';
import {
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const dummyUsers = ['alice', 'bob', 'charlie', 'david'];

export default function Login() {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({ id: selectedUserId, username: dummyUsers[selectedUserId] })
    );

    navigate('/');
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: '2rem auto',
        padding: '2rem',
        border: '1px solid #eee',
        borderRadius: 8,
      }}
    >
      <Typography variant="h3">Login</Typography>
      <Box display="flex" mt={5} justifyContent="center">
        <FormControl sx={{ width: '100%' }} size="medium" m={5}>
          <InputLabel id="demo-select-small-label">User</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id={selectedUserId}
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            {dummyUsers.map((user, i) => (
              <MenuItem key={i} value={i}>
                {user}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}
