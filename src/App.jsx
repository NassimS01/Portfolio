import { useTranslation } from "react-i18next";
import Header from "./components/header/Header";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header></Header>
      <h1>{t("home")}</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
