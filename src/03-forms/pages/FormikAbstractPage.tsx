
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

import {
  MyTextInput,
  MyCheckoboxInput,
  MySelectInput,
} from '../components'

const FormikAbstractPage = () => {
  return (
    <div>
      <h1>Formik Abstract Page</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
          jobType: Yup.string().oneOf(['designer', 'developer', 'it-jr', 'it-sr'], 'Invalid Job Type').required('Required')

        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {
          (formik) => (
            <Form >
              <MyTextInput
                label='First Name'
                id='firstName'
                name='firstName'
                type='text'
                placeholder='First Name'
              />

              <MyTextInput
                label='Last Name'
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Last Name'
              />

              <MyTextInput
                label='Email Address'
                id='email'
                name='email'
                type='email'
                placeholder='Email Address'
              />

              <MySelectInput label="Job Type" id="jobType" name="jobType">
                <option value="">Select a job type</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-jr">IT - Junior</option>
                <option value="it-sr">IT - Senior</option>
              </MySelectInput>

             <MyCheckoboxInput label='Terms & Conditions' id="terms" name="terms"/>

              <button
                type="submit"
              >
                Register
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default FormikAbstractPage