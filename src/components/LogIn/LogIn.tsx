import * as React from "react";

class LogIn extends React.Component {
  render() {
    return (
    <main>
        <form>
            <label htmlFor="fname">E-mail</label><br></br>
            <input type="text" id="username"></input><br></br>
            <label htmlFor="password">Lösenord</label><br></br>
            <input type="text" id="password"></input><br></br><br></br>
            <input type="submit" value="Logga In"></input>
        </form>
    </main>
//https://localhost:7118/User/LogIn
    );
  }
}

export default LogIn;