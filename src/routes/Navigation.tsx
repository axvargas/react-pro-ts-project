import { BrowserRouter } from "react-router-dom";
import { NavLink, Routes, Route, Navigate} from "react-router-dom";
import logo from '../logo.svg';
import Home from '../components/Home';

import {
  RegisterPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikAbstractPage,
  RegisterFormikPage,
  DynamicFormPage
} from '../03-forms/pages'

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
                to="register"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Register</NavLink>
            </li>
            <li>
              <NavLink 
                to="register-formik"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Register Formik</NavLink>
            </li>
            <li>
              <NavLink 
                to="formik-basic"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink 
                to="formik-components"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Formik Components</NavLink>
            </li>
            <li>
              <NavLink 
                to="formik-abstract"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink 
                to="dynamic-form"
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="register-formik" element={<RegisterFormikPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-components" element={<FormikComponentsPage />} />
          <Route path="formik-abstract" element={<FormikAbstractPage />} />
          <Route path="dynamic-form" element={<DynamicFormPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigation