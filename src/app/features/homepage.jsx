import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MovieCard from './component/movieCard';

const movies = [
  {
    id: 1,
    name: 'The Shawshank Redemption',
    description:
      'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.8Xe5VESw3PeHepirT89BXgHaLA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 2,
    name: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image:
      'https://th.bing.com/th/id/R.1199dc6273680f175fd9b06c9c36d08a?rik=%2fKp12KVFsHU89w&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
  {
    id: 4,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
  {
    id: 5,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
  {
    id: 6,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
  {
    id: 7,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
  {
    id: 8,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
  },
];
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
  const [selectedMonth, setSelectedMonth] = useState(1);
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const [month, setMonth] = React.useState(1);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/login');
  //   }
  // }, [isAuthenticated]);

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
            Here is the top recommended films for you in {months[month]}
          </Typography>
          <Box display="flex">
            {/* <Typography variant="h6" mr={3} mt={1}>
              Other month
            </Typography> */}
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
