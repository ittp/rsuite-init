import React from "react";

import { render } from "react-dom";
import { Button, Form } from "rsuite";

import "rsuite/dist/rsuite.min.css";

const styles = {
  padding: 20,
  textAlign: "center"
};

const Steps = () => {

}

const App = () => (
  <div style={styles}>
    <Button>Настройки</Button>
  </div>
);

render(<App />, document.getElementById("root"));
