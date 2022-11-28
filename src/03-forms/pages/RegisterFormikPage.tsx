
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  MyTextInput,
} from '../components'

import '../styles/styles.css';

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required(),
          password2: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required()

        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (formik) => (
            <Form noValidate>
              <MyTextInput
                label='Name'
                id='name'
                name='name'
                type='text'
                placeholder='Name'
              />

              <MyTextInput
                label='Email Address'
                id='email'
                name='email'
                type='email'
                placeholder='Email Address'
              />

              <MyTextInput
                label='Pasword'
                id='password'
                name='password'
                type='password'
                placeholder='Password'
              />

              <MyTextInput
                label='Repeat Password'
                id='password2'
                name='password2'
                type='password'
                placeholder='Repeat Password'
              />

              <button
                type="submit"
              >
                Register
              </button>

              <button
                type="reset"
              >
                Reset
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default RegisterFormikPage