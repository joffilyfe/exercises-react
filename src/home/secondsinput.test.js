import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SecondsInput from "./SecondsInput";

test("The SecondsInput component should be rendered", () => {
  const { getByTestId } = render(
    <SecondsInput testId={"seconds-input"} onChangeTime={() => {}} />
  );
  const input = getByTestId("seconds-input");
  expect(input).toBeInTheDocument();
});

test("KeyUp event should update component value to normalized base", () => {
  const { getByTestId } = render(
    <SecondsInput testId={"seconds-input"} onChangeTime={() => {}} />
  );
  const input = getByTestId("seconds-input");
  fireEvent.keyUp(input, { target: { value: "00:00:71" } });
  expect(input.value).toBe("00:01:11");
});

test("When keyUp event is fired it should call the onChangeTime callback", () => {
  const onChangeTime = jest.fn();
  const { getByTestId } = render(
    <SecondsInput testId="seconds-input" onChangeTime={onChangeTime} />
  );
  const input = getByTestId("seconds-input");
  fireEvent.keyUp(input, { target: { value: "00:00:71" } });

  expect(onChangeTime).toHaveBeenCalledTimes(1);
});
