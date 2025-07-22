import { movies } from '../../../movies';

const baseUrl = 'http://localhost:3000';

export async function fetchMovies() {
  return movies;

  const response = await fetch(`${baseUrl}/api/movie`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
}

export async function fetchMovieById(id) {
  return movies.find((movie) => movie.id == id);

  const response = await fetch(`${baseUrl}/api/movie/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }
  return response.json();
}

export async function fetchUsers() {
  return ['alice', 'bob', 'charlie', 'david'];

  const response = await fetch(`${baseUrl}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}
