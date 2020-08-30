export const getExercisesState = (store) => store.exercises;

export const getAllExercises = (store) => {
  return getExercisesState(store) ? getExercisesState(store).exercises : [];
};

export const getExercisesOptionsState = (store) => store.exercises;

export const getAllExercisesOptions = (store) => {
  return getExercisesOptionsState(store)
    ? getExercisesOptionsState(store).exercisesOptions
    : [];
};
