import styled from 'styled-components';

export const DivButton = styled.button`
  display: flex;
  width: ${({ small }) => small ? '40px' : '182px'};
  height: ${({ small }) => small ? '40px' : '52px'};
  background: ${({ background }) => background};
  margin: 10px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  text-decoration: none;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ rounded }) => rounded ? '100px' : '0px'};
  &[disabled] {
    opacity: 40%;
  }
  &:hover{
    opacity: 0.8;
  }
`

export const LabelText = styled.a`
  display: ${({ imageSrc }) => imageSrc == '' ? 'flex' : 'none'};
  color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-weight: 700;
  font-family: 'Calibri';
  line-height: 23px;
  text-decoration: none;
`;

export const LabelImage = styled.img`
  display: ${({ imageSrc }) => imageSrc == '' ? 'none' : 'flex'};
  max-width: 100%;
  margin: auto;
`;