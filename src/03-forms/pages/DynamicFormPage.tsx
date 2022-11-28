import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import formJson from '../data/custom-forms.json'

import { MyTextInput, MySelectInput } from '../components'

const initialValues:{[key: string] : any} = {}
const validations : {[key: string] : any} = {}

formJson.forEach((item: any) => {
  initialValues[item.name] = item.value
  if (item.validations) {
    let schema = Yup.string()
    item.validations.forEach( (validation: any) => {
      switch (validation.type) {
        case 'required':
          schema = schema.required(validation.message)
          break
        case 'minLength':
          schema = schema.min(validation.value, validation.message)
          break
        case 'maxLength':
          schema = schema.max(validation.value, validation.message)
          break
        case 'email':
          schema = schema.email(validation.message)
      }
    })
    validations[item.name] = schema
  }
})

const validationSchema = Yup.object({...validations})

const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {
          (formik) => (
            <Form noValidate>
              {
                formJson.map(({ type, name, placeholder, label, options }) => {
                  switch (type) {
                    case 'text':
                    case 'email':
                    case 'password':
                      return <MyTextInput
                        key={name}
                        label={label}
                        id={name}
                        name={name}
                        type={type as any}
                        placeholder={placeholder}
                      />
                    case 'select':
                      return <MySelectInput
                        key={name}
                        label={label}
                        id={name}
                        name={name}
                      >
                        <option value="">Select a option</option>
                        {
                          options && options.map((option: any) => (
                            <option key={option.id} value={option.id}>{option.label}</option>
                          ))
                        }
                      </MySelectInput>
                    default:
                      return null
                  }
                })
              }
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default DynamicFormPage