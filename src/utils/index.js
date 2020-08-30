import { intervalToDuration } from "date-fns";
import formatDuration from "date-fns/formatDuration";

const TIME_GROUPS_REGEX = /(\d{2}):(\d{2}):(\d{2})/;

/**
 * Uses a string as time format to verify if it need some work to normalize
 * minutes and seconds groups. For exemple if it gets a string like
 * `00:70:00` it should return an array like [1, 10, 0] thats represents
 * hours, minutes and seconds respectively.
 *
 * @param {string} time
 * @return {array}
 */
const splitAndCalculateTime = (time) => {
  let [, hours, minutes, seconds] = time.match(TIME_GROUPS_REGEX);

  hours = parseInt(hours);
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);

  let newSeconds = seconds % 60;
  let newMinutes = Math.floor(seconds / 60) + (minutes % 60);
  let newHours = Math.floor(minutes / 60) + hours;

  return [newHours, newMinutes, newSeconds];
};

/**
 * Merges the time parts to an unique string using the format `hh:mm:ss`.
 * @param {int} hours
 * @param {int} minutes
 * @param {int} seconds
 * @return {string}
 */
const formatTimeToString = (hours, minutes, seconds) => {
  return [hours, minutes, seconds]
    .reduce((string, entry) => {
      return string + entry.toString().padStart(2, "0") + ":";
    }, "")
    .slice(0, 8);
};

/**
 * This funtion uses a string in time format like `hh:mm:ss` to
 * make sure it does not contain things like `00:70:00`. If a strange
 * time was used it tries to convert it. Using the example above we must
 * got the time formated as 01:10:00.
 *
 * A trick exists in this function, the maximum hours used here is 99, it
 * can't affoard 100 hours for example, this is limited because of the mask
 * used in the component.
 *
 * @param {string} time
 * @return {Object}
 */
const parseTimeString = (time) => {
  let [hours, minutes, seconds] = splitAndCalculateTime(time);

  if (hours > 99) {
    hours = 99;
  }

  let timeString = formatTimeToString(hours, minutes, seconds);
  let timeInSeconds = hours * 60 * 60 + minutes * 60 + seconds;

  return { timeString: timeString, seconds: timeInSeconds };
};

const validateExerciseForm = ({ exercise, exercisesOptions }) => {
  let errors = {
    seconds: null,
    type: null,
    date: null,
  };

  if (exercise?.seconds === 0 || exercise?.seconds === undefined) {
    errors.seconds = "Please inform a time";
  } else {
    errors.seconds = null;
  }

  if (!exercisesOptions?.includes(exercise?.type)) {
    errors.type = "Please select an exercise";
  } else {
    errors.type = null;
  }

  if (exercise?.date == null || exercise?.date?.length === 0) {
    errors.date = "Please select a date";
  } else {
    errors.date = null;
  }

  let isValid =
    Object.values(errors).filter((value) => value !== null).length === 0;

  return { errors, isValid: isValid };
};

/**
 * Converts the seconds number into a readable human string like '1 hour' or
 * '32 minutes and 6 seconds'.
 *
 * It uses the date-fns library.
 * @param {int} seconds
 */
const humanizeSeconds = (seconds) => {
  const durations = intervalToDuration({ start: 0, end: seconds * 1000 });
  const humanized = formatDuration(durations);
  return humanized ? humanized : "0 hour";
};

export {
  splitAndCalculateTime,
  formatTimeToString,
  parseTimeString,
  validateExerciseForm,
  humanizeSeconds,
};
