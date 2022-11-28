
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

const FormikBasicPage = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { touched, errors, handleSubmit, getFieldProps } = formik;
  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form onSubmit={handleSubmit} noValidate >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email ? <span>{errors.email}</span> : null}

        <button
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default FormikBasicPage