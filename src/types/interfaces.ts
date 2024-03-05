export interface ISwitchComponentProps {
  mode: string;
  setMode?: (type: string) => void;
  setIsStarted?: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerSeconds?: React.Dispatch<React.SetStateAction<number>>;
  setCountSeconds?: React.Dispatch<React.SetStateAction<number>>;
  countSeconds?: number;
}

export interface ITimerComponentProps {
  intervalIdRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  timerSeconds: number;
  setTimerSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICountdownComponentProps extends Pick<ITimerComponentProps, 'isStarted' | 'setIsStarted'> {
  // setTime: React.Dispatch<React.SetStateAction<number>>;
  countSeconds: number;
  setCountSeconds: React.Dispatch<React.SetStateAction<number>>;
  countIntervalRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
}

export interface ICircularProgressProps extends Partial<ITimerComponentProps>, Partial<ICountdownComponentProps> {}

export interface IButtonProps {
  title?: string;
  color?: string;
  bcg?: string;
  bcg1?: string;
  bcg2?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export interface IInnerWrapperBlockStylesProps {

}