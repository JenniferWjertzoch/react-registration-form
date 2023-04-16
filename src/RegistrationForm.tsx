import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';
import { RxCross2, RxCheck } from 'react-icons/rx';
import Header from './Header';


const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, '8+ characters')
    .matches(/[a-z]/, 'lowercase letter')
    .matches(/[A-Z]/, 'uppercase letter')
    .matches(/[0-9]/, 'number')
    .matches(/[^A-Za-z0-9]/, 'special character')
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
		<>
			<Header />
			<div className="wrapper">
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, errors, touched }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              {errors.email && touched.email ? (
                <div className="validation-icon-container">
                  <RxCross2 className="validation-icon validation-icon-error" />
                  <span className="validation-text validation-text-error">{errors.email}</span>
                </div>
              ) : touched.email ? (
                <div className="validation-icon-container">
                  <RxCheck className="validation-icon validation-icon-success" />
                  <span className="validation-text validation-text-success">Valid email</span>
                </div>
              ) : null}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              {errors.password && touched.password ? (
                <div className="validation-icon-container">
                  <RxCross2 className="validation-icon validation-icon-error" />
                  <span className="validation-text validation-text-error">{errors.password}</span>
                </div>
              ) : touched.password ? (
                <div className="validation-icon-container">
                  <RxCheck className="validation-icon validation-icon-success" />
                  <span className="validation-text validation-text-success">Valid password</span>
                </div>
              ) : null}
            <button type="button" disabled={!isValid} tabIndex={0} aria-label="Submit Registration Form">
							Submit
						</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
		</>
  );
};

export default RegistrationForm;
