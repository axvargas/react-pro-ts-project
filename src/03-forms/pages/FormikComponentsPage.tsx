
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components Page</h1>

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
            <Form noValidate>
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                id="firstName"
                placeholder="First Name"
                name="firstName"
              />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName"> Last Name</label>
              <Field
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
              />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email Address</label>
              <Field
                type="email"
                id="email"
                placeholder="Email Address"
                name="email"
              />
              <ErrorMessage name="email" component="span" />


              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Select a job type</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-jr">IT - Junior</option>
                <option value="it-sr">IT - Senior</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label htmlFor="terms">
                Terms and Conditions
                <Field
                  type="checkbox"
                  id="terms"
                  name="terms"
                />
              </label>
              <ErrorMessage name="terms" component="span" />

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

export default FormikComponentsPage