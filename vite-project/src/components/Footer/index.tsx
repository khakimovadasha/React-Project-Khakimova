import { Link } from "react-router-dom";
import { HOME, CATALOG, ABOUT, CONTACTS, REVIEWS } from "../../app/routing/config";
import { FooterWrap, WrapLinks, WrNv, WrapNav, WrapShop, InfoWrap, NameShop, ShopOpen, WrapImgIcon  } from "./style";

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
          <NameShop>TukaPlants</NameShop>
          <p data-testid={"info-shop"}>Магазин цветов для дома</p>
        </WrapShop>
        <div>
          <a
            data-testid={"link-shop"}
            className="address-link"
            href="https://www.google.com/maps?q=Москва,+ул.+Ладожская,+д5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адрес: Москва, ул.Ладожская, д5. М.Бауманская
          </a>
          <ShopOpen>Магазин открыт ежедневно с 10:00 до 21:00</ShopOpen>
          <WrapImgIcon>
            <a href="tel:+79653389035">
              <img src="../public/tel.svg" alt="logo tel" />
            </a>
            <a href="https://t.me/TukaPlant_bot">
              <img style={{ marginLeft: "14px" }} src="../public/tg.svg" alt="logo telegramm"></img>
            </a>
            <a href="https://vk.com/b_d939">
              <img style={{ marginLeft: "14px" }} src="../public/vk.svg" alt="logo vk"></img>
            </a>
            <a href="mailto:tuka-plants@gmail.com">
              <img style={{ marginLeft: "14px" }} src="../public/mail.svg" alt="logo mail"/>
            </a>
          </WrapImgIcon>
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
