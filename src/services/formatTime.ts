export const formatTimerTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60_000);
  const seconds = Math.floor((totalSeconds % 60_000) / 1000);
  const milliseconds = Math.floor((totalSeconds % 1000) / 10);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

export const formatCountDownTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60_000);
  const seconds = Math.floor((totalSeconds % 60_000) / 1000);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
