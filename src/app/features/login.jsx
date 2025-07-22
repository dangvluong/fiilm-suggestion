import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './authSlice';

const dummyUsers = ['alice', 'bob', 'charlie', 'david'];

export default function Login() {
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ username: selectedUser }));

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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Username:
        </label>
        <select
          id="username"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        >
          {dummyUsers.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button type="submit" style={{ width: '100%', padding: '0.5rem' }}>
          Login
        </button>
      </form>
    </div>
  );
}
