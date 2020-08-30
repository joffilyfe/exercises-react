import {
  splitAndCalculateTime,
  formatTimeToString,
  parseTimeString,
  validateExerciseForm,
  humanizeSeconds,
} from "./index";

describe("The splitAndCalculateTime function", () => {
  test("should return the string time splited as array and the items should be converted to number", () => {
    let result = splitAndCalculateTime("00:00:00");
    expect(result).toStrictEqual([0, 0, 0]);
  });

  test("should converts 70 seconds to 1 minute and 10 seconds", () => {
    let result = splitAndCalculateTime("00:00:70");
    expect(result).toStrictEqual([0, 1, 10]);
  });

  test("should converts 99 minutes to 1 hour and 39 minutes", () => {
    let result = splitAndCalculateTime("00:99:00");
    expect(result).toStrictEqual([1, 39, 0]);
  });

  test("should converts 01:99:99 to 02:40:39", () => {
    let result = splitAndCalculateTime("01:99:99");
    expect(result).toStrictEqual([2, 40, 39]);
  });
});

describe("The formatTimeToString function", () => {
  test("should formats 1 hour, 2 minutes and 3 seconds to 01:02:03", () => {
    let result = formatTimeToString(1, 2, 3);
    expect(result).toBe("01:02:03");
  });

  test("should formats 0 hour, 10 minutes and 30 seconds to 00:10:30", () => {
    let result = formatTimeToString(0, 10, 30);
    expect(result).toBe("00:10:30");
  });
});

describe("The parseTimeString function", () => {
  test("should return the string time and the seconds number of the time", () => {
    let { timeString, seconds } = parseTimeString("00:01:00");
    expect(timeString).toBe("00:01:00");
    expect(seconds).toBe(60);
  });

  test("should convert 00:70:00 to 01:10:00 string and return x seconds", () => {
    let { timeString, seconds } = parseTimeString("00:70:00");
    expect(timeString).toBe("01:10:00");
    expect(seconds).toBe(4200);
  });
});

describe("The validateExerciseForm function", () => {
  test("should return if any erro are detected during the validation", () => {
    let { errors, isValid } = validateExerciseForm({
      exercise: { seconds: 0 },
      exercisesOptions: [],
    });
    expect(isValid).toBe(false);
    expect(errors.seconds).toBe("Please inform a time");
  });

  test("should haven't a seconds error if it was provided and greater than 0", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: "run" },
      exercisesOptions: ["run"],
    });
    expect(errors.seconds).toBe(null);
  });

  test("should return invalid if the seconds field is empty", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: "run" },
      exercisesOptions: ["run"],
    });
    expect(errors.seconds).toBe(null);
  });

  test("should haven't an exercise type error if a type was provided and the type is in the type list", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: "run" },
      exercisesOptions: ["run"],
    });
    expect(errors.type).toBe(null);
  });

  test("should return an exercise type error if a type was provided but the type isn't in the type list", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: "run" },
      exercisesOptions: ["other type"],
    });
    expect(errors.type).toBe("Please select an exercise");
  });

  test("should return a type error if the selectd field is empty", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: null },
      exercisesOptions: ["run"],
    });
    expect(errors.type).toBe("Please select an exercise");
  });

  test("should return a date error if the date field is empty", () => {
    let { errors } = validateExerciseForm({
      exercise: { seconds: 1, date: null, type: "run" },
      exercisesOptions: ["run"],
    });
    expect(errors.date).toBe("Please select a date");
  });

  test("should return a isValid equals to true if none error was found", () => {
    let { isValid } = validateExerciseForm({
      exercise: { seconds: 1, date: new Date(), type: "run" },
      exercisesOptions: ["run"],
    });
    expect(isValid).toBe(true);
  });
});

describe("The humanizeSeconds funnction", () => {
  test("should converts 3600 seconds to 1 hour", () => {
    expect(humanizeSeconds(3600)).toBe("1 hour");
  });

  test("should converts 1800 seconds to 30 minutes", () => {
    expect(humanizeSeconds(1800)).toBe("30 minutes");
  });

  test("should converts 86400 seconds to 1 day", () => {
    expect(humanizeSeconds(86400)).toBe("1 day");
  });

  test("should converts 10 seconds to 10 seconds", () => {
    expect(humanizeSeconds(10)).toBe("10 seconds");
  });

  test("should converts 60 seconds to 1 minute", () => {
    expect(humanizeSeconds(60)).toBe("1 minute");
  });
});