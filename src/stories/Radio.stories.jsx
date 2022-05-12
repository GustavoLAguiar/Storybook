import React from 'react';
import { Radio } from '../UI/components/Radio';

export default {
  title: 'Componentes/Radio',
  component: Radio,
};

// Criação do template padrão
const Template = (args) => <Radio {...args} />;

// Criação do template em exibição múltipla
const TemplateRadio = (args) => (
  <div {...args}>
    <h1>Teste de funcionamento de um RadioButton</h1>
    <Radio {...args.botao1} />
    <Radio {...args.botao2} />
    <Radio {...args.botao3} />
  </div>
);

// Componente em exibição múltipla
export const MultipleRadio = TemplateRadio.bind({});
MultipleRadio.args = {
  botao1: {
    name: 'primary',
    value: 'banana',
    label: 'Banana',
    colorText: 'red',
  },
  botao2: {
    name: 'primary',
    value: 'maca',
    label: 'Maça',
  },
  botao3: {
    name: 'primary',
    value: 'laranja',
    label: 'Laranja',
  },
};

// Componente radio default
export const Default = Template.bind({});
Default.args = {
  name: 'primary',
  value: 'primary',
  label: 'Opção',
  color: 'black',
  fontSize: '18px',
};
