import { Typography, Box, Chip, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';

// Dummy movie data for demonstration
const movies = [
  {
    id: 1,
    name: 'The Shawshank Redemption',
    description:
      'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.8Xe5VESw3PeHepirT89BXgHaLA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    actors: ['Tim Robbins', 'Morgan Freeman'],
    tag: 'Drama',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image:
      'https://th.bing.com/th/id/R.1199dc6273680f175fd9b06c9c36d08a?rik=%2fKp12KVFsHU89w&pid=ImgRaw&r=0',
    actors: ['Marlon Brando', 'Al Pacino'],
    tag: 'Crime',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    image:
      'https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0',
    actors: ['Christian Bale', 'Heath Ledger'],
    tag: 'Action',
    rating: 4.7,
  },
];

export default function Details() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

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
      <Box sx={{ mt: 1 }}>
        <Chip label={movie.tag} color="primary" sx={{ mr: 1 }} />
        <Rating value={movie.rating} precision={0.1} readOnly />
        <span style={{ marginLeft: 8 }}>{movie.rating}</span>
      </Box>
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        <b>ID:</b> {movie.id}
      </Typography>
    </Box>
  );
}
