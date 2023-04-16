import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';
import '@testing-library/jest-dom/extend-expect';


describe('RegistrationForm', () => {
  it('renders correctly', () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('displays validation error for invalid email', async () => {
    render(<RegistrationForm />);
    
    const emailInput = screen.getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'email' } });
    fireEvent.blur(emailInput);

    const emailErrorMessage = await screen.findByText('Invalid email address');
    expect(emailErrorMessage).toBeInTheDocument();
  });

it('displays validation error for invalid password', async () => {
  render(<RegistrationForm />);
  const passwordInput = screen.getByLabelText('Password');
	fireEvent.change(passwordInput, { target: { value: 'invalid' } });
  fireEvent.blur(passwordInput);

  const passwordErrorMessage = await screen.findByText('8+ characters');
    expect(passwordErrorMessage).toBeInTheDocument();
});

	it('submits the form when all fields are valid', async () => {
		render(<RegistrationForm />);
		const emailInput = screen.getByLabelText('Email');
		const passwordInput = screen.getByLabelText('Password');
		fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
		fireEvent.change(passwordInput, { target: { value: '123password' } });

		fireEvent.click(screen.getByText('Submit'));
		expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
		expect(screen.queryByText('8+ characters')).not.toBeInTheDocument();
	});
});
