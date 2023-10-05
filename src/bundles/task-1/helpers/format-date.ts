import { seconds } from "../types/types";

const formatLog = (time: seconds) => {
  const now = new Date();

  const dateNow =
    now.getHours() +
    ':' +
    String(now.getMinutes()).padStart(2, '0') +
    ':' +
    String(now.getSeconds()).padStart(2, '0');
  const dateWhenTimerStart =
    now.getHours() +
    ':' +
    String(now.getMinutes()).padStart(2, '0') +
    ':' +
    String(+String(now.getSeconds()).padStart(2, '0') - time).padStart(2, '0');

  return `№${time} ${dateNow} - ${dateWhenTimerStart}`;
};

export {formatLog}