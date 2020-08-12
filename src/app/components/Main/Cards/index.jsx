import React from 'react';

import { Content, Section, BannerGrid } from './styles';
import Capinha from './Capinha/index.jsx';
import OtherCards from './OtherCards/index.jsx';

function Cards() {
  return (
    <Section>
      <Content>
        <BannerGrid>
          <Capinha />
          <OtherCards />
        </BannerGrid>
      </Content>
    </Section>
  );
}

export default Cards;
