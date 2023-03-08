import React, { useEffect } from "react";
import moment from "moment";
import { TYPE_OF_TIMER } from "../../utilities/utils";

const countDownDate = moment().endOf("day");
function Timer({ type = TYPE_OF_TIMER.DATE_AND_TIME }) {
  const [time, setTime] = React.useState();

  const getTimerFormat = (type) => {
    switch (type) {
      case TYPE_OF_TIMER.ONLY_TIME:
        return "HH:mm:ss";
      case TYPE_OF_TIMER.ONLY_DATE:
        return "DD-MM-YYYY";
      case TYPE_OF_TIMER.DATE_AND_TIME:
        return "DD-MM-YYYY HH:mm:ss";
      default:
        return "DD-MM-YYYY HH:mm:ss";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds = countDownDate.diff(moment(), "seconds");
      const duration = moment.duration(seconds, "seconds");
      const formatted = moment
        .utc(duration.as("milliseconds"))
        .format(getTimerFormat(type));
      setTime(formatted);
    }, 1000);
    return () => clearInterval(interval);
  }, [type]);
  return <span className="text-white">{time}</span>;
}

export default Timer;
