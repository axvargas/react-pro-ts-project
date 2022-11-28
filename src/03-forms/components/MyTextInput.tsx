import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  id?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}
const MyTextInput = ({ label, ...props }: Props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
    </>
  );
}

export default MyTextInput