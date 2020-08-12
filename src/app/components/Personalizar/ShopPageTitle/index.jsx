import React from 'react';

import { Container, PageTitleInner, FlexColLeft, FlexColRight, Breadcrumb, TextBreadcrumb } from './styles'

function ShopPageTitle (props) {
  const title = props.title;

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
            <TextBreadcrumb to={'/shop'} isHovered={false}>Shop</TextBreadcrumb>
            &nbsp;
            <span>/</span>
            &nbsp;
            <TextBreadcrumb isHovered={true}>{title}</TextBreadcrumb>
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
