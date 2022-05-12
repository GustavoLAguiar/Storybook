import React, { useState } from 'react'
import { DivCheckbox, CheckboxButton, CheckboxText, CheckboxStyled, CheckboxIcon } from './style';

import PropTypes from 'prop-types';

import activeCheckbox from '../../../assets/icon/checkbox/activeCheckbox.svg';
import activeLineCheckbox from '../../../assets/icon/checkbox/lineActiveCheckbox.svg';


// Componente Checkbox
export const Checkbox = (props) => {
  const { name, value, label, className, lineIcon, disabled } = props;
  const [checked, setChecked] = useState(false);

  // Função para ativar e desativar checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
  }

  // Função para alternar o icone exibido dentro do checkbox
  const iconCheckbox = () => {
    return lineIcon ? activeLineCheckbox : activeCheckbox
  }

  return (
    <DivCheckbox className={className}>
      <CheckboxButton {...props}
        name={name}
        value={value}
        checked={!disabled ? checked : true}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <CheckboxStyled {...props}
        onClick={!disabled ? handleCheckboxChange : undefined}
        checked={!disabled ? checked : true}
        disabled={disabled}
      >
        <CheckboxIcon {...props}
          checked={!disabled ? checked : true}
          src={iconCheckbox()}
          disabled={disabled}
        />
      </CheckboxStyled>
      <CheckboxText checked={!disabled ? checked : true}>{label}</CheckboxText>
    </DivCheckbox>
  )
}

Checkbox.propTypes = {
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
   * Alterna o icone do checkbox
   */
  lineIcon: PropTypes.bool,
  /**
 * Ativa ou desativa o checkbox
 */
  disabled: PropTypes.bool,
  /**
 * Tamanho do switch
 */
  size: PropTypes.oneOf(["small", "medium", "large"]),
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

Checkbox.defaultProps = {
  lineIcon: false,
  disabled: false,
};

/* Define valor padrão inicial do componente */
Checkbox.defaultProps = {
  name: "primary",
  value: "primary",
  size: "medium",
}