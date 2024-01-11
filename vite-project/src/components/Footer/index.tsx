import { Link } from "react-router-dom";
import {
  HOME,
  CATALOG,
  ABOUT,
  CONTACTS,
  REVIEWS,
} from "../../app/routing/config";
import styled from "styled-components";

export const FooterWrap = styled.div`
  height: fit-content;
  background-color: var(--btn-color);
  color: var(--white-color);
  padding:30px 50px 15px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0px;
  font-size: 10px;
  text-decoration: underline;
`;

export const WrapLinks  = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const WrapShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapNav  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-decoration: underline;
`;

export const WrNv  = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const Footer: React.FC = () => {

  return (
    <FooterWrap>
      <WrapLinks>
        <WrNv>
          <WrapNav>
            <Link to={HOME} className="routeLink">
              Главная
            </Link>
            <Link to={CATALOG} className="routeLink">
              Каталог
            </Link>
            <Link to={ABOUT} className="routeLink">
              О нас
            </Link>
          </WrapNav>
          <WrapNav>
            <Link to={REVIEWS} className="routeLink">
              Отзывы
            </Link>
            <Link to={CONTACTS} className="routeLink">
              Контакты
            </Link>
          </WrapNav>
        </WrNv>
        <WrapShop>
          <p style={{ fontSize: '30px', fontWeight: '500' }}>TukaPlants</p>
          <p>Магазин  цветов для дома</p>
        </WrapShop>
        <div>
        <a className="address-link" href="https://www.google.com/maps?q=Москва,+ул.+Ладожская,+д5" target="_blank" rel="noopener noreferrer">
          Адрес: Москва, ул.Ладожская, д5. М.Бауманская
        </a>
          <p style={{ display: 'flex', justifyContent: 'flex-end'}}>Магазин открыт ежедневно с 10:00 до 21:00</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0'}}>
            <a href="tel:+79653389035">
              <img src="../public/tel.svg" alt="logo tel" />
            </a>
            <a href="https://t.me/TukaPlant_bot">
              <img style={{ marginLeft: '14px' }} src='../public/tg.svg' alt="logo telegramm"></img>
            </a>
            <a href="https://vk.com/b_d939">
              <img style={{ marginLeft: '14px' }} src='../public/vk.svg' alt="logo vk"></img>
            </a>
            <a href="mailto:tuka-plants@gmail.com">
              <img style={{ marginLeft: '14px' }} src="../public/mail.svg" alt="logo mail" />
            </a>
          </div>      
      </div>
      </WrapLinks>
      <hr></hr>
      <InfoWrap>
        <p>© 2024 · TukaPlants</p>
        <p>Служба поддержки</p>
        <p>Политика конфиденциальности</p>
      </InfoWrap>
    </FooterWrap>
  );
};

export default Footer;