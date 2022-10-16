import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { NavLink, Routes, Route, Navigate} from "react-router-dom"
import logo from '../logo.svg'
import {routes} from './routes'

const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react logo" />
            <ul>
              {
                routes.map(({to, name, end}) => (
                  <li key={to}>
                    <NavLink 
                      to={to} 
                      end={end}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
              {
                routes.map(({to, path, Component}) => (
                  <Route
                    key={to}
                    path={path}
                    element={<Component/>} />
                ))
              }
              <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation