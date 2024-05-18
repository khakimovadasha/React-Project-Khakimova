import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IMyForm } from './types';
import { IData } from './types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../../components/MyDocument';
import { ContactForm, ContactInfo, ContactText, ContactTextTwo, SubmitButton, HeadForm, FonForm, FormGroup } from "./style"

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid },
    reset,
  } = useForm<IMyForm>({ mode: 'onBlur' });

  const [pdfData, setPdfData] = useState<IData>({} as IData);

  const saveElement: SubmitHandler<IMyForm> = async (data) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfData({
          name: data.name,
          email: data.email,
          text: data.text,
          picture: reader.result as string ,
        });
        reset();
      };
      reader.readAsDataURL(data.picture[0]);
  }   



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
          <label htmlFor="picture">Прикрепить фотографию</label>
          <input
            type="file"
            id="picture"
            {...register('picture', {
              required: 'Прикрепление фото обязательно'
            })}
            accept="image/png, image/jpeg" 
          />
          <div>{errors.picture?.message}</div>
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
      {pdfData && (
        <PDFDownloadLink
        document={<MyDocument name={pdfData.name} email={pdfData.email} text={pdfData.text} picture={pdfData.picture} />}
        fileName="contact-details.pdf"
        >
        {({ blob, url, loading, error }) => (loading ? 'Загрузка...' : 'Скачать PDF')}
        </PDFDownloadLink> 
        )}
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
