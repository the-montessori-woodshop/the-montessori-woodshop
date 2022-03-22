const placeholder = "-- --";

const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const longDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export type dateFormatTypes =
  | "shortDate"
  | "date"
  | "longDate"
  | "time"
  | "shortDateAndTime"
  | "dateAndTime"
  | "longDateAndTime"
  | "downloadTimeStamp";

type DateFn = (date: Date) => string;

/**
 * M/DD/YY
 *
 * @example
 * 6/17/20
 */
export const shortDate: DateFn = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear().toString().substr(2, 4);
  return `${month}/${day}/${year}`;
};

/**
 * M/DD/YY and an abbreviated day of the week
 *
 * @returns
 * `Thu, 6/17/20`
 */
export const date: DateFn = (date) => {
  return `${shortDays[date.getDay()]}, ${shortDate(date)}`;
};

/**
 * M/DD/YY and an abbreviated day of the week
 *
 * @returns
 * `Thursday, 6/17/20`
 */
export const longDate: DateFn = (date) => {
  return `${longDays[date.getDay()]}, ${shortDate(date)}`;
};

/**
 * 12 Hour time with Morning / Evening indicator
 *
 * @returns
 * `9:42 AM`
 */
export const time: DateFn = (date) => {
  const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedTime;
};

/**
 * Date and Time (no day of the week)
 *
 * @returns
 * `6/17/20 9:42 AM`
 */
export const shortDateAndTime: DateFn = (date) => {
  return `${shortDate(date)} ${time(date)}`;
};

/**
 * Day of the week, date, and time
 *
 *
 * @returns
 * `Thu, 6/17/20 9:42 AM`
 */
export const dateAndTime: DateFn = (dateParam) => {
  return `${date(dateParam)} ${time(dateParam)}`;
};

/**
 * Day of the week, date, and time
 *
 *
 * @returns
 * `Thursday, 6/17/20 9:42 AM`
 */
export const longDateAndTime: DateFn = (dateParam) => {
  return `${longDate(dateParam)} ${time(dateParam)}`;
};

/**
 * Time stamp for downloaded files
 *
 * @returns
 * `2021_02_21`
 */
export const downloadTimeStamp: DateFn = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const dayFormatted = day < 10 ? `0${day}` : day;
  const monthFormatted = month < 10 ? `0${month}` : month;
  return `${year}_${monthFormatted}_${dayFormatted}`;
};

const dateFnMap: {
  [key in dateFormatTypes]: DateFn;
} = {
  shortDate,
  date,
  longDate,
  time,
  shortDateAndTime,
  dateAndTime,
  longDateAndTime,
  downloadTimeStamp,
};

const isDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * A centralized light weight utility to format dates
 */
export const dateFactory = (
  dateStringOrDate: string | Date,
  type: dateFormatTypes
) => {
  if (typeof dateStringOrDate === "string") {
    const parsedDate = new Date(dateStringOrDate);
    if (isDate(parsedDate)) {
      return dateFnMap[type](parsedDate);
    }
    return "Unknown Date";
  }

  if (!dateStringOrDate) {
    return placeholder;
  }

  return dateFnMap[type](dateStringOrDate);
};
