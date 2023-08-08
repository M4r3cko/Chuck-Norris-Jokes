import { render, screen } from "@testing-library/react";
import { LightDarkMode } from "./LightDarkMode";

describe("LightDarkMode component", () => {
  it("the initial color is light", () => {
    render(<LightDarkMode />);

    setTimeout(() => {
      const lightColorMode =
        document.documentElement.getAttribute("data-color-mode");

      expect(lightColorMode).toBe("light");
    }, 100);
  });

  it("toggles the color mode when the button is clicked", () => {
    render(<LightDarkMode />);
    const toggleButton = screen.getByRole("button");

    toggleButton.click();

    setTimeout(() => {
      const darkColorMode =
        document.documentElement.getAttribute("data-color-mode");

      expect(darkColorMode).toBe("dark");
    }, 100);
  });
});
