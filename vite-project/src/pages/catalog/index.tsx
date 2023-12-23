import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Image, Button } from 'antd';
import { SubmitHandler, useForm } from "react-hook-form";
import plantData from '../../api/api.json';






interface PlantType {
  key: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  photo: string;
}


const itemsPerPage = 10;


const columns = [
  {
    title: 'Фото',
    dataIndex: 'photo',
    key: 'photo',
    render: (photo: string) => <Image width={50} height={50} src={photo} />,
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Категория',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => <span>{price}руб</span>,
  },
  {
    title: 'Наличие',
    dataIndex: 'inStock',
    key: 'inStock',
    render: (inStock: boolean) => (
      <Tag color={inStock ? 'green' : 'volcano'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </Tag>
    ),
  },
  {
    title: 'Действие',
    key: 'action',
    render: (_, record: string) => (
      <Space size="middle">
        <a>В корзину</a>
        <a>Подробнее</a>
      </Space>
    ),
  },
];


interface IMyForm {
  name: string;
  age: number;
}




function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<PlantType[]>([]);
  const totalPages = Math.ceil(plantData.length / itemsPerPage);


  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    const newData = plantData.slice(offset, offset + itemsPerPage);
    setDisplayedData(newData);
  }, [currentPage]);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };




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
    <>
      <Table columns={columns} dataSource={displayedData} pagination={false} />


      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span style={{ margin: '0 10px' }}>Страница: {currentPage}</span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Вперёд
      </Button>




  <form onSubmit={handleSubmit(saveElement)}>
    <input
        {...register('name', {
                required: "Поле обязательно для заполнения",
                minLength: {
                    value: 5,
                    message: "Нужно больше символов"
                }
            }
      )}
    />
    <div>{errors.name?.message}</div>
    <input
        {...register('age', {
                required: "Поле обязательно для заполнения",
                minLength: {
                    value: 10,
                    message: "Нужно больше символов"
                }
            }
        )}
    />
    <div>{errors.age?.message}</div>
    <button type="submit" disabled={!isValid} >Сохранить</button>
  </form>
  {
    tasks.map((task) =>
        <p>
            {task.name} - {task.age}
        </p>
    )
}
    </>
  );
}


export default Catalog;



