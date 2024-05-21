import React, { FC } from "react";
import { Card, Image } from "antd";
import { IFlover } from "./types";

const { Meta } = Card;

interface IFloverCardProps {
  flover: IFlover;
}

const CardFlover: FC<IFloverCardProps> = ({ flover }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <Image
        src={flover.photo}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        alt="flover"
      />
    }
  >
    <Meta title={flover.name} description={flover.price} />
  </Card>
);

export default CardFlover;
