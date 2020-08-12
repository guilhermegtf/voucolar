import styled from 'styled-components';

export const Label = styled.p`
  text-align: center;
  font-size: 20px;
  color: #a16695;
`;
export const Box = styled.div`
  text-align: center;
  margin: 10px 0;
  min-height: 90px;
  background: #f8f9fa;
  border: 1px #ced4da dashed;
  color: #47404f;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 0.813rem;
  font-weight: 400;
  line-height: 1.5;
  color: #a16695;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;
  border-color: ${(props) => (props.isDragActive ? '#a16695' : '#ced4da')};
  outline: ${(props) => (props.isDragActive ? 0 : 'initial !important')};
  box-shadow: ${(props) =>
    props.isDragActive ? '0 0 0 0.2rem #a1669566' : 'none'};
  &:hover {
    border-color: #a16695;
    outline: 0;
    box-shadow: 0 0 0 0.2rem #a1669566;
  }
`;
