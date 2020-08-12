import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  flex-flow: row wrap;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`;

export const ColInner = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Banner = styled.div`
  padding-top: 400px;
  background-color: ${(props) => props.color};
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
  width: 80%;
  font-size: 8px;
  left: 50%;
  transform: translateX(-50%) !important;
  bottom: 10%;
  max-height: 100%;
  position: absolute;
`;

export const TextInner = styled.div`
  text-align: center;
`;

export const DivImg = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  div {
    margin: 0 0px 0px 0px;
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
  }
`;

export const Title = styled.h2`
  color: #fff;
  padding: 0;
  font-weight: 400;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  line-height: 1;
  font-size: 2.9em;
  font-weight: 400 !important;
  font-family: 'Dancing Script', sans-serif;
  width: 100%;
  text-rendering: optimizeSpeed;
`;

export const Description = styled.h2`
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
  border: 2px solid #a16695;
  background-color: transparent;
  line-height: 2.19em;
  font-size: 1.5em;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 0;
  text-shadow: none;
  line-height: 2.4em;
  min-height: 2.5em;
  padding: 0 1.2em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  transition: transform .3s, border .3s, background .3s, box-shadow .3s, opacity .3s, color .3s;

  span {
    display: inline-block;
    line-height: 1.6;
  }

  &:hover {
    background-color: #a16695;
    color: #fff !important;
    border-color: #a16695;
  }
`;
