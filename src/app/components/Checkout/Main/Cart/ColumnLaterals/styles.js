import styled from 'styled-components';

export const ColLatrals = styled.div`
border-left: 1px solid #ececec;
padding: 0 30px 30px;
margin-bottom: 0;
padding-bottom: 0 !important;
max-width: 41.66667%;
flex-basis: 41.66667%;
position: relative;
margin: 0;
width: 100%;
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

export const Table = styled.table`
width: 100%;
margin-bottom: 1em;
border-color: #ececec;
border-spacing: 0;

h2 {
  display: none;
  font-family: "Slabo 27px", sans-serif;
  font-size: 1.6em;
  line-height: 1.3;
  color: #555;
  width: 100%;
  margin-top: 0;
  margin-bottom: .5em;
  text-rendering: optimizeSpeed;
}
`;

export const TitleTable = styled.th`
padding-right: 0;
padding-left: 0;
line-height: 1.05;
letter-spacing: .05em;
text-transform: uppercase;
padding: .5em;
text-align: left;
border-bottom: 3px solid #ececec;
font-size: .9em;
`;

export const ShopTable = styled.table`
width: 100%;
margin-bottom: 1em;
border-color: #ececec;
border-spacing: 0;
`;

export const Subtotal = styled.tr`

th {
  font-size: .9em;
  text-transform: inherit;
  letter-spacing: 0;
  font-weight: normal;
  padding-left: 0;
  line-height: 1.05;
  padding: .5em;
  text-align: left;
  border-bottom: 1px solid #ececec;
}

td {
  text-align: right;
  padding-right: 0;
  color: #666;
  padding: .5em;
  border-bottom: 1px solid #ececec;
  line-height: 1.3;
  font-size: .9em;
  
  span {
    white-space: nowrap;
    color: #111;
    font-weight: bold;
  }
}
`;

export const ShippingTotals = styled.tr`
td {
  text-align: right;
  padding-right: 0;
  padding-left: 0;
  border: 0;
  padding: 0;
  font-size: 1em;
  color: #666;
  line-height: 1.3;
  
  table {
    margin: 0;
    width: 100%;
    border-color: #ececec;
    border-spacing: 0;
    
    tbody {
      tr {
        th {
          font-size: .9em;
          text-transform: inherit;
          letter-spacing: 0;
          font-weight: normal;
          padding-left: 0;
          line-height: 1.05;
          padding: .5em;
          text-align: left;
          border-bottom: 1px solid #ececec;
        }
        
        td {
          text-align: right;
          padding-right: 0;
          color: #666;
          padding: .5em;
          border-bottom: 1px solid #ececec;
          line-height: 1.3;
          font-size: .9em;
          
          form {
            margin-top: .5em;
            margin-bottom: 0;
            margin: .5em 0;
            
            a {
              font-size: .9em;
              color: #f09595;
              text-decoration: none;
              touch-action: manipulation;
              background-color: transparent;
            }
          }
        }
      }
    }
  }
}
`;
export const OrderTotal = styled.tr`
th {
  font-size: .9em;
  text-transform: inherit;
  letter-spacing: 0;
  font-weight: normal;
  padding-left: 0;
  line-height: 1.05;
  padding: .5em;
  text-align: left;
  border-bottom: 3px solid #ececec;
}

td {
  text-align: right;
  padding-right: 0;
  color: #666;
  padding: .5em;
  border-bottom: 3px solid #ececec;
  line-height: 1.3;
  font-size: .9em;
  
  strong {
    font-weight: bolder;
    
    span {
      white-space: nowrap;
      color: #111;
      font-weight: bold;
    }
  }
}
`;

export const ProceedCheckout = styled.div`
margin: 1.5em 0;
a {
  background-color: #36b5b0;
  min-width: 100%;
  margin-right: 0;
  display: block;
  margin-bottom: 1em;
  color: #fff;
  border-color: rgba(0,0,0,0.05);
  position: relative;
  text-transform: uppercase;
  font-size: .97em;
  letter-spacing: .03em;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0;
  margin-top: 0;
  text-shadow: none;
  line-height: 2.4em;
  min-height: 2.5em;
  padding: 0 1.2em;
  max-width: 100%;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  touch-action: manipulation;
}
`;

export const FormCupom = styled.form`
margin-bottom: 0 !important;
div {
  h3 {
    border-bottom: 3px solid #ececec;
    font-size: .95em;
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-family: "Slabo 27px", sans-serif;
    color: #555;
    width: 100%;
    margin-top: 0;
    text-rendering: optimizeSpeed;

    svg {
      opacity: .35;
      margin-right: 4px;
    }
  }
  
  input[type='text'] {
    -moz-appearance: none;
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 0 .75em;
    height: 2.507em;
    font-size: .97em;
    border-radius: 0;
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
    background-color: #fff;
    color: #333;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    margin-bottom: 1em;
    touch-action: manipulation;
    overflow: visible;
    font: inherit;
  }
  
  input[type='submit'] {
    overflow: hidden;
    position: relative;
    background-color: #f9f9f9;
    text-shadow: 1px 1px 1px #fff;
    color: #666;
    border: 1px solid #ddd;
    text-transform: none;
    font-weight: normal;
    display: inline-block;
    font-size: .97em;
    letter-spacing: .03em;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 0;
    margin-top: 0;
    margin-right: 1em;
    line-height: 2.4em;
    min-height: 2.5em;
    padding: 0 1.2em;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    -webkit-appearance: button;
    margin-bottom: 1em;
    touch-action: manipulation;
    font: inherit;
  }
}
`;
