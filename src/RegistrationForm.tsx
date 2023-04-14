import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
    .required('Required'),
});

interface FormValues {
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' });

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
