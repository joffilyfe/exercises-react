const deserializeExercise = (exercise) => {
  return { ...exercise, date: new Date(exercise.date) };
};

export const loadState = () => {
  try {
    const loadedState = localStorage.getItem("workoutlog");
    if (loadedState === null) {
      return undefined;
    }
    const state = JSON.parse(loadedState);
    const deserializedExercises = state.exercises.exercises.map(
      deserializeExercise
    );
    return { ...state, exercises: { exercises: deserializedExercises } };
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem("workoutlog", JSON.stringify(state));
  } catch (err) {
    console.error(
      `Could not save the state into the localStorage, The following exceptions was raised ${err}`
    );
  }
};
