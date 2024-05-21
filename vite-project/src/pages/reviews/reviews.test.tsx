import { describe } from "vitest";
import { render, screen } from "../../tests/setup";
import Reviews from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Reviews", () => {
  test("отображение отзывов", async () => {
    render(<Reviews />);
    const reviews = await screen.findAllByTestId("three-reviews");
    expect(reviews.length).toEqual(3);
  });
});
