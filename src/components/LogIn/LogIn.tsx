import * as React from "react";
import styles from "./Footer.module.css";

class LogIn extends React.Component {
  render() {
    return (
      <form id="logIn">
        <label>Användarnamn:</label>
        <input type="text" id="username"></input>
        <label>Lösenord:</label>
        <input type="text" id="password"></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default LogIn;