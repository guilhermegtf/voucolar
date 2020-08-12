import React from 'react';

import imgIphone from '../../../../../assets/Iphone-5-Abstrato.jpg';

import {
  ColInfo,
  Form,
  ProductName,
  ProductPrice,
  ProductSubTotal,
  ProductRemove,
  ProductThumbnail,
  ProductNameGrid,
  ProductPriceGrid,
  ProductQuantity,
  MinusButton,
  Quantity,
  PlusButton,
  ProductSubTotalGrid,
  Actions,
} from './styles';

function ColumnInfo() {
  return (
        <ColInfo>
          <Form>
            <div>
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <ProductName colSpan={3}>Produto</ProductName>
                    <ProductPrice>Preço</ProductPrice>
                    <ProductPrice>Quantidade</ProductPrice>
                    <ProductSubTotal>Subtotal</ProductSubTotal>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <ProductRemove>
                      <a>×</a>
                    </ProductRemove>
                    <ProductThumbnail>
                      <a>
                        <img src={imgIphone} alt="" />
                      </a>
                    </ProductThumbnail>
                    <ProductNameGrid>
                      <a>Abstrato 01 - Iphone5</a>
                    </ProductNameGrid>
                    <ProductPriceGrid>
                      <span>R$ 49,90</span>
                    </ProductPriceGrid>
                    <ProductQuantity>
                      <div>
                        <MinusButton type="button" value="-"></MinusButton>
                        <Quantity
                          type="number"
                          step="1"
                          min="0"
                          max="999"
                          value="1"
                          size="4"
                        />
                        <PlusButton type="button" value="+" />
                      </div>
                    </ProductQuantity>
                    <ProductSubTotalGrid>
                      <span>R$ 49,90</span>
                    </ProductSubTotalGrid>
                  </tr>
                  <tr>
                    <Actions colSpan={6}>
                      <div>
                        <a href="">← Continuar comprando </a>
                      </div>
                      <button>Atualizar carrinho</button>
                    </Actions>
                  </tr>
                </tbody>
              </table>
            </div>
          </Form>
        </ColInfo>
  );
}

export default ColumnInfo;
