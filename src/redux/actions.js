import {
  ADD_EXERCISE,
  FETCH_EXERCISES_OPTIONS,
} from "./actionTypes";
import { v4 as uuid } from "uuid";

/**
 * Provides an action to reducer insert a new exercise in the store
 * @param {Object} exercise
 */
export const addExercise = (exercise) => ({
  type: ADD_EXERCISE,
  payload: {
    exercise: { id: uuid(), ...exercise },
  },
});

export const fetchExercisesOptions = () => ({
  type: FETCH_EXERCISES_OPTIONS,
  payload: {},
});
