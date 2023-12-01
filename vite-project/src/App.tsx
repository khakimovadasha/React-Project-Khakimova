import React from 'react';
import { Table, Tag, Space, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface PlantType {
  key: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  photo: string; 
}

const columns: ColumnsType<PlantType> = [
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

const plantData: PlantType[] = [
  {
    key: '1',
    name: 'Фикус',
    category: 'Комнатные',
    price: 2100,
    inStock: true,
    photo:  '../ficus.jpg', 
  },
  {
    key: '2',
    name: 'Стрелиция',
    category: 'Комнатные',
    price: 9500,
    inStock: true,
    photo: '../strelicia.jpg',
  },
  {
    key: '3',
    name: 'Монстера',
    category: 'Комнатные',
    price: 2500,
    inStock: false,
    photo: '../monstera.png',
  },
];

const FlowerShopTable: React.FC = () => (
  <Table columns={columns} dataSource={plantData} />
);

export default FlowerShopTable;
