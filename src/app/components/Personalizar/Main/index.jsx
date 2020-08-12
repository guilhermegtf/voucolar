import React from 'react';

import {
  Container,
  CategoryPageRow,
  ColRight,
  ShopSidebar,
  ProductCategories,
  CategoriesList,
  CategoriesListItem,
  ColLeft,
  BoxImage,
  ColInner,
  ProductBox,
  ProductContainer,
  ProductRow,
  BoxText,
  ProductCategory,
  ProductName,
  Price,
  ProductLink
} from './styles'

  import mockList from './mockList'
  import mockProduct from './mockProduct'


  function Main (props) {
    const title = props.title;

    return (
      <Container>
        <CategoryPageRow>
          <ColRight>
            <ShopSidebar>
            <ProductCategories>
              <span>Categorias</span>
              <div></div>
              <CategoriesList>
                {mockList.map((item => (
                  item.category.toUpperCase() === title.toUpperCase() ?
                  <li key={item.id}>
                  <CategoriesListItem to={`/produto-categoria/${item.category}`} isHovered={true}>{item.category}</CategoriesListItem>
                  </li> : <li key={item.id}>
                  <CategoriesListItem to={`/produto-categoria/${item.category}`} isHovered={false}>{item.category}</CategoriesListItem>
                  </li>
                  )))}
                </CategoriesList>
              </ProductCategories>
              </ShopSidebar>
            </ColRight>
            <ColLeft>
              <div>
                <ProductRow>
                  {mockProduct.map((item => (
                    item.category.toUpperCase() === title.toUpperCase() &&
                    <ProductContainer key={item.id}>
                    <ColInner>
                      <ProductBox>
                        <BoxImage>
                          <div>
                            <a>
                              <img src={item.image} alt="Squeeze"/>
                            </a>
                          </div>
                        </BoxImage>
                        <BoxText>
                          <div>
                            <ProductCategory>{item.category}</ProductCategory>
                            <ProductName>
                              <ProductLink to={`/shop/${item.category}/${item.Product}`}>{item.Product}</ProductLink>
                            </ProductName>
                          </div>
                          <div>
                            <Price>
                              <span>{item.Price}</span>
                            </Price>
                          </div>
                        </BoxText>
                      </ProductBox>
                    </ColInner>
                  </ProductContainer>
                  )))}
                </ProductRow>
              </div>
            </ColLeft>
          </CategoryPageRow>
        </Container>
        );
      }

      export default Main;
