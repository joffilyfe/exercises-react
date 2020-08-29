import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ExerciseForm from "./ExerciseForm";

describe("The ExerciseForm component", () => {
  test("should be rendered", () => {
    const { getByTestId } = render(<ExerciseForm />);
    const exerciseForm = getByTestId("exercise-form");
    expect(exerciseForm).toBeInTheDocument();
  });

  test("should have the exercise seconds state update when the time input call the onChangeTime callback", () => {
    render(<ExerciseForm />);
    const timeInput = document.querySelector("#timePicker");
    fireEvent.keyUp(timeInput, { target: { value: "00:00:01" } });
    expect(timeInput.value).toBe("00:00:01");
  });

  test("should have the exercise type state update when the type select call the onChangeType callback", () => {
    render(<ExerciseForm exercisesOptions={["other", "run"]} />);
    const typeSelect = document.querySelector("#selectExercise");
    fireEvent.change(typeSelect, { target: { value: "run" } });
    expect(typeSelect.value).toBe("run");
  });

  test("should have the exercise type date update when the input date call the onChangeDate callback", () => {
    render(<ExerciseForm />);
    const dateInput = document.querySelector("#datePicker");
    fireEvent.change(dateInput, { target: { value: "01/01/2020" } });
    expect(dateInput.value).toBe("01/01/2020");
  });

  test("should require the time value and show the error if form is submited", () => {
    const { getByText } = render(<ExerciseForm />);
    const addButton = getByText("Add");
    let errorElement = document.querySelector(
      "div[data-testid='time-container'] span"
    );

    fireEvent.click(addButton, {});
    expect(errorElement.innerHTML).toBe("Please inform a time");
  });

  test("should show the error element if the input time was updated with a invalid time", () => {
    const { getByText, getByTestId } = render(<ExerciseForm />);
    const addButton = getByText("Add");
    const timeInput = getByTestId("seconds-input");

    fireEvent.keyUp(timeInput, { target: { value: "00:00:00" } });
    fireEvent.click(addButton, {});
    let errorElement = document.querySelector(
      "div[data-testid='time-container'] span"
    );

    expect(errorElement.innerHTML).toBe("Please inform a time");
  });

  test("should hide the error element if the input time was updated with a valid time", () => {
    const { getByText, getByTestId } = render(<ExerciseForm />);
    const addButton = getByText("Add");
    const timeInput = getByTestId("seconds-input");

    fireEvent.keyUp(timeInput, { target: { value: "00:00:01" } });
    fireEvent.click(addButton, {});
    let errorElement = document.querySelector(
      "div[data-testid='time-container'] span"
    );

    expect(errorElement.innerHTML).toBe("");
  });

  test("should require the exercise type and show the error if form is submited", () => {
    const { getByText } = render(<ExerciseForm />);
    const addButton = getByText("Add");
    let errorElement = document.querySelector(
      "div[data-testid='exercise-type-container'] span"
    );

    fireEvent.click(addButton, {});
    expect(errorElement.innerHTML).toBe("Please select an exercise");
  });

  test("should require the exercise type and show the error if form is submited", () => {
    const { getByText } = render(
      <ExerciseForm exercisesOptions={["run", "other"]} />
    );
    const addButton = getByText("Add");
    let errorElement = document.querySelector(
      "div[data-testid='exercise-type-container'] span"
    );

    fireEvent.click(addButton, {});
    expect(errorElement.innerHTML).toBe("Please select an exercise");
  });

  test("should hide select type error if the type was selected", () => {
    const { getByText, getByTestId } = render(
      <ExerciseForm exercisesOptions={["run"]} />
    );
    const addButton = getByText("Add");
    const select = getByTestId("exercise-type");

    fireEvent.change(select, { target: { value: "run" } });
    let errorElement = document.querySelector(
      "div[data-testid='exercise-type-container'] span"
    );

    fireEvent.click(addButton, {});
    expect(errorElement.innerHTML).toBe("");
  });
});
