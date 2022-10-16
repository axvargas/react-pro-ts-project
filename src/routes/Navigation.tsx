import { BrowserRouter } from "react-router-dom"
import { NavLink, Routes, Route, Navigate} from "react-router-dom"
import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

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
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="lazy2"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Lazy 2</NavLink>
            </li>
            <li>
              <NavLink 
                to="lazy3"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Lazy 3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation