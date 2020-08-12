/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

import * as Styles from './styles';

const MensagemEntrada = ({ mensagem }) => {
  return (
    <Styles.MensagemEntradaWrapper>
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Mensagem>{mensagem.mensagem}</Styles.Mensagem>
          <Styles.Hora>
            {moment(mensagem.createdAt).format('HH:mm')}
          </Styles.Hora>
        </Styles.Container>
      </Styles.Wrapper>
    </Styles.MensagemEntradaWrapper>
  );
};

export default MensagemEntrada;
