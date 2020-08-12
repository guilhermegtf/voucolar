import styled from 'styled-components'

export const Container =  styled.div`
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

export const ProductGalery = styled.div`
padding-bottom: 0 !important;
max-width: 33.33333%;
flex-basis: 33.33333%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ProductImage = styled.div`
margin-bottom: 0;
position: relative !important;
`;

export const Figure = styled.figure`
margin: 0;
position: relative;
scrollbar-width: none;
display: block;
`;

export const ViewPort = styled.div`
height: 329.983px;
touch-action: pan-y;
width: 100%;
overflow: hidden;
position: relative;
`;

export const Slider = styled.div`
left: 0px;
transform: translateX(0%);
position: absolute;
width: 100%;
height: 100%;
`;

export const ProductGaleryImage = styled.div`
position: absolute;
left: 0%;
width: 100% !important;
padding: 0;
margin: 0;
a{
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
}
`;

export const ProductInfo = styled.div`
width: 100% !important;
float: none !important;
padding-top: 10px;
flex: 1;
position: relative;
margin: 0;
padding: 0 15px 30px;
  h1 {
    font-family: "Slabo 27px", sans-serif;
    font-size: 1.7em;
    line-height: 1.3;
    color: #555;
    width: 100%;
    margin-top: 0;
    margin-bottom: .5em;
    text-rendering: optimizeSpeed;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
height: 3px;
display: block;
background-color: rgba(0,0,0,0.1);
margin: 1em 0 1em;
width: 100%;
max-width: 30px;
`;

export const ProductPrice = styled.div`
display: block;
font-size: 1.5em;
margin: .5em 0;
font-weight: bolder;
line-height: 1;
span {
  white-space: nowrap;
  color: #111;
  font-weight: bold;
  span{
    font-size: .75em;
    vertical-align: top;
    margin-top: .05em;
  }
}
`;

export const ProductDescription = styled.p`
  margin-top: 0;
  margin-bottom: 1.3em;

`;

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

export const ProductMeta = styled.div`
font-size: .8em;
margin-bottom: 1em;
 span {
  display: block;
  border-top: 1px dotted #ddd;
  padding: 5px 0;
  a {
    color: #f09595;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
  }
 }
`;


export const ProductSidebar = styled.div`
font-size: .9em;
max-width: 16.66667%;
flex-basis: 16.66667%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;
