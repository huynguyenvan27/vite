import { renderWithProviders } from "@app/test/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
describe("App", () => {
  it("Should render components", async () => {
    renderWithProviders(<App />);
    await waitFor(() => {
      expect(screen.getByText("Vite + React")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  it("Should count ++", async () => {
    renderWithProviders(<App />);
    const button = screen.getByRole("button");
    const currentCount = Number(button.textContent);
    await userEvent.click(button);
    expect(button.textContent).toBe((currentCount + 1).toString());
  });
});
