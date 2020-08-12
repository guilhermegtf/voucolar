import styled from 'styled-components';

import backgroundImg from '../../../../assets/banner-brindes-personalizados.jpg';

export const BannerComponent = styled.div`
  padding-top: 500px;
  background-color: #a16695;
  position: relative;
  width: 100%;
  min-height: 30px;
`;

export const BannerInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 0 !important;
  margin: 0 !important;
`;

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0 !important;
`;

export const Overlay = styled.div`
  background-color: rgba(54, 181, 176, 0.56);
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  left: -1px;
  right: -1px;
  pointer-events: none;
`;

export const BannerLayers = styled.div`
  padding-left: 0;
  padding-right: 0;
  max-height: 100%;
  height: 100%;
  position: relative;
  max-width: 1080px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const TextBox = styled.div`
  width: 60%;
  transform: translate(-50%, -50%) !important;
  font-size: 16px;
  top: 50%;
  left: 50%;
  max-height: 100%;
  position: absolute !important;
`;

export const TextLight = styled.div`
  font-size: 100%;
  position: relative;
  z-index: 10;
  backface-visibility: hidden;
  color: #f1f1f1;

  div {
    text-align: center;

    h3 {
      color: #fff;
      padding: 0;
      font-weight: normal;
      margin-top: 0.2em;
      margin-bottom: 0.2em;
      line-height: 1;
      font-size: 2em;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-family: 'Slabo 27px', sans-serif;
      width: 100%;
      text-rendering: optimizeSpeed;
    }

    p {
      padding: 0;
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }
`;
