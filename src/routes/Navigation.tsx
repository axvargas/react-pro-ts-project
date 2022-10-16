import { BrowserRouter } from "react-router-dom";
import { NavLink, Routes, Route, Navigate} from "react-router-dom";
import logo from '../logo.svg';
import Home from '../components/Home';
import About from '../components/About';
import Users from '../components/Users';
const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink 
                to="/"
                end
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="about"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >About</NavLink>
            </li>
            <li>
              <NavLink 
                to="users"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation