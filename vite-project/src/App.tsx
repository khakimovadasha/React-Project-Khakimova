import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Image, Button } from 'antd';
import { UNIVERSITIES_ROUTE } from './app/routing/config';
import { USERS_ROUTE } from './app/routing/config';

import plantData from './api/api.json';


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
    render: (photo) => <Image width={50} height={50} src={photo} />,
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
    render: (price) => <span>{price}руб</span>,
  },
  {
    title: 'Наличие',
    dataIndex: 'inStock',
    key: 'inStock',
    render: (inStock) => (
      <Tag color={inStock ? 'green' : 'volcano'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </Tag>
    ),
  },
  {
    title: 'Действие',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>В корзину</a>
        <a>Подробнее</a>
      </Space>
    ),
  },
];



function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<PlantType[]>([]);

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

  return (
    <>
      <Link to={UNIVERSITIES_ROUTE}>University</Link>
      <br />
      <Link to={USERS_ROUTE}>User</Link>
      <Table columns={columns} dataSource={displayedData} />

      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span style={{ margin: '0 10px' }}>Страница: {currentPage}</span>
      <Button onClick={handleNextPage}>Вперёд</Button>
    </>
  );
}

export default App;
