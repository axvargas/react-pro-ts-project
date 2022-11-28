import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  id?: string;
  [x: string]: any;
}

const MyCheckoboxInput = ({ label, ...props } :Props) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label htmlFor={props.id || props.name} className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
    </>
  );
};

export default MyCheckoboxInput