import * as React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <h1>Projekt - Recept</h1>
        </nav>
      </header>
    );
  }
}

export default Header;