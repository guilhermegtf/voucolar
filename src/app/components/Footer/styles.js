import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

export const AbsoluteFooter = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px 0 15px;
  font-size: 0.9em;
  text-align: center;
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const FooterPayment = styled.div`
  float: none;
  margin-left: auto;
  padding: 7.5px 0;
  margin-right: 0 !important;
`;

export const PaymentIcons = styled.div`
  display: inline-block;
`;

export const PaymentIcon = styled.div`
  display: inline-block;
  opacity: 0.6;
  transition: opacity 0.3s;
  border-radius: 5px;
  background-color: #f0f0f0;
  padding: 3px 5px 5px;
  margin: 3px 3px 0;

  svg {
    vertical-align: middle;
    height: 20px;
    width: auto !important;
    overflow: hidden;
  }
`;

export const FooterInfo = styled.div`
  float: none;
  margin-right: auto;
  margin-left: 0 !important;
`;

export const MenuRodape = styled.ul`
  border: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  opacity: 0.8;
  margin: 5px 0;
  font-size: 0.85em;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0;
  list-style: disc;

  li {
    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    margin: 0 0.4em;
    display: inline-block;

    a {
      color: currentColor;
      text-decoration: none;
      touch-action: manipulation;
    }
  }
`;

export const Copyright = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 1.3em;
  }
`;
