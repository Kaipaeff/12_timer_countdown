import { IButtonProps } from '../../types/interfaces';
import { ControlButtonStyles } from './ControlButton.styles';

export default function ControlButton({ ...props }: IButtonProps) {
  const { className, onClick, disabled, title } = props;

  return (
    <ControlButtonStyles className={className} onClick={onClick} disabled={disabled}>
      <div>
        <div>{title}</div>
      </div>
    </ControlButtonStyles>
  );
}
