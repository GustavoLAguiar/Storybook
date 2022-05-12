import React from 'react';

import { Checkbox } from '../UI/components/Checkbox';

export default {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  argTypes: {
    color: { control: 'color' },
  },
};

// Criação do template padrão
const Template = (args) => <Checkbox {...args} />;

// Criação do template em exibição múltipla
const TemplateCustomize = (args) => (
  <div>
    <h1>Visualização de checkout com múltiplas opções</h1>
    <Checkbox {...args} />
    <Checkbox {...args} />
    <Checkbox {...args} />
  </div>
);

// Utilização default do componente
export const Default = Template.bind({});
Default.args = {
  label: 'Input Checkbox',
  color: 'red'
};

// Componente em exibição múltipla
export const MultipleCheckbox = TemplateCustomize.bind({});
MultipleCheckbox.args = {
  label: 'Multiple Input Checkbox',
  fontSize: '20px',
  color: 'red'
};