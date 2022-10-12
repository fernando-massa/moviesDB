import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav-bar">
      <h3>🎬 MoviesDB</h3>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; &nbsp;
      <Link to="/collection/add" className="nav-butt">Add Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/collection" className="nav-butt">My Collection</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className="nav-butt">Log Out</Link>
    </nav>
  );
}