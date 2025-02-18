function calculateWatchTime( times ) {
  let timeSum = 0;
  for(const time of times){
    if(typeof (time) !== "number"){
      return "Invalid";
    }
    timeSum += time;
  };
  const hour = parseInt(timeSum / 3600);
  const hourRemainder = timeSum % 3600;
  const minute = parseInt(hourRemainder / 60);
  const minuteRemainder = hourRemainder % 60;
  const watchTime = {
    hour : hour,
    minute : minute,
    second : minuteRemainder
  };
  return watchTime;
};


