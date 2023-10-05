import { Outlet } from 'react-router';
import './App.css';
import NavBar from './bundles/common/components/navbar';

function App() {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Outlet />
      </div>
  );
}

export default App;
