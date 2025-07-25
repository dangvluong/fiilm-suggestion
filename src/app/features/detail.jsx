import { Typography, Box, Chip, Rating } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMovieById } from '../api/apiService';

export default function Details() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const movie = await fetchMovieById(id);
      setMovie(movie);
    };
    fetchData();
  }, [id]);

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: '2rem auto', p: 2 }}>
      <Typography variant="h4" gutterBottom textAlign={'center'}>
        {movie.name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img
          src={movie.image}
          alt={movie.name}
          style={{
            width: '100%',
            borderRadius: 8,
            maxWidth: '400px',
          }}
        />
      </Box>

      <Typography variant="body1" gutterBottom>
        {movie.description}
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        <b>Actors:</b> {movie.actors.join(', ')}
      </Typography>
      <Box sx={{ mt: 1 }} display="flex" alignItems="center">
        <Typography variant="subtitle1" mr={1}>
          Genres:
        </Typography>
        <Chip label={movie.tag} color="primary" sx={{ mr: 1 }} />
      </Box>
      <Box sx={{ mt: 1 }} display="flex" alignItems="center">
        <Rating value={movie.rating} precision={0.1} readOnly />
        <span style={{ marginLeft: 8 }}>{movie.rating}</span>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <iframe
          width={600}
          height={400}
          src={movie.trailerUrl}
          title={`${movie.name} Trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 8, width: '100%', maxWidth: 600 }}
        ></iframe>
      </Box>
    </Box>
  );
}
