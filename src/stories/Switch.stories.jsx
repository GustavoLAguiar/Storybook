import React from 'react';
import { Switch } from '../UI/components/Switch';

export default {
  title: 'Componentes/Switch',
  component: Switch,
  argTypes: {
    color: { control: 'color' },
  },
};

// Criação do template padrão
const Template = (args) => <Switch {...args} />;

// Criação do template em exibição múltipla
const TemplateMultiple = (args) => (
  <div>
    <Switch {...args} />
    <Switch {...args} />
    <Switch {...args} />
  </div>
);

// Configurações padrão do componente
export const Default = Template.bind({});
Default.args = {
  label: 'Input Switch',
  color: 'red',
  colorText: 'black',
};

// Componente em exibição múltipla
export const MultipleSwitch = TemplateMultiple.bind({});
MultipleSwitch.args = {
  label: 'Input Switch',
  color: 'blue',
  fontSize: '16px'
};
