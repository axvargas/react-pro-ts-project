import { useField, ErrorMessage } from 'formik';

interface Props {
  label: string;
  name: string;
  id?: string;
  [x: string]: any;
}

const MySelectInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
    </>
  );
};

export default MySelectInput