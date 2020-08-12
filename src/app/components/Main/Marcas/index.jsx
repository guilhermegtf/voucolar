import React from 'react';
import {
  Container,
  ViewPort,
  Flickity,
  ProductCategory,
  ColInner,
  Product,
  BoxCategory,
  BoxImage,
  BoxText,
  ImageZoom,
} from './styles';

import ImgIphone from '../../../assets/Fundo-IPHONE.jpg';
import ImgSamsung from '../../../assets/Fundo-GALAXY.jpg';
import ImgAsus from '../../../assets/Fundo-ZENFONE.jpg';
import ImgXiaomi from '../../../assets/Fundo-XIAOMI.jpg';
import ImgMotorola from '../../../assets/Fundo-MOTO.jpg';
import ImgLG from '../../../assets/Fundo-LG.jpg';

function Marcas() {
  return (
    <Container>
      <ViewPort>
        <Flickity>
          <ProductCategory left={'100%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgIphone} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>Iphone</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>

          <ProductCategory left={'133.33%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgSamsung} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>Samsung</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>

          <ProductCategory left={'166.66%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgAsus} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>Asus</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>
        </Flickity>
      </ViewPort>

      <ViewPort>
        <Flickity>
          <ProductCategory left={'100%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgXiaomi} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>Xiaomi</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>

          <ProductCategory left={'133.33%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgMotorola} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>Motorola</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>

          <ProductCategory left={'166.66%'}>
            <ColInner>
              <Product>
                <BoxCategory>
                  <BoxImage>
                    <ImageZoom>
                      <img src={ImgLG} alt="" />
                    </ImageZoom>
                  </BoxImage>
                  <BoxText>
                    <div>
                      <h5>LG</h5>
                    </div>
                  </BoxText>
                </BoxCategory>
              </Product>
            </ColInner>
          </ProductCategory>
        </Flickity>
      </ViewPort>
    </Container>
  );
}

export default Marcas;
