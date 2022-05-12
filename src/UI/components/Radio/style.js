import styled from "styled-components";

// Props com valores padrões pré-definidos
const color = ({ color }) => color ? color : 'red';
const fontSize = ({ fontSize }) => fontSize ? fontSize : '18px';
const colorHover = ({ colorHover }) => colorHover ? colorHover : '0 0 0 0.5em rgb(236, 73, 144, 0.2)';

export const DivRadio = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px 10px;
`

export const RadioButton = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  margin-right: 5px;
  font: inherit;
  color: ${color};
  width: 1.20em;
  height: 1.20em;
  border: 0.15em solid ${color};
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &:checked::before{
    transform: scale(1);
  }
  &:hover{
    box-shadow: ${colorHover};
  }
  &::before{
    content: "";
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${color};
  }
`

export const RadioText = styled.label`
  font-size: ${fontSize};
`