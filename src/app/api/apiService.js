const baseUrl = 'http://localhost:3000';

export async function fetchMovies() {
  const response = await fetch(`${baseUrl}/api/movie`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
}

export async function fetchMovieById(id) {
  const response = await fetch(`${baseUrl}/api/movie/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }
  return response.json();
}

export async function fetchUsers() {
  const response = await fetch(`${baseUrl}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}
