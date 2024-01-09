import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';

interface IMyForm {
  name: string;
  age: number;
}


const Contacts = () => {

  

  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: {errors,isValid}, // errors - список ошибок валидации для всех полей формы
    reset // метод для очистки полей формы
} = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
})

  const saveElement: SubmitHandler<IMyForm> = data => {
    // здесь мы передаём новый массив, который содержит все старые элементы и новый
    // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
        setTasks((prev) => [...prev, data])
        reset();
    }


  const [tasks, setTasks] = useState<IMyForm[]>([])





  return (
    <div>
      <p>Остались вопросы ?</p>
<p>Связаться с нами</p>
<form onSubmit={handleSubmit(saveElement)}>
<div>
    <label htmlFor="name">Имя</label>
    <input
      type="text"
      id="name"
      {...register('name', {
        required: "Поле обязательно для заполнения",
        minLength: {
          value: 2,
          message: "Нужно больше символов"
        }
      })}
      placeholder="Введите ваше имя"
    />
    <div>{errors.name?.message}</div>
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      {...register('email', {
        required: "Поле обязательно для заполнения",
        minLength: {
          value: 5,
          message: "Нужно больше символов"
        }
      })}
      placeholder="Введите ваш email"
    />
    <div>{errors.email?.message}</div>
  </div>
  <div>
    <label htmlFor="text">Ваше сообщение</label>
    <input
      type="text"
      id="text"
      {...register('text', {
        required: "Поле обязательно для заполнения",
        minLength: {
          value: 5,
          message: "Нужно больше символов"
        }
      })}
      placeholder="Введите текст"
    />
    <div>{errors.text?.message}</div>
  </div>
  <button type="submit" disabled={!isValid}>Отправить</button>
</form>

    <div>

      </div>
      {/* {
        tasks.map((task) =>
            <p>
                {task.name} - {task.age}
            </p>
        )
      } */}


      <p>Адрес: Москва , ул. Ладожская , д5. М.Бауманская</p>
      <p>Магазин открыт ежедневно с 10:00 до 21:00</p>
      <p>Телефон:</p><a href="tel:+79653389035">+7 (965) 338-90-35</a>
      <p>Почта:</p><a href="mailto:tuka-plants@gmail.com">tuka-plants@gmail.com</a>
    </div>
  )
}

export default  Contacts;