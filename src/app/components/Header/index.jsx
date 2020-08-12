import React from 'react';
import TopBar from './TopBar/index.jsx';
import MasterHead from './MasterHead/index.jsx';

import Container from './styles';

function Header() {
  return (
    <Container>
      <TopBar />
      <MasterHead />
    </Container>
  );
}

export default Header;
