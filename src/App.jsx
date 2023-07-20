import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Switch from "./components/Switch/Switch";
import Header from "./components/header/Header";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("valueTheme") || "light"
  );
  return (
    <div className="theme" data-theme={theme}>
      <Header></Header>
      <Switch theme={theme} setTheme={setTheme}></Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
