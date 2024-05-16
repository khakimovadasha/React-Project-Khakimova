import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import {
  HOME,
  CATALOG,
  ABOUT,
  CONTACTS,
  REVIEWS,
} from "../../app/routing/config";
import styled from "styled-components";

interface AuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: AuthContextType = {
  loginButtonText: "",
  toggleLogin: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const NavbarWrapper = styled.div`
  height: 90px;
  background-color: var(--nav);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: var(--nav);
  font-size: 18px;
  font-weight: 600;
`;

const ThemeButton = styled.button`
  background-color: ${props =>
    props.theme === "dark" ? "#000000" : "#ffffff"};
  color: ${props => (props.theme === "dark" ? "#ffffff" : "#000000")};
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props =>
      props.theme === "dark" ? "#111111" : "#f0f0f0"};
  }
`;

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const loginButtonText = isAuthenticated ? "Выйти" : "Войти";
  const toggleLogin = () => {
    setIsAuthenticated(prevState => !prevState);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <NavbarWrapper>
      <img src="../public/logo.svg" alt="logo" />
      <Link to={HOME} className="routeLink">
        Главная
      </Link>
      <Link to={CATALOG} className="routeLink">
        Каталог
      </Link>
      <Link to={ABOUT} className="routeLink">
        О нас
      </Link>
      {isAuthenticated && (
        <Link to={REVIEWS} className="routeLink">
          Отзывы
        </Link>
      )}
      {isAuthenticated && (
        <Link to={CONTACTS} className="routeLink">
          Контакты
        </Link>
      )}
      <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
        <button onClick={toggleLogin}> {loginButtonText} </button>
      </AuthContext.Provider>
      <ThemeButton theme={currentTheme} onClick={toggleTheme}>
        Сменить тему
      </ThemeButton>
    </NavbarWrapper>
  );
};

export default Navbar;