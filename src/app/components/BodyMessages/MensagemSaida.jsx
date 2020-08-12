/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCheckDouble,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import * as Styles from './styles';

const MensagemSaida = ({ mensagem }) => {
  return (
    <Styles.MensagemSaidaWrapper>
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Mensagem>{mensagem.mensagem}</Styles.Mensagem>
          <Styles.Hora>
            {moment(mensagem.createdAt).format('HH:mm')}
            {mensagem.estado === 3 ? (
              <Styles.Visto>
                <FontAwesomeIcon icon={faCheckDouble} />
              </Styles.Visto>
            ) : (
              <Styles.NaoVisto>
                {mensagem.estado === 1 ? (
                  <FontAwesomeIcon icon={faClock} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </Styles.NaoVisto>
            )}
          </Styles.Hora>
        </Styles.Container>
      </Styles.Wrapper>
    </Styles.MensagemSaidaWrapper>
  );
};

export default MensagemSaida;
