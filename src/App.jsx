import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Switch from "./components/Switch/Switch";
import Header from "./components/header/Header";
import themes from "./Theme/Themes";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("valueTheme"));
  return (
      <div className="theme" data-theme={theme}>
        <Header></Header>
        <Switch theme={theme} setTheme={setTheme}></Switch>
        <GlobalStyle />
      </div>
  );
}

export default App;
