// index.js
import Keycloak from "keycloak-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "ashahane",
  clientId: "ashahane",
});

keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
  if (authenticated) {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
}).catch((error) => {
  console.error("Error during Keycloak initialization:", error);
});

