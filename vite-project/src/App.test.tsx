import { describe } from "vitest";
import { render, screen, userEvent } from "./tests/setup";
import App  from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("отображение странички", async () => {
      render(<BrowserRouter><App/></BrowserRouter>);
      const aboutlink= await screen.findByTestId("aboutus-link");
      
      
      const mainlink= await screen.findByTestId("main-link");

      userEvent.click(mainlink)
      const maintext = await screen.findByTestId("main-text")

      expect (maintext).toBeInTheDocument();
      expect(aboutlink).toBeInTheDocument();
      userEvent.click(aboutlink)
      const abouttext = await screen.findByTestId("aboutus-text")

      expect (abouttext).toBeInTheDocument();
  });
});


