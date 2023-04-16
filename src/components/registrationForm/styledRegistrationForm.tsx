import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid #000;
  width: 600px;
  padding: 0.625rem;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  &:first-child {
    margin-right: 0.625rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 0.625rem;
    }
  }

  input {
    border: 2px solid #000;
    padding: 0.625rem;
    margin-bottom: 0.625rem;
  }

  label {
    padding: 0.625rem 0;
  }

  .validation-icon-container {
    display: flex;
    align-items: flex-end;
    padding: 0.625rem 0.313rem;
    margin-bottom: 0.625rem;
  }

  .validation-icon {
    display: flex;
    align-items: center;
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
  }

  .validation-icon-success {
    color: #090;
  }

  .validation-icon-error {
    color: #ff0000;
  }
`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  padding: 0.625rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;