import styled from 'styled-components';

export const Button = styled.a`
 display: block;
margin: 10px 0;
pointer-events: visible;
cursor: pointer;
background: #a16695;
border-radius: 7px;
max-width: 85%;
color: #fff !important;
padding: 10px 10px;
text-decoration: none;
touch-action: manipulation;
`;

export const Label = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7em;
  text-align: justify;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  margin: 3px !important;
  color: #a16695;
  border: 1px dashed currentColor;
  background-color: transparent;
  font-size: 20px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: #a16695aa;
  }
`;

export const TextArea = styled.textarea.attrs(() => ({
  rows: 3,
}))`
  margin: 3px !important;
  color: #a16695;
  border: 1px dashed currentColor;
  background-color: transparent;
  font-size: 20px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: #a16695aa;
  }
`;

export const Select = styled.select.attrs((props) => ({
  type: props.type,
}))`
  margin: 3px !important;
  color: #a16695;
  border: 1px dashed currentColor;
  background-color: transparent;
  font-size: 20px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    color: #a16695aa;
  }
`;

export const Option = styled.option`
  margin: 3px !important;
  color: #a16695;
  border: 1px dashed currentColor;
  background-color: transparent;
  font-size: 20px;
  border-radius: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100%;
  font-family: ${(props) => props.value};
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  margin: ${({ margin }) => margin};
  @media (max-width: 800px) {
    display: block;
  }
`;
