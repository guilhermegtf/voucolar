import styled from 'styled-components';

export const SectionComponent = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
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

export const Row = styled.div`
  padding-left: 0;
  padding-right: 0;
  margin-left: -15px;
  margin-right: -15px;
  width: auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 1080px;
`;

export const Column = styled.div`
  max-width: 33.33333%;
  flex-basis: 33.33333%;
  position: relative;
  margin: 0;
  padding: 0 15px 30px;
  width: 100%;
`;

export const ImageBox = styled.div`
  width: 66%;
  position: relative;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
`;

export const ColInner = styled.div`
  margin-right: auto;
  margin-left: 0;
  position: relative;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1.3em;
  strong {
    font-weight: bolder;
  }
`;

export const ColInnerColored = styled.div`
  background-color: rgb(54, 181, 176);
  padding: 3px 14px 0px 14px;
  margin-right: auto;
  margin-left: 0;
  color: #f1f1f1;
  text-align: center;
  position: relative;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SectionTitleContainer = styled.div`
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 1.5em;
  max-width: 1080px;
  width: 100%;

  h3 {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border-bottom: 2px solid #ececec;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: 'Slabo 27px', sans-serif;
    font-size: 1.25em;
    margin-top: 0;
    margin-bottom: 0.5em;
    text-rendering: optimizeSpeed;

    b {
      display: none;
      height: 2px;
      opacity: 0.1;
      background-color: currentColor;
      font-weight: bolder;
    }

    span {
      border-color: rgba(255, 255, 255, 0.2);
      margin-right: 15px;
      padding-bottom: 7.5px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
      margin-bottom: -2px;
      text-transform: uppercase;
      box-decoration-break: clone;
    }
  }
`;

export const DivForm = styled.div`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Campo = styled.p`
  padding: 0;
  margin: 0;
  color: #f1f1f1;

  label {
    display: inline-block;
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 0.4em;

    br {
      display: none;
    }

    span {
      display: block;
      position: relative;
      input {
        -moz-appearance: none;
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding: 0 0.75em;
        height: 2.507em;
        font-size: 0.97em;
        border-radius: 0;
        max-width: 100%;
        width: 100%;
        vertical-align: middle;
        background-color: #fff;
        color: #333;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-bottom: 1em;
        touch-action: manipulation;
        font: inherit;
      }

      textarea {
        margin-bottom: 1em;
        padding-top: 0.7em;
        min-height: 120px;
        -moz-appearance: none;
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding-left: 0.75em;
        height: 2.507em;
        font-size: 0.97em;
        border-radius: 0;
        max-width: 100%;
        width: 100%;
        vertical-align: middle;
        background-color: #fff;
        color: #333;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        font: inherit;
      }
    }
  }
`;

export const Button = styled.input.attrs({
  type: 'submit',
})`
  background-color: #a16695;
  color: #fff;
  border-color: rgba(0, 0, 0, 0.05);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.97em;
  letter-spacing: 0.03em;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-radius: 0;
  margin-top: 0;
  margin-right: 1em;
  text-shadow: none;
  line-height: 2.4em;
  min-height: 2.5em;
  padding: 0 1.2em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  margin-bottom: 1em;
  touch-action: manipulation;
  font: inherit;
`;
