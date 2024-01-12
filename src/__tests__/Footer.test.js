import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("renders the footer text", () => {
    render(<Footer />);
    //can use /  / to check for part of text; using "i" at the end ignores the case of text
    const footerText = screen.getByText(/footer/i);
    expect(footerText).toBeInTheDocument();
  });
});