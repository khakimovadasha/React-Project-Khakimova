import React from 'react';
import { AboutContainer, AboutAdvantageItem, AboutAdvantagesHeader, AboutAdvantagesList, AboutContactHeader, AboutContactInfo, AboutImage, AboutImageContainer, AboutMissionHeader, AboutText, AboutTextTwo, WrapCont } from "./style";

const About = () => {
  return (
    <AboutContainer>
      <h1  data-testid={"aboutus-text"} >О нас</h1>
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
