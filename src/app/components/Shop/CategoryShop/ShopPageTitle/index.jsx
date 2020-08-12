import React from 'react';

import { Container, PageTitleInner, FlexColLeft, FlexColRight, Breadcrumb, TextBreadcrumb } from './styles'

function ShopPageTitle () {

  return (
    <Container>
    <PageTitleInner>
      <FlexColLeft>
        <div>
          <Breadcrumb>
            <TextBreadcrumb to={'/'} isHovered={false}>Início</TextBreadcrumb>
            &nbsp;
            <span>/</span>
            &nbsp;
            <TextBreadcrumb isHovered={true}>Shop</TextBreadcrumb>
            &nbsp;
          </Breadcrumb>
        </div>
      </FlexColLeft>
    <FlexColRight>

    </FlexColRight>

    </PageTitleInner>
    </Container>
    )
  }

  export default ShopPageTitle;
