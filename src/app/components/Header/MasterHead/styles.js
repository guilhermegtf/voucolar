import styled from 'styled-components';

export const MasterHead = styled.div`
  height: 90px;
  z-index: 10;
  position: relative;
  box-sizing: border-box;
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.div`
  width: 200px;
  margin-left: 0;
  margin-right: 30px;
  line-height: 1;
  max-height: 100%;

  img {
    max-height: 90px;
    display: block;
    width: auto;
    opacity: 1;
    max-width: 100%;
    height: auto;
    border-style: none;
  }
`;

export const FlexLeftGrow = styled.div`
  margin-right: auto;
  flex: 1;
  max-height: 100%;

  ul {
    justify-content: flex-start;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: disc;

    li {
      display: inline-block;
      list-style: none;
      padding: 0;
      position: relative;
      margin: 0 7px;

      &:first-child {
        margin-left: 0 !important;
      }

      a {
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8em;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: rgba(102, 102, 102, 0.85);
        padding: 10px 0;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        text-decoration: none;
        touch-action: manipulation;
        background-color: transparent;
      }
    }
  }
`;

export const FlexRightGrow = styled.div`
  margin-left: auto;
  max-height: 100%;
  font-family: 'Open Sans', sans-serif;

  ul {
    justify-content: flex-end;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: disc;

    li {
      display: inline-block;
      list-style: none;
      padding: 0;
      position: relative;
      margin: 0 7px;

      a {
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8em;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: rgba(102, 102, 102, 0.85);
        padding: 10px 0;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;

        svg {
          min-width: 1em;
          font-size: 1.2em;
        }
      }
    }
  }
`;

export const Separator = styled.li`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 30px;
  position: relative;
  margin: 0 7.5px;
`;

export const Button = styled.div`
  display: inline-block;
  margin-left: 5px;
  a {
    font-size: 0.8em;
    min-width: 2.5em;
    display: inline-block;
    margin-bottom: 0;
    margin: 0;
    border: 1px solid currentColor;
    background-color: transparent;
    line-height: 2.19em;
    border-radius: 999px !important;
    object-fit: cover;
    color: silver;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-weight: bolder;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    text-shadow: none;
    min-height: 2.5em;
    padding: 0 1.2em;
    max-width: 100%;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;

    span {
      display: inline-block;
      line-height: 1.6;
    }

    svg {
      vertical-align: middle;
      margin: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const TopDivider = styled.div`
  margin-bottom: -1px;
  border-top: 1px solid currentColor;
  opacity: 0.1;
  width: 100% !important;
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  display: block;
`;
