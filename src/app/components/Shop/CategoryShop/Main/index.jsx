import React from 'react';
import ReactPaginate from 'react-paginate';
import "./styles.css";

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
  Image,
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


  function Main () {

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
                   <li key={item.id}>
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

                    <ProductContainer key={item.id}>
                    <ColInner>
                      <ProductBox>
                        <BoxImage>
                          <div>
                            <Image to={`/shops/${item.subcategory}/${item.category}/${item.Product}`}>
                              <img src={item.image} alt={item.Product}/>
                            </Image>
                          </div>
                        </BoxImage>
                        <BoxText>
                          <div>
                            <ProductCategory>{item.category}</ProductCategory>
                            <ProductName>
                              <ProductLink to={`/shops/${item.subcategory}/${item.category}/${item.Product}`}>{item.Product}</ProductLink>
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
              <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={22}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </ColLeft>
          </CategoryPageRow>
        </Container>
        );
      }

export default Main;
