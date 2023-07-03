const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInWeek * 52;

export default (seconds: number) => {
  const splittedTime = { years: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  splittedTime.years = Math.floor(seconds / secondsInYear);
  seconds -= splittedTime.years * secondsInYear;

  splittedTime.weeks = Math.floor(seconds / secondsInWeek);
  seconds -= splittedTime.weeks * secondsInWeek;

  splittedTime.days = Math.floor(seconds / secondsInDay);
  seconds -= splittedTime.days * secondsInDay;

  splittedTime.hours = Math.floor(seconds / secondsInHour);
  seconds -= splittedTime.hours * secondsInHour;

  splittedTime.minutes = Math.floor(seconds / secondsInMinute);
  seconds -= splittedTime.minutes * secondsInMinute;

  splittedTime.seconds = Math.floor(seconds);

  let formattedTime: string[] = [];

  for (const key in splittedTime) {
    if (splittedTime[key as keyof typeof splittedTime] > 0 || key === 'minutes' || key === 'seconds') {
      formattedTime.push(
        `${splittedTime[key as keyof typeof splittedTime]} ${
          splittedTime[key as keyof typeof splittedTime] === 1 ? key.substring(0, key.length - 1) : key
        }`
      );
    }
  }

  return formattedTime.join(' ');
};
