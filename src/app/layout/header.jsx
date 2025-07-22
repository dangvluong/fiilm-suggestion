import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../features/authSlice';

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
        {isAuthenticated && (
          <>
            {!!user && <h3>Hello {user.username}</h3>}
            <button onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>
              Logout
            </button>
          </>
        )}
      </Link>
      {!isAuthenticated && (
        <Link to="/login">
          <button style={{ padding: '0.5rem 1rem' }}>Login</button>
        </Link>
      )}
    </nav>
  );
}
