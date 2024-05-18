import { Rating, ReviewContainer, ReviewDate, ReviewText, AuthorInfo, AuthorName, AuthorPhoto } from "./style" ;


export interface IStyledProps {
  containerHeight?: string;
}

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
        <ReviewContainer  data-testid ={"three-reviews"} key={index} containerHeight="180px"> 
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
