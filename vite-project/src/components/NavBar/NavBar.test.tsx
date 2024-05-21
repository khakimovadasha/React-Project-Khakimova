import { describe, test, expect } from "vitest";
import { render, screen, userEvent } from "../../tests/setup";
import NavBar from "./index";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  test("авторизация через кнопку и проверка количества элементов навигации", async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );


    const authBtn = await screen.findByTestId("button-singin");
    expect(authBtn).toBeInTheDocument();
    expect(authBtn).toHaveTextContent("Войти");

    const initialLinks = screen.getAllByText(/Главная|Каталог|О нас/);
    expect(initialLinks.length).toEqual(3);


    await userEvent.click(authBtn);

    const allLinks = screen.getAllByText(/Главная|Каталог|О нас|Отзывы|Контакты/);
    expect(allLinks.length).toEqual(5);
  });
});
