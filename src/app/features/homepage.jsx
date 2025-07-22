import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MovieCard from './component/movieCard';
import { fetchMovies } from '../api/apiService';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const [month, setMonth] = React.useState(1);
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    fetchData();
  }, [month, user]);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={'start'}
          alignItems="start"
          mb={4}
        >
          <Typography variant="h4" gutterBottom mr={'auto'}>
            Here are the top recommended films for you in {months[month]}
          </Typography>
          <Box display="flex">
            <FormControl sx={{ minWidth: 120 }} size="medium" m={5}>
              <InputLabel id="demo-select-small-label">Month</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={month}
                label="Select month"
                onChange={handleChange}
              >
                {months.map((month, i) => (
                  <MenuItem key={i} value={i}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid size={3} item key={movie.id}>
              <MovieCard
                key={movie.id}
                id={movie.id}
                name={movie.name}
                description={movie.description}
                imageUrl={movie.image}
                margin="2rem"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
