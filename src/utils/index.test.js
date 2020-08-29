import {
  splitAndCalculateTime,
  formatTimeToString,
  parseTimeString,
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
