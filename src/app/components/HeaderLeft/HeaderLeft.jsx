import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import InsoftLogo from '../../assets/images/ost-logo.png';

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const UserDropdown = styled.span`
  margin-right: 20px;
  font-size: 35px;
  color: #fff;
  cursor: pointer;
`;
const Image = styled.img`
  width: 60%;
  margin-left: 20px;
`;

const HeaderLeft = () => {
  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     'http://localhost:3006/api/v1/getMensagens'
  //   );
  //   console.log(data);
  // };

  // fetchData();

  return (
    <Container>
      <Image src={InsoftLogo} alt="InsoftLogo" />
      <UserDropdown>
        <FontAwesomeIcon icon={faUserCircle} />
      </UserDropdown>
    </Container>
  );
};

export default HeaderLeft;
