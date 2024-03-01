export interface ISwitchComponentProps {
  mode: string;
  setMode?: (type: string) => void;
}

export interface ITimerComponentProps {
  time: number;
  setTime?: (type: number) => void;
}

export interface IButtonProps {
  title?: string;
  color?: string;
  bcg?: string;
  className?: string;
}