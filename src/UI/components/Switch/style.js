import styled from "styled-components";

/* Definindo valores padrões de props */
const color = ({ color }) => color ? color : 'red';
const fontSize = ({ fontSize }) => fontSize ? fontSize : '16px';

/* Definindo valores padrões de switch case com props */
const sizeSwitch = ({ size }) => {
  switch (size) {
    case "small":
      return `
        width: 24px;
        height: 14px;
      `;
    case "medium":
      return `
        width: 32px;
        height: 16px;
      `;
    case "large":
      return `
        width: 38px;
        height: 18px;
      `;
  }
}

/* Definindo valores padrões de switch case com props */
const sizeInput = ({ size }) => {
  switch (size) {
    case "small":
      return `
        transform: translate(10px, -50%);
      `;
    case "medium":
      return `
        transform: translate(18px, -50%);
      `;
    case "large":
      return `
        transform: translate(24px, -50%);
      `;
  }
}

export const Container = styled.div`
  display: flex;
  margin: 5px 0px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const Switch = styled.div`
  position: relative;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  /* Efeito de transição ao clicar no Switch */
  transition: 300ms all;
  /* Define altura e largura predefinida do switch case */
  ${sizeSwitch};

  /* Adicionando elemento de estilização do botão Switch */
  &:before {
  /* Efeito de transição ao clicar no Switch */
    transition: 300ms all;

    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + ${Switch} {
    background: ${color};
    
    &:before {
       /* Define posição do ponto interno do switch conforme o size definido */
      ${sizeInput};
    }
  }
`

export const Span = styled.span`
  font-size: ${fontSize};
  color: ${({ colorText }) => colorText ? colorText : 'black'};
`