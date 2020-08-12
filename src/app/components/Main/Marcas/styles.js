import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1065px;
  padding-top: 0;
  position: relative;
  scrollbar-width: none;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-left: auto;
  margin-right: auto;
`;

export const ViewPort = styled.div`
  height: 334.833px;
  touch-action: pan-y;
  width: 100%;
`;

export const Flickity = styled.div`
  left: 0px;
  transform: translateX(-100%);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ProductCategory = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  padding: 0 9.8px 19.6px;
  margin-bottom: 0;
  max-width: 33.33333%;
  margin: 0;
  width: 100%;
`;

export const ColInner = styled.div`
  box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s,
    opacity 0.3s;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Product = styled.a`
  color: #f09595;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;
`;

export const BoxCategory = styled.div`
  color: #f1f1f1;
  transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

export const BoxText = styled.div`
  padding: 0px 0px 0px 0px;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  bottom: auto !important;
  z-index: 16;
  left: 0;
  right: 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-height: 100%;
  text-align: center;
  font-size: 1.5em;

  div {
    margin-left: auto;
    margin-right: auto;

    h5 {
      color: #fff;
      line-height: 1.3;
      margin-top: 0.1em;
      margin-bottom: 0.1em;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-family: 'Slabo 27px', sans-serif;
      font-size: 1em;
      width: 100%;
      text-rendering: optimizeSpeed;
    }
  }
`;

export const BoxImage = styled.div`
  width: 47%;
  position: relative;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
`;

export const ImageZoom = styled.div`
  padding-top: 200%;
  position: relative;
  height: auto;
  overflow: hidden;
  background-position: 50% 50%;
  background-size: cover;

  img {
    right: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    top: 0;
    position: absolute;
    object-position: 50% 50%;
    object-fit: cover;
    font-family: 'object-fit:cover;';
    max-width: 100%;
    transform: translateZ(0);
    margin: 0 auto;
    display: inline-block;
    border-style: none;
  }
`;
