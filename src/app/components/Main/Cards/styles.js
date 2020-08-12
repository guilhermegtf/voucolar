import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: rgb(237, 239, 241);
  position: relative;
  min-height: auto;
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const BannerGrid = styled.div`
  position: relative;
  height: 617px;
  display: block;
  max-width: 1065px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
