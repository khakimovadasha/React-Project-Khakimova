import styled from 'styled-components';
import { IStyledProps } from './index'; 


const ReviewContainer = styled.div<IStyledProps>`
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


export { Rating, ReviewContainer, ReviewDate, ReviewText, AuthorInfo, AuthorName, AuthorPhoto};
