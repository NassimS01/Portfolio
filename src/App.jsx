import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobalStyle } from "./styles/GlobalStyles";
import themes from "./Theme/themes";
import { ThemeProvider } from "styled-components";
import Switch from "./components/Switch/Switch";
import Header from "./components/header/Header";

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("valueTheme"));
  const thisTheme = themes[theme];

  return (
    <>
      <ThemeProvider theme={thisTheme}>
        <Header></Header>
        <Switch theme={theme} setTheme={setTheme}></Switch>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
