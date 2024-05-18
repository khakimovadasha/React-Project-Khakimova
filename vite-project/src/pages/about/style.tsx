import styled from "styled-components";


export const AboutContainer = styled.div`
  margin: 0 auto 70px;
  font-size: 16px;
  line-height: 1.5;
`;

export const AboutText = styled.p`
  width: 800px;
  margin: 20px 0px 20px 100px;
  color: var(--white-color);
`;

export const AboutTextTwo = styled.p`
  margin-bottom: 20px;
  width: 800px;
  color: black;
`;

export const WrapCont = styled.div`
  padding: 50px; 
  display: flex;
  justify-content: space-between;
  background-color: var(--btn-color);
`;

export const AboutImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: end;
  margin-right: 50px;
`;

export const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 15px;
`;

export const AboutMissionHeader = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const AboutAdvantagesHeader = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const AboutAdvantagesList = styled.ul`
  list-style: none;
  padding:20px 200px;
  display: flex;
  justify-content: space-between;
`;

export const AboutAdvantageItem = styled.li`
  margin-bottom: 10px;
  padding: 10px 24px;
  background-color: #cbc0b0;
  border: 1px solid black;
  border-radius: 30px;
`;

export const AboutContactHeader = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
`;

export const AboutContactInfo = styled.p`
  margin-bottom: 10px;
`;

