import * as React from "react";
import styles from "./HomePage.module.css";

class HomePage extends React.Component {
    render() {
      return (
        <div>
          <div>Stack Exchange Search</div>
          <div>
            <p>This will search Stack Exchange questions for given title text.</p>
            <p>
              Enter your search text and click the icon or press the Enter key. A
              list of matching questions will be shown.
            </p>
            <p>After that, you can click on a question to see the answers.</p>
            
            <h3>Written in React 16.9.0 with TypeScript</h3>
          </div>
        </div>
      );
    }
  }
  
  export default HomePage;