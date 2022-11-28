import {useState} from 'react'

const useForm = <T>( initState: T ) => {
  const [formData, setFormData] = useState(initState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevRegisterData => ({
      ...prevRegisterData,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  const resetForm = () => {
    setFormData({...initState})
  }

  return {
    //properties
    formData,

    //methods
    onChange,
    onSubmit,
    resetForm
  }
}

export default useForm