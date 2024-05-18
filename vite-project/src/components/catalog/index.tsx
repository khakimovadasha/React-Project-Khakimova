import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Image, Button } from "antd";
import plantData from "../../api/api.json";

interface IPlantType {
  key: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  photo: string;
}

const itemsPerPage = 8;

const columns = [
  {
    title: "Фото",
    dataIndex: "photo",
    key: "photo",
    render: (photo: string) => <Image width={90} height={90} src={photo} />,
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Категория",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
    render: (price: number) => <span>{price}руб</span>,
  },
  {
    title: "Наличие",
    dataIndex: "inStock",
    key: "inStock",
    render: (inStock: boolean) => (
      <Tag color={inStock ? "green" : "volcano"}>{inStock ? "In Stock" : "Out of Stock"}</Tag>
    ),
  },
  {
    title: "Действие",
    key: "action",
    render: (record: string) => (
      <Space size="middle">
        <a>В корзину</a>
        <a>Подробнее</a>
      </Space>
    ),
  },
];

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<IPlantType[]>([]);
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

  return (
    <div style={{ margin: "0 50px" }}>
      <h1>Каталог</h1>
      <Table columns={columns} dataSource={displayedData} pagination={false} />

      <Button style={{ margin: "30px 0px 40px 50px" }} onClick={handlePrevPage} disabled={currentPage === 1}>
        Назад
      </Button>
      <span style={{ margin: "0 20px" }}>Страница: {currentPage}</span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Вперёд
      </Button>
    </div>
  );
}

export default Catalog;
