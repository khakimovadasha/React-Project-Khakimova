
import styled from 'styled-components';

interface StyledProps {
  containerHeight?: string;
}

const ReviewContainer = styled.div<StyledProps>`
  margin: 20px 250px;
  padding: 20px;
  border: 1px solid #000000;
  background-color: #cddacd;
  border-radius: 30px;
  height: ${({ containerHeight }) => (containerHeight ? containerHeight : 'auto')};
`;

const Rating = styled.div`
  font-size: 24px;
`;

const ReviewText = styled.p`
  font-size: 16px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.p`
  font-weight: bold;
`;

const ReviewDate = styled.p`
  color: #000000;
  margin: 0 15px;
`;

const Reviews = () => {
  const dummyReviews = [
    {
      rating: 5,
      text:
        "Я очень доволен этим магазином. Качество обслуживания на высшем уровне.Заказывал здесь несколько раз и всегда получал товар в срок. Продукция также оправдала мои ожидания. Спасибо вам за отличное обслуживание!",
      authorName: "Иван Петров",
      date: "Январь 2024",
      authorPhoto: "public/man.png",
    },
    {
      rating: 5,
      text:
        "Магазин предлагает большой выбор товаров, и я всегда нахожу то, что мне нужно. Качество продукции хорошее. Буду дальше обращаться к вам за цветами для дома.",
      authorName: "Анна Сидорова",
      date: "Февраль 2024",
      authorPhoto: "public/woman-1.png",
    },
    {
      rating: 5,
      text:
        "С момента первой покупки в этом магазине я стал его постоянным клиентом. Всегда быстрая и качественная доставка, ассортимент товаров постоянно обновляется. Благодарю за отличное обслуживание!",
      authorName: "Екатерина Архипова",
      date: "Март 2024",
      authorPhoto: "public/woman-2.png",
    },
  ];

  return (
    <div>
      <h1>Отзывы</h1>
      {dummyReviews.map((review, index) => (
        <ReviewContainer key={index} containerHeight="180px"> 
          <Rating>
            {Array.from({ length: review.rating }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </Rating>
          <ReviewText>{review.text}</ReviewText>
          <AuthorInfo>
            <AuthorPhoto src={review.authorPhoto} alt={review.authorName} />
            <AuthorName>{review.authorName}</AuthorName>
            <ReviewDate>{review.date}</ReviewDate>
          </AuthorInfo>
        </ReviewContainer>
      ))}
    </div>
  );
};

export default Reviews;
