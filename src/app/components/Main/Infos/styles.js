import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 70px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

export const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #fff;
  padding: 30px 0;
  position: relative;
  min-height: auto;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  animation: ${appearFromLeft} 2s;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const Rows = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const Cards = styled.div`
  transform: translate3d(0, 0, 0) scale(1);
  max-width: 33.33333%;
  flex-basis: 33.33333%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
  border-left: 0;
  border-right: 1px solid #ececec;

  &:last-child {
    border-right: 0;
  }
`;

export const ColInner = styled.div`
  text-align: center;
  position: relative;
  margin-left: auto;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  &:first-child {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const IconBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const IconBoxImg = styled.div`
  width: 51px;
  margin: 0 auto 1em;
  max-width: 100%;
  position: relative;
`;

export const IconText = styled.div`
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-family: 'Slabo 27px', sans-serif;
    font-size: 1.25em;
    color: #555;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0.5em;
    text-rendering: optimizeSpeed;
  }

  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Icon = styled.div`
  padding-top: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const IconInner = styled.div`
  color: #a16695;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  border: 2px solid currentColor;
  border-radius: 100%;
  transition: all 0.3s;

  svg {
    position: absolute;
    left: 0;
    object-fit: cover;
    padding: 0;
    top: 50%;
    margin: 0;
    transform: translateY(-50%);
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    height: 100%;
    transition: all 0.3s;
    fill: currentColor;
    overflow: hidden;
  }
`;
