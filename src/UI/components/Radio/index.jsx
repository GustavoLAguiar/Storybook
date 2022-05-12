import React from 'react'
import { DivRadio, RadioButton, RadioText } from './style';

import PropTypes from 'prop-types';

// Componente Radio
export const Radio = (props) => {
  // Parametros do componente
  const { name, value, label, className } = props;

  // Função para retornar valor do clique
  const handleSelectRadio = (event) => {
    return event.target.value;
  }

  return (
    <DivRadio className={className}>
      <RadioButton {...props}
        type="radio"
        name={name}
        value={value}
        onClick={(event) => handleSelectRadio(event)}
      />
      <RadioText>{label}</RadioText>
    </DivRadio>
  )
}

Radio.propTypes = {
  /**
   * Nome do radio
   */
  name: PropTypes.string.isRequired,
  /**
   * Valor do radio
   */
  value: PropTypes.string.isRequired,
  /**
   * Texto label do radio
   */
  label: PropTypes.string,
  /**
   * Cor do radio
   */
  color: PropTypes.string,
  /**
 * Cor do hover do radio
 */
  colorHover: PropTypes.string,
  /**
  * Tamanho da fonte do texto
  */
  fontSize: PropTypes.string,
  /**
* Adicionar classe personalizada no componente
*/
  className: PropTypes.string,
};

/* Define valor padrão inicial do componente */
Radio.defaultProps = {
  name: "primary",
  value: "primary",
}