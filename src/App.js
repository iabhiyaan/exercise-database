import React, { Component, Fragment } from "react";

import { muscles, exercises } from "./store";

import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";
class App extends Component {
  state = {
    exercises
  };
  getExerciseByCategory() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        console.log();
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  render() {
    const exercises = this.getExerciseByCategory();
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
