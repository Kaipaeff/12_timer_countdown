export interface ISwitchComponentProps {
  mode: string;
  setMode?: (type: string) => void;
  setIsStarted?: React.Dispatch<React.SetStateAction<boolean>>;
  setTimerSeconds?: React.Dispatch<React.SetStateAction<number>>;
  setCountSeconds?: React.Dispatch<React.SetStateAction<number>>;
  countSeconds?: number;
}

export interface ITimerComponentProps {
  timerIntervalIdRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  timerSeconds: number;
  setTimerSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICountdownComponentProps extends Pick<ITimerComponentProps, 'isStarted' | 'setIsStarted'> {
  countSeconds: number;
  setCountSeconds: React.Dispatch<React.SetStateAction<number>>;
  countIntervalIdRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
  barMaxValue: number;
  setBarMaxValue: React.Dispatch<React.SetStateAction<number>>;
  // barMaxValueUpdate?: ((newValue: (prev: number) => number) => void) | undefined;
  // initialBarMaxValue?: number | null;
  // setInitialBarMaxValue?: React.Dispatch<React.SetStateAction<number>>;
}

export interface ISetTimeComponentProps extends Pick<ICountdownComponentProps, 'countSeconds' | 'setCountSeconds' | 'isStarted' | 'countIntervalIdRef' | 'setBarMaxValue'> {}

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