import { IButtonProps } from "../../types/interfaces";
import { ControlButtonStyles } from "./ControlButton.styles";


export default function ControlButton({...props}: IButtonProps) {
  return (
    <ControlButtonStyles className={props.className}>
      <div>
        <div>
          {props.title}
        </div>
      </div>
    </ControlButtonStyles>
  )
}