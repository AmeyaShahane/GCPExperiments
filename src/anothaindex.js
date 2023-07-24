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
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  keycloak.on("authenticated", () => {
    setIsAuthenticated(true);
  });

  keycloak.on("loginRequired", () => {
    setIsAuthenticated(false);
  });

  if (isAuthenticated) {
    return (
      <h1>Hello, world!</h1>
    );
  } else {
    return (
      <h1>Please log in.</h1>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
