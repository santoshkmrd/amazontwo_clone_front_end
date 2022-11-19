import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import { useTranslation } from "react-i18next";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import Footer from "./components/layout/Footer";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import YourAccountContainer from "./components/YourAccount/YourAccountContainer";

function App() {
  const [t, i18n] = useTranslation("common");
  const Login = () => <LoginContainer t={t} i18n={i18n} />;
  const Landing = () => <LandingPage t={t} i18n={i18n} />;
  const Register = () => <RegisterContainer t={t} i18n={i18n} />;
  const YourAccount = () => <YourAccountContainer t={t} i18n={i18n} />;
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarContainer t={t} i18n={i18n} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/your_account" element={<YourAccount />} />
          </Routes>
          <Footer t={t} i18n={i18n} />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
