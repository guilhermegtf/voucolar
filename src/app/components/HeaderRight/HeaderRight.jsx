import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div``;
const TypeContainer = styled.div`
  border-radius: 0px 0px 50px 50px;
  width: 15%;
  text-align: center;
  margin: 0 auto;
  padding: 6px 0;
  background-color: rgb(220, 220, 220);
  color: #251849;
  font-weight: bolder;
`;
const TypeLabel = styled.span`
  padding-left: 10px;
`;
const SmallNumber = styled.span`
  font-size: 10px;
`;

const HeaderRight = () => {
  const [nome] = useState('Flavio Riper');
  const [numero] = useState('11989809989');

  return (
    <Container>
      <TypeContainer>
        <FontAwesomeIcon icon={faWhatsapp} />
        <TypeLabel>Whatsapp</TypeLabel>
      </TypeContainer>
      <div>
        {nome} <SmallNumber>{numero}</SmallNumber>
      </div>
    </Container>
  );
};

export default HeaderRight;
