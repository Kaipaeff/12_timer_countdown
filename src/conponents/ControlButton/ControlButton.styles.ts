import { styled } from "styled-components";
import { IButtonProps } from "../../types/interfaces";
import ControlButton from "./ControlButton";

export const ControlButtonStyles = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.bcg || "#fff"};
  color: ${props => props.color || "#000"};
  font-size: 18px;

  &:disabled {
    opacity: 0.8;
    color: #626262;
    pointer-events: none;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    background-color: ${props => props.bcg1 || "#000000"};

    border-radius: 50px;
    border: none;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 84px;
      height: 84px;
      background-color: ${props => props.bcg2 || "#fff"};
      border-radius: 50px;
      border: none;
      cursor: pointer;
      box-shadow: 0px 0px 8px 2px rgba(0,62,0,0.3);        

      &:active {
        background-color: #0A4A1B;
        box-shadow: none;
      }
    }
  }
`

export const StartControlButtonStyles = styled(ControlButton)<IButtonProps>`
  background-color: ${props => props.bcg || "#082A11"};
  color: ${props => props.color || "#2ED158"};

  & div {
    background-color: ${props => props.bcg1 || "#000000"};

    & div {
      background-color: ${props => props.bcg2 || "#082A11"};

      &:active {
        background-color: #0A4A1B;
        box-shadow: none;
        }
    }
`

export const StopControlButtonStyles = styled(ControlButton)<IButtonProps>`
  background-color: ${props => props.bcg || "#320E0B"};
  color: ${props => props.color || "#FF453A"};

  & div {
    background-color: ${props => props.bcg1 || "#000000"};

    & div {
      background-color: ${props => props.bcg2 || "#320E0B"};

      &:active {
        background-color: #5B1812;
        box-shadow: none;
        }
    }
`

export const CancelControlButtonStyles = styled(ControlButton)<IButtonProps>`
  color: ${props => props.color || "#fff"};
  background-color: ${props => props.bcg || "#303030"};

  & div {
    background-color: ${props => props.bcg1 || "#000000"};

    & div {
      background-color: ${props => props.bcg2 || "#303030"};

      &:active {
        background-color: #454546;
        box-shadow: none;
        }
    }
`

export const PauseControlButtonStyles = styled(ControlButton)<IButtonProps>`
  color: ${props => props.color || "#FE9F06"};
  background-color: ${props => props.bcg || "#331F02"};

  & div {
    background-color: ${props => props.bcg1 || "#000000"};

    & div {
      background-color: ${props => props.bcg2 || "#331F02"};

      &:active {
        background-color: #633C04;
        box-shadow: none;
        }
    }
`