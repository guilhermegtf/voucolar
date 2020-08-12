import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { shade } from 'polished';

export const ProductMain = styled.div`
padding-top: 15px;
padding: 40px 0;
`;

export const RowContent = styled.div`
margin-bottom: 0 !important;
width: 100%;
display: flex;
flex-flow: row wrap;
max-width: 1080px;
margin-left: auto;
margin-right: auto;
`;

export const ProductGallery = styled.div`
padding-bottom: 0 !important;
max-width: 33.33333%;
flex-basis: 33.33333%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ProductFigure = styled.figure`
margin: 0;
position: relative;
scrollbar-width: none;
`;

export const FlickityViewPort = styled.div`
height: 586.85px;
touch-action: pan-y;
width: 100%;
overflow: hidden;
position: relative;
`;

export const FlickitySlider = styled.div`
left: 0px;
transform: translateX(0%);
position: absolute;
width: 100%;
height: 100%;
`;

export const ProductGalleryDiv = styled.div`
position: absolute;
left: 0%;
width: 100% !important;
padding: 0;
margin: 0;
a {
  color: #f09595;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;
  img {
    width: 100%;
    opacity: 1;
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
}
`;

export const ProductInfo = styled.div`
padding-top: 10px;
flex: 1;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ProductTitle = styled.h1`
font-family: "Slabo 27px", sans-serif;
font-size: 1.7em;
line-height: 1.3;
color: #555;
width: 100%;
margin-top: 0;
margin-bottom: .5em;
text-rendering: optimizeSpeed;
display: block;
font-weight: bold;
margin-block-start: .67em;
margin-block-end: .67em;
`;

export const Divider = styled.div`
height: 3px;
display: block;
background-color: rgba(0,0,0,.1);
margin: 1em 0 1em;
width: 100%;
max-width: 30px;
`;

export const ProductPagePrice = styled.p`
display: block;
font-size: 1.5em;
margin: .5em 0;
font-weight: bolder;
line-height: 1;

span {
  white-space: nowrap;
  color: #111;
  font-weight: 700;
  span {
    font-size: .75em;
    vertical-align: top;
    margin-top: .05em;
  }
}
`;

export const FormCart = styled.form`
margin-bottom: 1.3em;
`;

export const Variations = styled.table`
position: relative;
width: 100%;
margin-bottom: 1em;
border-color: #ececec;
border-spacing: 0;
`;

export const TdLabel = styled.td`
vertical-align: middle;
padding: .2em 0;
border: 0;
color: #666;
text-align: left;
line-height: 1.3;
font-size: .9em;
label {
  margin: .5em 0;
  color: #222;
  font-weight: 700;
  display: block;
  font-size: .9em;
}
`;


export const TdValue = styled.td`
vertical-align: middle;
padding: .2em 0;
border: 0;
color: #666;
text-align: left;
line-height: 1.3;
font-size: .9em;
select {
  background-color: rgba(0,0,0,.03);
  box-shadow: none;
  border-color: rgba(0,0,0,.09);
  color: currentColor !important;
  border-radius: 99px;
  margin: .5em 0;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-position: right .45em top 50%;
  background-repeat: no-repeat;
  padding-right: 1.4em;
  background-size: auto 16px;
  display: block;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 0 .75em;
  height: 2.507em;
  font-size: .97em;
  max-width: 100%;
  width: 100%;
  text-transform: none;
  overflow: visible;
  font: inherit;
}
`;

export const VariationAddCart = styled.div`
padding: .5em 0;
div {
  height: auto;
}
`;

export const Button = styled(Link)`
background-color: #36b5b0;
margin-right: 0;
font-size: 1em;
opacity: .6;
border-radius: 99px;
margin-bottom: 1em;
color: #fff;
border-color: rgba(0,0,0,.05);
position: relative;
display: inline-block;
text-transform: uppercase;
letter-spacing: .03em;
cursor: pointer;
font-weight: bolder;
text-align: center;
text-decoration: none;
border: 1px solid transparent;
vertical-align: middle;
margin-top: 0;
text-shadow: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
transition: background-color 0.2s;

&:hover {
  text-decoration: none;
  color: #fff;
  background: ${shade(0.2, '#36b5b0')};
}
`;

export const ProductShortDescription = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 1.3em;
  }
`;

export const QuantityButtons = styled.div`
margin-bottom: 1em;
display: inline-flex;
margin-right: 1em;
white-space: nowrap;
vertical-align: top;
`;

export const MinusButton = styled.input`
background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: currentColor !important;
border-radius: 99px;
overflow: hidden;
position: relative;
text-shadow: 1px 1px 1px #fff;
border: 1px solid #ddd;
text-transform: none;
font-weight: 400;
padding-left: .5em;
padding-right: .5em;
border-right: 0 !important;
border-top-right-radius: 0 !important;
border-bottom-right-radius: 0 !important;
display: inline-block;
margin: 0;
font-size: .97em;
letter-spacing: .03em;
cursor: pointer;
text-align: center;
text-decoration: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
-webkit-appearance: button;
touch-action: manipulation;
font: inherit;
`;

export const InputQuantity = styled.input`
max-width: 2.5em;
width: 2.5em;
text-align: center;
border-radius: 0 !important;
-moz-appearance: textfield;
font-size: 1em;
background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: currentColor !important;
padding-left: 0;
padding-right: 0;
display: inline-block;
vertical-align: top;
margin: 0;
box-sizing: border-box;
border: 1px solid #ddd;
padding: 0 .75em;
height: 2.507em;
`;

export const PlusButton = styled.input`
background-color: rgba(0,0,0,.03);
box-shadow: none;
border-color: rgba(0,0,0,.09);
color: currentColor !important;
border-radius: 99px;
overflow: hidden;
position: relative;
text-shadow: 1px 1px 1px #fff;
border: 1px solid #ddd;
text-transform: none;
font-weight: 400;
padding-left: .5em;
padding-right: .5em;
border-left: 0 !important;
border-top-left-radius: 0 !important;
border-bottom-left-radius: 0 !important;
display: inline-block;
margin: 0;
font-size: .97em;
letter-spacing: .03em;
cursor: pointer;
text-align: center;
text-decoration: none;
line-height: 2.4em;
min-height: 2.5em;
padding: 0 1.2em;
max-width: 100%;
text-rendering: optimizeLegibility;
box-sizing: border-box;
`;
