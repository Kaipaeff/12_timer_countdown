import { styled } from "styled-components";

export const CircularProgressbarStyles = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 20px;
`

export const ProgressbarMainValueStyles = styled(CircularProgressbarStyles)`
  position: absolute;
  top: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 26px;
  font-size: 20px;
  color: #7B7B7B;
  background-color: #E3E3E3;
  border-radius: 8px;
`