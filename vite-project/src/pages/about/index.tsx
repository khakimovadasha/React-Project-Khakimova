import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: 0 auto 70px;
  font-size: 16px;
  line-height: 1.5;
`;

const AboutText = styled.p`
  width: 800px;
  margin: 20px 0px 20px 100px;
  color: var(--white-color);
`;

const AboutTextTwo = styled.p`
  margin-bottom: 20px;
  width: 800px;
  color: var(--btn-color);
`;

const WrapCont = styled.div`
  padding: 50px; 
  display: flex;
  justify-content: space-between;
  background-color: var(--btn-color);
`;

const AboutImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: end;
  margin-right: 50px;
`;

const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 15px;
`;

const AboutMissionHeader = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const AboutAdvantagesHeader = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const AboutAdvantagesList = styled.ul`
  list-style: none;
  padding:20px 200px;
  display: flex;
  justify-content: space-between;
`;

const AboutAdvantageItem = styled.li`
  margin-bottom: 10px;
  padding: 10px 24px;
  background-color: #cbc0b0;
  border: 1px solid black;
  border-radius: 30px;
`;

const AboutContactHeader = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
`;

const AboutContactInfo = styled.p`
  margin-bottom: 10px;
`;



const About = () => {
  return (
    <AboutContainer>
      <h1>О нас</h1>
      <WrapCont>
        <AboutText>
          Мы являемся лидерами в сфере продажи и доставки разнообразных растений для украшения вашего дома или офиса.
          В TukaPlants мы стремимся предоставить нашим клиентам самый широкий выбор цветов различных видов, от популярных суккулентов и красивых бонсаев до экзотических орхидей и редких видов растений. Наша коллекция обновляется и расширяется постоянно, чтобы удовлетворить вкусы и предпочтения каждого нашего клиента.
          Мы гордимся тем, что предлагаем только самое высокое качество растений, которые прошли тщательный отбор и проверку перед отправкой. Вся наша продукция происходит от надежных поставщиков, что гарантирует свежесть и здоровье каждого растения.
          Мы также предлагаем полезные аксессуары и средства ухода, чтобы помочь вам создать оптимальные условия для процветания ваших растений. Наша команда экспертов всегда готова поделиться советами и знаниями о том, как правильно ухаживать за каждым видом растений, чтобы они радовали вас своей красотой на протяжении долгого времени.
        </AboutText>
        <AboutImageContainer>
          <div>
          <AboutImage src="../public/flovers-1.png" alt="flovers" />
          <AboutImage src="../public/flovers-2.png" alt="flovers" />
          </div>
          <div>
          <AboutImage src="../public/zamiac.png" alt="flovers" />
          <AboutImage src="../public/strelits.png" alt="flovers" />
          </div>
        </AboutImageContainer>
      </WrapCont>
      <div style={{ padding: '0 50px' }}>
      <AboutMissionHeader>Наша миссия</AboutMissionHeader>
      <AboutTextTwo>
        Наша миссия - предоставить клиентам красивые растения, создать уникальный опыт и помочь им воплотить свои идеи о красоте и уюте в доме.
        Мы стремимся быть партнерами, предлагая разнообразие растений и профессиональные советы по уходу. Наша цель - сделать каждый дом ярким, свежим и наполненным природной энергией.
      </AboutTextTwo>
      <AboutAdvantagesHeader>Наши преимущества</AboutAdvantagesHeader>
      <AboutAdvantagesList>
        <AboutAdvantageItem>Качество</AboutAdvantageItem>
        <AboutAdvantageItem>Широкий ассортимент</AboutAdvantageItem>
        <AboutAdvantageItem>Цена</AboutAdvantageItem>
        <AboutAdvantageItem>Быстрая доставка</AboutAdvantageItem>
      </AboutAdvantagesList>
      <AboutContactHeader>Связаться С Нами</AboutContactHeader>
      <AboutContactInfo>Телефон: <a href="tel:+79653389035">+7 (965) 338-90-35</a></AboutContactInfo>
      <AboutContactInfo>Почта: <a href="mailto:tuka-plants@gmail.com">tuka-plants@gmail.com</a></AboutContactInfo>
      </div>
    </AboutContainer>
  );
}

export default About;
