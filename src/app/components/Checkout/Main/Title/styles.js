import styled, { css } from 'styled-components';

export const TitleComponent = styled.div`
position: relative;
`;

export const TitleInner = styled.div`
position: relative;
padding-top: 20px;
min-height: 60px;
`;

export const FlexCol = styled.div`
flex: 1;
max-height: 100%;
`;

export const Breadcrumbs = styled.nav`
font-family: 'Slabo 27px', sans-serif;
padding: 15px 0;
color: #222;
font-weight: bold;
letter-spacing: 0;
text-align: center;
line-height: 1.2;
text-transform: uppercase;
font-size: 1.6em;
justify-content: center;
display: flex;
flex-flow: row nowrap;
align-items: center;
width: 100%;

a {
  color: #ccc;
  margin-left: 0;
  display: inline-flex;
  align-items: center;
  font-weight: normal;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;
  
  ${props =>
    props.isHover &&
    css`
    color: #111;
    `}
    
  }
  
  span {
    top: 2px;
    margin: 0 0.5em;
    position: relative;
    opacity: 0.35;
    font-weight: 300;
    
    svg {
      margin-bottom: 3px;
      border-bottom-width: 0px;
      border-bottom-style: solid;
      padding-bottom: 3px;
    }
  }
  `;
  