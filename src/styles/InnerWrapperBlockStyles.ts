import { styled } from "styled-components";
import { IInnerWrapperBlockStylesProps } from "../types/interfaces";

export const InnerWrapperBlockStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 410px;
`

export const SetTimeInnerWrapperBlockStyles = styled(InnerWrapperBlockStyles)<IInnerWrapperBlockStylesProps>`
  width: 260px;
  margin-bottom: 8px;
`
