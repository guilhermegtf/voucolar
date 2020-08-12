import styled from 'styled-components';

export const TopBar = styled.div`
  background-color: #a16695;
  min-height: 30px;
  z-index: 11;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  unicode-bidi: isolate;
`;

export const FlexRow = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const FlexLeft = styled.div`
  margin-right: auto;
  max-height: 100%;
  box-sizing: border-box;

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
    box-sizing: border-box;
  }
`;

export const FlexCenter = styled.div`
  margin: 0 auto;
  max-height: 100%;
  box-sizing: border-box;

  ul {
    justify-content: center;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: disc;
    box-sizing: border-box;
  }
`;

export const FlexRight = styled.div`
  margin-left: auto;
  max-height: 100%;
  box-sizing: border-box;

  ul {
    justify-content: flex-end;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: disc;
    box-sizing: border-box;

    li {
      display: inline-block;
      list-style: none;
      padding: 0;
      position: relative;
      margin: 0 0.7em;

      &:first-child {
        margin-left: 0 !important;
      }

      &:last-child {
        margin-right: 0 !important;
      }

      & + li {
        a {
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            width: 1px;
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            height: 15px;
            margin-top: -7px;
            left: -1em;
          }
        }
      }
      a {
        color: rgba(255, 255, 255, 0.8);
        vertical-align: top;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8em;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        text-decoration: none;
        touch-action: manipulation;
        background-color: transparent;
        transition: color 0.2s;

        span {
          margin-left: 5px;
        }

        svg {
          min-width: 1em;
          font-size: 1em;
          color: rgba(255, 255, 255, 0.8);
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const SocialIcons = styled.div`
  color: #fff;
  font-size: 1em;
  display: inline-block;
  vertical-align: middle;

  li {
    list-style: none;

    a {
      font-size: 1em;
      margin-left: 0.3em;
      margin-right: 0.3em;
      font-family: sans-serif;

      svg {
        color: #fff;
      }
    }
  }
`;
