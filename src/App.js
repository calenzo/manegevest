import { Fragment } from "react";
import GlobalStyle from "./styles";

import { Home } from "./pages/Home";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;
