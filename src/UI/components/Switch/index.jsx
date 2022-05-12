import React, { useState } from 'react';
import * as Styles from './style';
import PropTypes from 'prop-types';

// Componente Switch
export const Switch = (props) => {
  const { name, value, label, className } = props;
  const [checked, setChecked] = useState(false);

  /* Função para definir o switch ativado ou desativado */
  const handleChange = () => {
    setChecked(!checked);
  }

  return (
    <Styles.Container className={className}>
      <Styles.Label>
        <Styles.Input {...props}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <Styles.Switch {...props} />
        <Styles.Span {...props}>{label}</Styles.Span>
      </Styles.Label>
    </Styles.Container>
  )
}

Switch.propTypes = {
  /**
   * Nome do radio
   */
  name: PropTypes.string.isRequired,
  /**
   * Valor do radio
   */
  value: PropTypes.string.isRequired,
  /**
   * Cor do switch
   */
  color: PropTypes.string,
  /**
   * Label do switch
   */
  label: PropTypes.string,
  /**
 * Definir cor do label
 */
  colorText: PropTypes.string,
  /**
   * Tamanho do switch
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Tamanho da fonte da label {Em px}
   */
  fontSize: PropTypes.string,
  /**
 * Adicionar classe personalizada no componente
 */
  className: PropTypes.string,
};

/* Define valor padrão inicial do componente */
Switch.defaultProps = {
  name: "primary",
  value: "primary",
  size: "medium",
}