import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

import { TopBar, FlexRow, FlexLeft, FlexCenter, FlexRight } from './styles';

function TopBarComponent() {
  return (
    <TopBar>
      <FlexRow>
        <FlexLeft>
          <ul />
        </FlexLeft>
        <FlexCenter>
          <ul />
        </FlexCenter>
        <FlexRight>
          <ul>
            <li>
              <a href="/">Quem Somos</a>
            </li>

            <li>
              <a href="/">
                <FaEnvelope />
                <span>Receber novidades</span>
              </a>
            </li>
          </ul>
        </FlexRight>
      </FlexRow>
    </TopBar>
  );
}

export default TopBarComponent;
