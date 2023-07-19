import { useState } from "react";

import {
  useTranslation,
  Header,
  GlobalStyle,
  Themes,
} from "./components/rutes";
import { ThemeProvider } from "styled-components";
import Switch from "./components/Switch/Switch";

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(localStorage.getItem("valueTheme"));

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Header></Header>
        <Switch theme={theme} setTheme={setTheme}></Switch>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
