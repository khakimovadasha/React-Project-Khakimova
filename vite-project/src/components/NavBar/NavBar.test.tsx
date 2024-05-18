import { describe } from "vitest";
import { render, screen, userEvent } from "../../tests/setup";
import NavBar from "./index";

import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  test("авторизация через кнопку", async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const authBtn = await screen.findByTestId("button-singin");
    expect(authBtn).toBeInTheDocument();
    await userEvent.click(authBtn);
    expect(authBtn).toHaveTextContent("Выйти");
  });
});
