export const formatTimerTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60_000);
  const seconds = Math.floor((totalSeconds % 60_000) / 1000);
  const milliseconds = Math.floor((totalSeconds % 1000) / 10);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMilliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

export const formatCountDownTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
}
