import React from "react";
import LandingPage from "./components/layout/LandingPage";
import {useTranslation} from "react-i18next";


function App() {
  const [t, i18n] = useTranslation('common');
  return (
    <div>
      <LandingPage t={t} i18={i18n} />
    </div>
  );
}

export default App;