import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {
  Container,
  ViewPort,
  Slider,
  Product,
  ColInner,
  ProductBox,
  BoxImage,
  BoxText,
  TitleCategory,
  TitleProduct,
  PriceWrapper,
  BoxImageLink
} from './styles';
import MockData from './mockdata';

function CompreAgora() {
  const [items] = useState(MockData);
  return (
    <Container>
      <ViewPort>
        <Slider>
          <Carousel
            slidesPerPage={4}
            slidesPerScroll={4}
            arrowLeft={<FaAngleLeft size={30} />}
            arrowRight={<FaAngleRight size={30} />}
            addArrowClickHandler
            arrows
            infinite
          >
            {items.map((item) => (
              <Product key={item.id}>
                <ColInner>
                  <ProductBox>
                    <BoxImage>
                      <div>
                        <BoxImageLink to={`/shops/${item.subcategory}/${item.category}/${item.name}`}>
                          <img src={item.image} />
                        </BoxImageLink>
                      </div>
                    </BoxImage>
                    <BoxText>
                      <div>
                        <TitleCategory>{item.category}</TitleCategory>
                        <TitleProduct>
                          <a href="">{item.name}</a>
                        </TitleProduct>
                      </div>
                      <PriceWrapper>
                        <span>
                          <span>{item.price}</span>
                        </span>
                      </PriceWrapper>
                    </BoxText>
                  </ProductBox>
                </ColInner>
              </Product>
            ))}
          </Carousel>
        </Slider>
      </ViewPort>
    </Container>
  );
}

export default CompreAgora;
