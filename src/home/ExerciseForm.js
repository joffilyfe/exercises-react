import React from "react";
import PropTypes from "prop-types";
import SecondsInput from "./SecondsInput";
import styles from "./exerciseform.module.scss";

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: {
        date: "",
        seconds: 0,
        type: "",
      },
      errors: {},
    };

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
  }

  onChangeTime({ seconds }) {
    this.setState({
      ...this.state,
      exercise: { ...this.state.exercise, seconds },
    });
  }

  onChangeType(event) {
    this.setState({
      ...this.state,
      exercise: { ...this.state.exercise, type: event.target.value },
    });
  }

  onChangeDate(event) {
    this.setState({
      ...this.state,
      exercise: { ...this.state.exercise, date: event.target.value },
    });
  }

  render() {
    const exercisesOptions = this.props.exercisesOptions.map((type, index) => (
      <option key={`${type}-${index}`} value={type}>
        {type}
      </option>
    ));

    return (
      <section
        data-testid="exercise-form"
        className={styles.addExerciseContainer}
      >
        <form className={styles.addExerciseForm} onSubmit={this.onAddExercise}>
          <div data-testid="time-container" className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="timePicker">
              Time spent
            </label>
            <SecondsInput
              id="timePicker"
              testId={"seconds-input"}
              title="Type a quantity of spent in this exercise"
              placeholder="00:55:00"
              value={this.state.exercise.seconds}
              className={styles.formInput}
              onChangeTime={this.onChangeTime}
            />
            <span className={styles.inputError}>
              {this.state.errors.seconds}
            </span>
          </div>

          <div
            data-testid="exercise-type-container"
            className={styles.formGroup}
          >
            <label className={styles.formLabel} htmlFor="selectExercise">
              Select an exercise
            </label>
            <select
              id="selectExercise"
              title="Select an exercise type to this exercise"
              data-testid="exercise-type"
              className={styles.formSelect}
              value={this.state.exercise.type}
              onChange={this.onChangeType}
            >
              <option>Select an option</option>
              {this.props.exercisesOptions &&
                this.props.exercisesOptions.length > 0 &&
                exercisesOptions}
            </select>
            <span className={styles.inputError}>{this.state.errors.type}</span>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="datePicker">
              Select a date
            </label>
            <input
              id="datePicker"
              title="Inform a date of when this exercise occurred"
              type="date"
              value={this.state.exercise.date}
              className={styles.formInput}
              onChange={this.onChangeDate}
            />
            <span className={styles.inputError}>{this.state.errors.date}</span>
          </div>

          <div className={`${styles.formGroup} ${styles.formGroup05}`}>
            <button
              className={`${styles.submitButton} ${styles.submitButtonMarginTop}`}
            >
              Add
            </button>
          </div>
        </form>
      </section>
    );
  }
}

ExerciseForm.propTypes = {
  exercisesOptions: PropTypes.array.isRequired,
};

ExerciseForm.defaultProps = {
  exercisesOptions: [],
};

export default ExerciseForm;
