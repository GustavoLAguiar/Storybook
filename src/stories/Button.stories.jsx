import React from "react";
import { Button } from "../UI/components/Button";

// Pode ser utilizado para fins de teste
// import logoImage from '../assets/logo.png';

export default {
  title: 'Componentes/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Customize = Template.bind({});


Default.args = {
  text: 'Adicionar',
  background: 'white',
  color: 'black',
  borderColor: 'black',
};

Customize.args = {
  text: 'Adicionar',
  background: 'red',
  color: 'white',
  borderColor: 'red',
};