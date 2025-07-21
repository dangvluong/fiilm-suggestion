import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        Home
      </Link>
      <Link to="/login">
        <button style={{ padding: '0.5rem 1rem' }}>Login</button>
      </Link>
    </nav>
  );
}
