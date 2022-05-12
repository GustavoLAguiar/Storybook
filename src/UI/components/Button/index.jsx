import React from "react";
import { LabelText, LabelImage, DivButton } from "./styles";
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { text, hrefTo, targetBlank, disabled, imageSrc } = props;

  return (
    <DivButton {...props} target={targetBlank ? "_blank" : "_parent"} disabled={disabled}>
      <LabelText {...props} href={hrefTo}>{text}</LabelText>
      <LabelImage {...props} src={imageSrc} />
    </DivButton >
  )
}

Button.propTypes = {
  /** Texto do botão */
  text: PropTypes.string,
  /** Cor do botão */
  background: PropTypes.string,
  /** Cor do texto dentro do botão */
  color: PropTypes.string,
  /** Adicionar link para direcionar o botão ao ser clicado */
  hrefTo: PropTypes.string,
  /** Ativar ou desativar abertura do link em uma nova aba */
  targetBlank: PropTypes.bool,
  /** Ativar ou desativar botão com bordas arredondadas */
  rounded: PropTypes.bool,
  /** Ativar ou desativar variação de botão disabled */
  disabled: PropTypes.bool,
  /** Definir cor da borda do botão */
  borderColor: PropTypes.string,
  /** Adicionar imagem ao botão */
  imageSrc: PropTypes.string,
  /** Definir o botão para tamanho pequeno */
  small: PropTypes.bool,
}

Button.defaultProps = {
  text: 'Adicionar',
  background: 'white',
  color: 'black',
  hrefTo: '/#',
  targetBlank: false,
  rounded: true,
  disabled: false,
  imageSrc: '',
  small: false,
}