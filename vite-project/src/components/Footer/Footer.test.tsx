import { describe } from "vitest";
import { render, screen } from "../../tests/setup";
import Footer from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  test("отображается футер", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const text = screen.getByTestId("info-shop");
    expect(text).toBeInTheDocument();
    const linktext = screen.getByTestId("link-shop");
    expect(linktext).toBeInTheDocument();
  });
});
