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
  padding: 10px;
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
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  input {
    border: 2px solid #000;
    padding: 10px;
    margin-bottom: 10px;
  }

  label {
    padding: 10px 0;
  }

  .validation-icon-container {
    display: flex;
    align-items: flex-end;
    padding: 10px 5px;
    margin-bottom: 10px;
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
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  padding: 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;