import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const movies = [
  {
    id: 1,
    name: 'Inception',
    image: 'https://m.media-amazon.com/images/I/51oDgkLkQ-L._AC_.jpg',
  },
  {
    id: 2,
    name: 'Interstellar',
    image: 'https://m.media-amazon.com/images/I/71n58vB2lGL._AC_SY679_.jpg',
  },
  {
    id: 3,
    name: 'The Dark Knight',
    image: 'https://m.media-amazon.com/images/I/51EbJjlYpDL._AC_.jpg',
  },
];

export default function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log('isAuthenticated' + isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      {/* Content */}
      <div style={{ padding: '2rem' }}>
        <h1>Here is the top recommended films for you this month</h1>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="month-select" style={{ marginRight: '0.5rem' }}>
            Select month:
          </label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            style={{ padding: '0.5rem' }}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/films/${movie.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  padding: '1rem',
                  width: '200px',
                  textAlign: 'center',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <img
                  src={movie.image}
                  alt={movie.name}
                  style={{
                    width: '100%',
                    borderRadius: '4px',
                  }}
                />
                <h2
                  style={{
                    fontSize: '1rem',
                    margin: '0.5rem 0',
                  }}
                >
                  {movie.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
