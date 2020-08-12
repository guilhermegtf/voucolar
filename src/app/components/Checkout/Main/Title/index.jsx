import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { TitleComponent, TitleInner, FlexCol, Breadcrumbs } from './styles';

function Title() {
  return (
    <TitleComponent>
      <TitleInner>
        <FlexCol>
          <Breadcrumbs>
            <a isHover={true}>Carrinho de compras</a>
            <span>
              <FiChevronRight />
            </span>
            <a isHover={false}>Detalhes da compra</a>
            <span>
              <FiChevronRight />
            </span>
            <a isHover={false}>Pedido completo</a>
          </Breadcrumbs>
        </FlexCol>
      </TitleInner>
    </TitleComponent>
  );
}

export default Title;
