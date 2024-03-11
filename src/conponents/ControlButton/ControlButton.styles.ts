import { styled } from "styled-components";

import { IButtonProps } from "../../types/interfaces";
import ControlButton from "./ControlButton";
import {white, black, grey, mediumGrey, deepGrey, green, neonGreen, deepGreen, brown, lightBrown, deepBrown, darkBrown, orange, neonRed} from "../../styles/Colors";

export const ControlButtonStyles = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  background-color: ${({backgroundColor}) => backgroundColor || white};
  color: ${({color}) => color || black};
  font-size: 18px;

  &:disabled {
    opacity: 0.8;
    color: ${grey};
    pointer-events: none;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    background-color: ${({backgroundColor1}) => backgroundColor1 || black};

    border-radius: 50px;
    border: none;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 84px;
      height: 84px;
      background-color: ${({backgroundColor2}) => backgroundColor2 || white};
      border-radius: 50px;
      border: none;
      cursor: pointer;       

      &:active {
        background-color: ${green};
      }
    }
  }
`

export const StartControlButtonStyles = styled(ControlButton)<IButtonProps>`
  background-color: ${({backgroundColor}) => backgroundColor || deepGreen};
  color: ${({color}) => color || neonGreen};

  & div {
    background-color: ${({backgroundColor1}) => backgroundColor1 || black};

    & div {
      background-color: ${({backgroundColor2}) => backgroundColor2 || deepGreen};

      &:active {
        background-color: ${green};
      }
    }
  }
`

export const StopControlButtonStyles = styled(ControlButton)<IButtonProps>`
  background-color: ${({backgroundColor}) => backgroundColor || deepBrown};
  color: ${({color}) => color || neonRed};

  & div {
    background-color: ${({backgroundColor1}) => backgroundColor1 || black};

    & div {
      background-color: ${({backgroundColor2}) => backgroundColor2 || deepBrown};

      &:active {
        background-color: ${brown};
      }
    }
  }
`

export const CancelControlButtonStyles = styled(ControlButton)<IButtonProps>`
  color: ${({color}) => color || white};
  background-color: ${({backgroundColor}) => backgroundColor || deepGrey};

  & div {
    background-color: ${({backgroundColor1}) => backgroundColor1 || black};

    & div {
      background-color: ${({backgroundColor2}) => backgroundColor2 || deepGrey};

      &:active {
        background-color: ${mediumGrey};
      }
    }
  }
`

export const PauseControlButtonStyles = styled(ControlButton)<IButtonProps>`
  color: ${({color}) => color || orange};
  background-color: ${({backgroundColor}) => backgroundColor || darkBrown};

  & div {
    background-color: ${({backgroundColor1}) => backgroundColor1 || black};

    & div {
      background-color: ${({backgroundColor2}) => backgroundColor2 || darkBrown};

      &:active {
        background-color: ${lightBrown};
      }
    }
  }
`