import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "./matchMedia.mock";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RegisterPage from "./pages/RegisterPage";

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </RecoilRoot>
  )
}

describe("utility", () => {
  function main() {
    const utils = render(<App />);
    const fullname = utils.getByLabelText(/Full Name/i);
    const email = utils.getByLabelText(/Email/i);
    const dateOfBirth = utils.getByLabelText(/Date Of Birth/i);
    const button = utils.getByText(/Next/i);
    return {
      fullname,
      email,
      dateOfBirth,
      button,
      ...utils,
    };
  }

  test("render register page", () => {
    render(<RegisterPage />, {wrapper: Wrappers});
    const linkElement = screen.getByText(/Personal Information/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render dashboard page", () => {
    render(<DashboardPage />, {wrapper: Wrappers});
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("input form and press button", () => {
    const { fullname, email, button } = main();
    fireEvent.change(fullname, { target: { value: "Wirayuda" } });
    fireEvent.change(email, {
      target: { value: "wirayuda.senjaya@dexagroup.com" },
    });
    const picker = document.getElementsByClassName("ant-picker-input")[0];
    fireEvent.click(picker);
    const date = document.getElementsByClassName("ant-picker-cell-inner")[15];
    fireEvent.click(date);
    fireEvent.click(button);
    setTimeout(() => {
      expect(screen.getByText(/Address Information/i)).toBeInTheDocument();
    }, 3000);
  });
});
