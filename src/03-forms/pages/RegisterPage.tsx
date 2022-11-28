import useForm from '../hooks/useForm';
import '../styles/styles.css';

const RegisterPage = () => {
  
  const { formData, onChange, onSubmit, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = formData;
  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={onChange}/>
        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={onChange}/>
        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={onChange}/>
        <input type="password" name="password2" id="password2" placeholder="Repeat password" value={password2} onChange={onChange}/>
        <button type="submit">Submit</button>
        <button type='button' onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}

export default RegisterPage