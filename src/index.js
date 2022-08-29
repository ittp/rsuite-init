import React from "react";
import { render } from "react-dom";
import { Button } from "rsuite";

import "rsuite/dist/rsuite.min.css";

const styles = {
  padding: 20,
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Button>Hello World</Button>
  </div>
);

render(<App />, document.getElementById("root"));
