import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

import MensagemEntrada from './MensagemEntrada.jsx';
import MensagemSaida from './MensagemSaida.jsx';

import * as Styles from './styles';

const BodyMessages = ({ mensagens }) => {
  return (
    <Styles.MensagensWrapper>
      {mensagens.map((mensagem) => {
        if (mensagem.origem === 1) {
          return <MensagemEntrada key={uuid()} mensagem={mensagem} />;
        }
        return <MensagemSaida key={uuid()} mensagem={mensagem} />;
      })}
    </Styles.MensagensWrapper>
  );
};

BodyMessages.propTypes = {
  mensagens: PropTypes.array,
};

export default BodyMessages;
