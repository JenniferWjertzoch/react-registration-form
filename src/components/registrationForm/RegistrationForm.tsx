import { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { RxCross2, RxCheck } from 'react-icons/rx';
import Header from '../header/Header';
import { Wrapper, FormContainer, FormField, SubmitButton } from './styledRegistrationForm';

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
			<Wrapper>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, errors, touched }) => (
          <FormContainer>
            <FormField>
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
            </FormField>
            <FormField>
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
            <SubmitButton disabled={!isValid} tabIndex={0} aria-label="Submit Registration Form">
							Submit
						</SubmitButton>
            </FormField>
          </FormContainer>
        )}
      </Formik>
    </Wrapper>
		</>
  );
};

export default RegistrationForm;
