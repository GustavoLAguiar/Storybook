import styled from "styled-components";

/* Definindo valores padrões de props */
const color = ({ color }) => color ? color : 'red';
const fontSize = ({ fontSize }) => fontSize ? fontSize : '18px';
const colorHover = ({ colorHover }) => colorHover ? colorHover : '0 0 0 0.5em rgb(236, 73, 144, 0.2)';

/* Definindo valores padrões de switch case com props */
const size = ({ size }) => {
  switch (size) {
    case "small":
      return `
        width: 10px;
        height: 10px;
      `;
    case "medium":
      return `
        width: 20px;
        height: 20px;
      `;
    case "large":
      return `
        width: 30px;
        height: 30px;
      `;
  }
}

export const DivCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
`

export const CheckboxButton = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  &[disabled]{
    opacity: 0.5;
  }
`

export const CheckboxStyled = styled.label`
  /* width: 20px;
  height: 20px; */
  ${size}
  margin-right: 8px;

  border: 2px solid ${({ checked }) => checked ? color : 'gray'};
  border-radius: 20%;

  background: ${({ checked }) => checked ? color : 'white'};

  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled]{
    opacity: 0.5;
  }
  &:hover{
    box-shadow: ${colorHover};
  }
`

export const CheckboxIcon = styled.img`
  width: 70%;
  display: ${({ checked }) => checked ? 'flex' : 'none'};
  user-select: none;
  &[disabled]{
    opacity: 0.5;
  }
`

export const CheckboxText = styled.label`
  font-size: ${fontSize};
`