import { styled } from 'styled-components';
import { ISwitchComponentProps } from '../../types/interfaces';

export const SwitchBlockStyles = styled.section<ISwitchComponentProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 530px;
  height: 50px;
  margin-bottom: 40px;
  padding: 5px 34px 6px 73px;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  background-color: #fff;
  border-radius: 25px;
  outline: 1px solid rgba(0, 0, 0, 0.14);
`;

export const SwitchTimerStyles = styled.span<ISwitchComponentProps>`
  color: ${({ mode }) => (mode === 'timer' ? '#fff' : '#737373')};
  cursor: pointer;
  z-index: 3;
`;

export const SwitchCountdownStyles = styled.span<ISwitchComponentProps>`
  color: ${({ mode }) => (mode === 'countdown' ? '#fff' : '#737373')};
  cursor: pointer;
  z-index: 3;
`;

export const SwitchedModeStyles = styled.div<ISwitchComponentProps>`
  position: absolute;
  top: 0;
  left: ${({ mode }) => (mode === 'timer' ? '0' : '50%')};
  width: 265px;
  height: 50px;
  background: #fe9f06;
  border-radius: 25px;
  transition: left 0.4s ease;
`;
