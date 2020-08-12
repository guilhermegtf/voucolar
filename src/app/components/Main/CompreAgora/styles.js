import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  user-select: none;
  max-width: 1065px;
  padding-top: 0;
  overflow: hidden;
  position: relative;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-left: auto;
  margin-right: auto;
`;

export const ViewPort = styled.div`
  height: 542.583px;
  touch-action: pan-y;
  width: 100% !important;
  cursor: grab;
  overflow: hidden;
  position: relative;
`;

export const Slider = styled.div`
  left: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Product = styled.div``;

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

  div {
    a {

    }
  }
`;

export const BoxImageLink = styled(Link)`
 display: block;
color: #f09595;
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
  padding-top: 0.7em;
  padding-bottom: 1.4em;
  position: relative;
  width: 100%;
  font-size: 0.9em;
`;

export const TitleCategory = styled.p`
  margin-top: 0.1em;
  margin-bottom: 0.1em;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75em;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TitleProduct = styled.p`
  margin-top: 0.1em;
  margin-bottom: 0.1em;

  a {
    line-height: 1.3;
    margin-top: 0.1em;
    margin-bottom: 0.1em;
    display: inline-block;
    color: #f09595;
    text-decoration: none;
    touch-action: manipulation;
    background-color: transparent;
  }
`;

export const PriceWrapper = styled.div`
  span {
    display: block;
    line-height: 1;

    span {
      white-space: nowrap;
      color: #111;
      font-weight: 700;
    }
  }
`;
