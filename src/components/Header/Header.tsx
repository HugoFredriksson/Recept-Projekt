import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <div>
                <Link to="/Home">Hem</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/AddRecipe">Lägg Till Recept</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/Profile">Profil</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/Admin">Admin</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/LogIn">Logga Ut</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;