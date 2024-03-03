export interface ISwitchComponentProps {
  mode: string;
  setMode?: (type: string) => void;
}

export interface ITimerComponentProps {
  time: number;
  setTime?: (type: number) => void;
  intervalRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
}

export interface IButtonProps {
  title?: string;
  color?: string;
  bcg?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}