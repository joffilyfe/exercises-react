import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();
const store = mockStore({});

test("renders the hello world h1", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App  />
    </Provider>
  );
  const linkElement = getByText(/Workout/i);
  expect(linkElement).toBeInTheDocument();
});
