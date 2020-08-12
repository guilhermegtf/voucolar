import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.form`
  display: flex;
  height: 100%;
`;
const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
`;
const CustomInput = styled.input`
  width: 85%;
  max-width: 85%;
  height: 50%;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0 30px;
  font-size: 16px;
  word-break: break-all;
`;

const InputMessage = ({ enviarMensagem }) => {
  const [texto, setTexto] = useState('');

  const onChange = (text) => setTexto(text);
  const onSubmit = (e) => {
    e.preventDefault();
    enviarMensagem(texto);
    setTexto('');
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputWrapper>
        <CustomInput
          autoFocus
          value={texto}
          placeholder="Digite sua mensagem"
          onChange={(e) => onChange(e.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
};

InputMessage.propTypes = {
  enviarMensagem: PropTypes.func,
};

export default InputMessage;
