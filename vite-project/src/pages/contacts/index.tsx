import React from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

interface IMyForm {
  name: string;
  age: number;
}

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

const Contacts = () => {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: 'onBlur', // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    // здесь мы передаём новый массив, который содержит все старые элементы и новый
    // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
    setTasks((prev) => [...prev, data]);
    reset();
  };
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  return (
    <FonForm>
      <HeadForm>Контакты</HeadForm>
      <ContactText>Остались вопросы?</ContactText>
      <ContactTextTwo>Свяжитесь с нами</ContactTextTwo>
      <ContactForm onSubmit={handleSubmit(saveElement)}>
        <FormGroup>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 2,
                message: 'Нужно больше символов',
              },
            })}
            placeholder="Введите ваше имя"
          />
          <div>{errors.name?.message}</div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов',
              },
            })}
            placeholder="Введите ваш email"
          />
          <div>{errors.email?.message}</div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="text">Ваше сообщение</label>
          <input
            type="text"
            id="text"
            {...register('text', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 5,
                message: 'Нужно больше символов',
              },
            })}
            placeholder="Введите текст"
          />
          <div>{errors.text?.message}</div>
        </FormGroup>
        <SubmitButton type="submit" disabled={!isValid}>
          Отправить
        </SubmitButton>
      </ContactForm>
      <ContactInfo>
        <p>Адрес: Москва , ул. Ладожская , д5. М.Бауманская</p>
        <p>Магазин открыт ежедневно с 10:00 до 21:00</p>
        <p>Телефон: <a href="tel:+79653389035">+7 (965) 338-90-35</a></p>
        <p>Почта: <a href="mailto:tuka-plants@gmail.com">tuka-plants@gmail.com</a></p>
      </ContactInfo>
    </FonForm>
  );
};

export default Contacts;
