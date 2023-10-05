import { useEffect, useState } from 'react';

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

/***
 * @param targetDate(1689411360303) // timestamp
 * Logic:
 *  - Get the time type from the target date
 *  - Set the interval 1000ms for counting time
 *
 * Expected: Time Reminder include day . hours,minutes and seconds
 */
const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);
  /*  console.log(getReturnValues(countDown)); */
  return getReturnValues(countDown);
};

export { useCountdown };
