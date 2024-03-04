export interface ISwitchComponentProps {
  mode: string;
  setMode?: (type: string) => void;
}

export interface ITimerComponentProps {
  time?: number;
  intervalIdRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICountdownComponentProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  // intervalIdRef?: React.MutableRefObject<NodeJS.Timeout | undefined>;
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