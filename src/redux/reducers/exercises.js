import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  FETCH_EXERCISES_OPTIONS,
} from "../actionTypes";

import { fetchExercisesOptions } from "../../Api";

const initialState = {
  exercises: [],
  exercisesOptions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXERCISE: {
      const { exercise } = action.payload;
      const exercises = [...state.exercises, exercise];
      return {
        ...state,
        exercises: exercises,
      };
    }
    case REMOVE_EXERCISE: {
      const { id } = action.payload;
      const exercises = state.exercises.filter(
        (exercise) => exercise.id !== id
      );
      return {
        ...state,
        exercises: exercises,
      };
    }
    case FETCH_EXERCISES_OPTIONS: {
      // fetch the exercise options from the web or
      // database or anywhere.
      // Redux does not know nothing of async things
      // its documentations talks about 'thunks' and
      // if the fetch is a real async operation we
      // should move this logic and follow the
      // redux solutions.
      const options = fetchExercisesOptions();
      return {
        ...state,
        exercisesOptions: options,
      };
    }
    default:
      return state;
  }
};

export default reducer;
