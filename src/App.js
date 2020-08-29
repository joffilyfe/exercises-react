import React from "react";
import Header from "./common/Header";
import "./styles/index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
