export const getExercisesOptionsState = (store) => store.exercises;

export const getAllExercisesOptions = (store) => {
  return getExercisesOptionsState(store)
    ? getExercisesOptionsState(store).exercisesOptions
    : [];
};
