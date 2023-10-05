import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 rounded-lg">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='task-1'>Task 1</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
