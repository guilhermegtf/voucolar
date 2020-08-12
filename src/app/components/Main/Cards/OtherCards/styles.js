import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  height: 308.5px;
  float: left;
  padding: 0 9.8px 19.6px;
  margin-bottom: 0;
  max-width: 33.33333%;
  margin: 0;
  width: 100%;
`;

export const ColInner = styled.div`
  box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Banner = styled.div`
  background-color: ${(props) => props.bckcolor};
  object-fit: cover;
  width: 100%;
  position: absolute !important;
  top: 0;
  bottom: 0;
  height: 100%;
  padding: 0 !important;
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

export const BannerLayer = styled.div`
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
  width: ${(props) => props.width};
  font-size: 8.5px;
  transform: translate(-50%, -50%) !important;
  top: 50%;
  left: 50%;
  max-height: 100%;
  position: absolute !important;
`;

export const TextInner = styled.div`
  text-align: center;
`;

export const DivImg = styled.div`
  width: ${(props) => props.width};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const ImgInner = styled.div`
  margin: ${(props) => props.margin};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
`;

export const TextPersonalizar = styled.h2`
  color: #fff;
  padding: 0;
  font-weight: 400;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  line-height: 1;
  font-size: 2.9em;
  font-weight: 400;
  font-family: 'Dancing Script', sans-serif;
  width: 100%;
  text-rendering: optimizeSpeed;
`;

export const TextTitle = styled.h2`
  color: #fff;
  padding: 0;
  font-weight: 400;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  line-height: 1;
  font-size: 2.9em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Slabo 27px', sans-serif;
  width: 100%;
  text-rendering: optimizeSpeed;

  strong {
    span {
      font-size: 140%;
    }
  }
`;

export const Button = styled(Link)`
  margin-right: 0 !important;
  margin-left: 0 !important;
  color: #a16695 !important;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 2px solid currentColor;
  background-color: transparent;
  line-height: 2.19em;
  font-size: 1.3em;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  border-radius: 0;
  text-shadow: none;
  min-height: 2.5em;
  padding: 0 1.2em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  transition: transform .3s, border .3s, background .3s, box-shadow .3s, opacity .3s, color .3s;

  &:hover {
    border-color: #a16695;
    background-color: #a16695;
    color: #fff !important;
    box-shadow: none !important;
  }
`;
