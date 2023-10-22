import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <nav className="footer">

      </nav>
    </>
  )
};

export default Layout;