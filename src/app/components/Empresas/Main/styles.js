import styled from 'styled-components';

export const MainComponent = styled.div`
background-color: #fff;
position: relative;
display: block;
`;

export const Content = styled.div`
padding-top: 30px;
padding-bottom: 30px;
`;

export const RowMain = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
max-width: 1080px;
margin-left: auto;
margin-right: auto;
`;

export const Large12Col = styled.div`
max-width: 100%;
flex-basis: 100%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ColInner = styled.div`
margin-left: auto;
margin-right: 0;
position: relative;
width: 100%;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
`;

export const Porfolio = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  width: auto;
  max-width: 100% !important;
  display: flex;
  flex-flow: row wrap;
`;

export const Card = styled.div`
padding: 0 9.8px 19.6px;
max-width: 16.66667%;
flex-basis: 16.66667%;
position: relative;
margin: 0;
width: 100%;
`;

export const CardColInner = styled.div`
background-color: #FFF;
margin-left: auto;
margin-right: 0;
box-shadow: 0 3px 6px -4px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
transition: transform .3s, box-shadow .3s, background-color .3s, color .3s, opacity .3s;
position: relative;
width: 100%;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
`;

export const Plain = styled.a`
color: #fff;
transition: color .3s, opacity .3s, transform .3s;
text-decoration: none;
touch-action: manipulation;
background-color: transparent;
`;

export const PorfolioBox = styled.div`
background-color: #fff;
transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
width: 100%;
position: relative;
margin: 0 auto;
`;

export const BoxImage = styled.div`
position: relative;
height: auto;
margin: 0 auto;
overflow: hidden;
transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
div {
  padding-top: 100%;
  position: relative;
  height: auto;
  overflow: hidden;
  background-position: 50% 50%;
  background-size: cover;

  img {
    transition: filter .6s, opacity .6s, transform .6s, box-shadow .3s;
    right: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    top: 0;
    position: absolute;
    object-position: 50% 50%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
    max-width: 100%;
    transform: translateZ(0);
    margin: 0 auto;
  }
}
`;

export const BoxText = styled.div`
padding-left: 10px;
padding-right: 10px;
text-align: center;
font-size: .7em;
padding-top: .7em;
padding-bottom: 1.4em;
position: relative;
width: 100%;
pointer-events: none;

&:hover {
  background-color: red;
}
`;

export const BoxTextInner = styled.div`
margin-left: auto;
margin-right: auto;

h6 {
  line-height: 1.3;
  margin-top: .1em;
  margin-bottom: .1em;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-family: "Slabo 27px", sans-serif;
  font-size: .85em;
  opacity: .8;
  color: #555;
  width: 100%;
  text-rendering: optimizeSpeed;
}
`;
