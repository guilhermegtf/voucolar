import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
background-color: #fff;
position: relative;
display: block;
`;

export const CategoryPageRow = styled.div`
padding-top: 30px;
width: 100%;
display: flex;
flex-flow: row wrap;
max-width: 1080px;
margin-left: auto;
margin-right: auto;
`;

export const ColRight = styled.div`
max-width: 25%;
flex-basis: 25%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ShopSidebar = styled.div`
margin-left: auto;
margin-right: 0;
position: relative;
width: 100%;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
`;

export const ProductCategories = styled.aside`
margin-bottom: 1.5em;
display: block;

span {
  font-size: 1em;
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: .05em;
  text-transform: uppercase;
}

div {
  margin-top: .66em;
  height: 3px;
  display: block;
  background-color: rgba(0,0,0,0.1);
  margin: 1em 0 1em;
  width: 100%;
  max-width: 30px;
}
`;

export const CategoriesList = styled.ul`
margin: 0;
padding: 0;
list-style: disc;

li {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  list-style: none;
  text-align: left;
  margin: 0;

  & + li {
    border-top: 1px solid #ececec;
  }
}
`;

export const CategoriesListItem = styled(Link)`
display: inline-block;
padding: 6px 0;
flex: 1;
color: #f09595;
text-decoration: none !important;
touch-action: manipulation;
background-color: transparent;

&:hover{
  color: #000;
}

${props => props.isHovered && css`
  color: #000;
`}

`;

export const ColLeft = styled.div`
max-width: 75%;
flex-basis: 75%;
position: relative;
margin: 0;
padding: 0 15px 30px;
width: 100%;
`;

export const ProductRow = styled.div`
margin-left: -10px;
margin-right: -10px;
margin-bottom: 0;
padding-left: 0;
padding-right: 0;
width: auto;
max-width: 1065px;
display: flex;
flex-flow: row wrap;
`;

export const ProductContainer = styled.div`
padding: 0 9.8px 19.6px;
max-width: 33.33333%;
flex-basis: 33.33333%;
position: relative;
margin: 0;
width: 100%;
`;

export const ColInner = styled.div`
margin-right: auto;
margin-left: 0;
position: relative;
width: 100%;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
`;

export const ProductBox = styled.div`
width: 100%;
position: relative;
margin: 0 auto;
`;

export const BoxImage = styled.div`
position: relative;
height: auto;
margin: 0 auto;
overflow: hidden;
`;

export const Image = styled(Link)`
display: block;
text-decoration: none;
touch-action: manipulation;
background-color: transparent;
  img {
    max-width: 100%;
    width: 100%;
    transform: translateZ(0);
    margin: 0 auto;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
`;

export const BoxText = styled.div`
padding-top: .7em;
padding-bottom: 1.4em;
position: relative;
width: 100%;
font-size: .9em;
`;

export const ProductCategory = styled.p`
margin-top: .1em;
margin-bottom: .1em;
opacity: .7;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
font-size: .75em;
line-height: 1.2;
text-transform: uppercase;
letter-spacing: .05em;

`;

export const ProductName = styled.p`
margin-top: .1em;
margin-bottom: .1em;
`;

export const ProductLink = styled(Link)`
line-height: 1.3;
margin-top: .1em;
margin-bottom: .1em;
color: #f09595;
text-decoration: none;
touch-action: manipulation;
background-color: transparent;
&:hover {
  color: #f09595;
  text-decoration: none;
}
`;

export const Price = styled.span`
display: block;
line-height: 1;
span {
  white-space: nowrap;
  color: #111;
  font-weight: bold;
}
`;
