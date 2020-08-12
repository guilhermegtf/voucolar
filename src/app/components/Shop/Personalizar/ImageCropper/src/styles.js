import styled from 'styled-components';

export const Button = styled.button`
  margin: 3px !important;
  color: #a16695;
  border: 2px solid currentColor;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  padding: 3px 7px;
`;

export const Phone = styled.div`
  background-image: url(${({ image }) => image()});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 239px;
  height: 468px;
  min-width: 239px;
  min-height: 468px;
  pointer-events: ${({ touch }) => (touch ? 'none' : 'all')};
`;

export const PhoneMask = styled(Phone)`
  z-index: 100;
  position: absolute;
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin};
`;

export const Main = styled(Container)`
  @media (max-width: 800px) {
    display: block;
  }
`;
