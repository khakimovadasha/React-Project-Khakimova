import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import {
  HOME,
  CATALOG,
  ABOUT,
  CONTACTS,
  REVIEWS,
} from "../../app/routing/config";

interface AuthContextType {
  loginButtonText: string;
  toggleLogin: () => void;
}

const defaultValue: AuthContextType = {
  loginButtonText: '',
  toggleLogin: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginButtonText = isAuthenticated ? "Выйти" : "Войти";

  const toggleLogin = () => {
    setIsAuthenticated((prevState) => !prevState);
  };
  return(
    <div>
        <div>
          <Link to={ABOUT} className="routeLink">
            О нас
          </Link>
          <Link to={HOME} className="routeLink">
            Главная
          </Link>
          <Link to={CATALOG} className="routeLink">
            Каталог
          </Link>
          
          {!isAuthenticated && (
            <Link to={CONTACTS} className="routeLink">
              WomenForm
            </Link>
          )}
          {isAuthenticated && (
            <Link to={REVIEWS} className="routeLink">
              Отзывы
            </Link>
          )}
        </div>
        <AuthContext.Provider value={{ loginButtonText, toggleLogin }}>
          <div>
            <button
              onClick={toggleLogin}
            >
              {loginButtonText}
            </button>
          </div>
        </AuthContext.Provider>
        </div>
  );
};

export default Navbar;
