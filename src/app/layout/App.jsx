import { Outlet } from 'react-router';
import Header from './header.jsx';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
