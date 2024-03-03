import { IButtonProps } from "../../types/interfaces";
import { ControlButtonStyles } from "./ControlButton.styles";


export default function ControlButton({...props}: IButtonProps) {
  return (
    <ControlButtonStyles className={props.className} onClick={props.onClick} disabled={props.disabled}>
      <div>
        <div>
          {props.title}
        </div>
      </div>
    </ControlButtonStyles>
  )
}