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
    fireEvent.change(dateInput, { target: { value: "2020-01-01" } });
    expect(dateInput.value).toBe("2020-01-01");
  });
});
