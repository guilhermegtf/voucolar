import styled from 'styled-components';
import imgBanner from '../../assets/Banner-Site-Namorados2.png';

export const MainComponent = styled.main`
  background-color: #fff;
  position: relative;
  display: block;
  box-sizing: border-box;
`;

export const teste = styled.div`
  background-color: #fff;
  position: relative;
  display: block;
  box-sizing: border-box;
`;

export const Banner = styled.div`
  padding-top: 36%;
  position: relative;
  width: 100%;
  min-height: 30px;
  background-position: 66% 71%;
  background-image: url(${imgBanner});
  background-size: cover;
  background-repeat: no-repeat;
`;
