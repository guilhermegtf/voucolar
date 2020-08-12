import React from 'react';

import { Container, PageTitleInner, FlexColLeft, FlexColRight, Breadcrumb, TextBreadcrumb } from './styles'

function ShopPageTitle (props) {
  const category = props.category;
  const subcategory = props.subcategory;

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
            <TextBreadcrumb to={`/produto-categoria/${category}`} isHovered={false}>{category}</TextBreadcrumb>
            &nbsp;
            <span>/</span>
            &nbsp;
            <TextBreadcrumb isHovered={false}>{subcategory}</TextBreadcrumb>
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
