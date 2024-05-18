import styled from 'styled-components';


const FonForm = styled.div`
  background-image: url('../public/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding: 30px 0;
`;

const HeadForm = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: var(--white-color);
`;

const ContactText = styled.p`
  font-size: 15px;
  margin: 10px 0;
  color: var(--white-color);
`;

const ContactTextTwo = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 0;
  color: var(--white-color);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  padding: 50px;
  width: 715px;
  border-radius: 30px;
  border: 1px solid var(--white-color);
  background-color: #252525;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  width: 100%;
  text-align: left;

  label {
    font-size: 16px;
    color: var(--white-color);
  }

  input {
    width:  400px;
    padding: 10px 0px 10px 30px;
    border: none;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white-color);
    font-size: 16px;
    margin: 5px 30px 10px;

    &::placeholder {
      color: var(--white-color);
    }
  }

  div {
    color: red;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background-color: var(--btn-color);
  color: var(--white-color);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:  #95b57c;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  font-size: 16px;
  color: var(--white-color);

  p {
    margin: 5px 0;
  }

  a {
    color: var(--white-color);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { ContactForm, ContactInfo, ContactText, ContactTextTwo, SubmitButton, HeadForm, FonForm, FormGroup };