import React from "react";
import Header from "./common/Header";
import ExerciseForm from "./home/ExerciseForm";
import ExerciseTable from "./home/ExerciseTable";
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
        <div className="row">
          <div className="col">
            <ExerciseForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ExerciseTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
