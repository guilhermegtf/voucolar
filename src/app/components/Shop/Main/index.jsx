import React, { useState } from 'react';

import {
  Container,
  RowContent ,
  ProductGalery,
  ProductImage,
  Figure,
  ViewPort,
  Slider,
  ProductGaleryImage,
  ProductInfo,
  Divider,
  ProductPrice,
  ProductDescription,
  ProductMeta,
  ProductSidebar

} from './styles'


import CropperCasePhone from '../Personalizar/Cropper'

import mockProduct from '../../Personalizar/Main/mockProduct'

function Main (props) {
  const [image, setImage] = useState([]);
  const product = props.product
  const category = props.category

  const productList = mockProduct.filter(item => {
    return item.Product === product
  })

  return (
    <Container>
      <RowContent>
        {/* Foto */}
        <ProductGalery>
          <ProductImage>
            <Figure>
              <ViewPort>
                <Slider>
                  <ProductGaleryImage>
                    <a>
                      { image.length !== 0 ? <img src={image} alt=""/> : <img src={productList[0].image2} alt=""/> }
                    </a>
                  </ProductGaleryImage>
                </Slider>
              </ViewPort>
            </Figure>
          </ProductImage>
        </ProductGalery>
        {/* Info */}
        <ProductInfo>
          <h1>{productList[0].Product}</h1>
          <Divider />
          <div>
            <ProductPrice>
              <span> <span>R$</span> {productList[0].AltPrice}</span>
            </ProductPrice>
          </div>
          <div>
            <ProductDescription>
              Squeeze em alumínio <br/>
              Capacidade: 750 ml <br/>
              Impressão por sublimação processo que garante mais qualidade das imagens. <br/>
              Resistente a água
            </ProductDescription>
          </div>
          <CropperCasePhone
          type="dev"
          phone="IPHONE-11-PRO-MAX-ANTI-IMPACTO"
          output={(image) => {
            if (image) setImage([image]);
          }}
          >Personalizar</CropperCasePhone>
          <ProductMeta>
            <span>Categoria: <a>{category}</a>
            </span>
          </ProductMeta>
        </ProductInfo>
        {/* Side */}
        <ProductSidebar />
      </RowContent>
    </Container>
  )
}

export default Main;
