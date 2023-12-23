import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { HOME, CATALOG, ABOUT, CONTACTS, REVIEWS } from '../../app/routing/config'; 

const Navbar = () => { 
  const [loginButtonText, setButtonText] = useState<string>('Войти'); 

  const toggleLogin = () => { 
    setButtonText((prevState) => (prevState === 'Войти' ? 'Выйти' : 'Войти')); 
  }; 

  return ( 
    <> 
      <div className='route'> 
        <Link to={HOME}>Главная</Link> 
        <Link to={CATALOG}>Каталог</Link> 
        <Link to={ABOUT}>О нас</Link> 
        <Link to={CONTACTS}>Контакты</Link> 
        <Link to={REVIEWS}>Отзывы</Link> 

        <button onClick={toggleLogin}> 
          {loginButtonText} 
        </button> 
      </div> 
    </> 
  ); 
}; 

export default Navbar;
