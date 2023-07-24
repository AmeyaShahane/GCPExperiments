import React from "react";
import ReactDOM from "react-dom";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "ashahane",
  clientId: "ashahane",
});

keycloak.init();

const App = () => {
  return (
    <h1>Hello, world!</h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
