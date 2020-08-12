import React from 'react';

import {
  ProductMain,
  RowContent,
  ProductGallery,
  ProductInfo,
  ProductFigure,
  FlickityViewPort,
  FlickitySlider,
  ProductGalleryDiv,
  ProductTitle,
  Divider,
  ProductPagePrice,
  FormCart,
  Variations,
  TdLabel,
  TdValue,
  VariationAddCart,
  Button,
  ProductShortDescription,
  QuantityButtons,
  MinusButton,
  InputQuantity,
  PlusButton
} from './styles'
import mockProduct from '../../CategoryShop/Main/mockProduct'

function Main (props) {
  const product = props.product;

  const listProduct = mockProduct.filter(prod => prod.Product === product)

  return (
    <ProductMain>
      <RowContent>
        <ProductGallery>
          <ProductFigure>
            <FlickityViewPort>
              <FlickitySlider>
                <ProductGalleryDiv>
                  <a>
                    <img src={listProduct[0].image} alt=""/>
                  </a>
                </ProductGalleryDiv>
              </FlickitySlider>
            </FlickityViewPort>
          </ProductFigure>
        </ProductGallery>
        <ProductInfo>
          <ProductTitle>
            {listProduct[0].Product}
          </ProductTitle>
          <Divider />
          <ProductPagePrice>
            <span> <span>R$</span>{listProduct[0].AltPrice}</span>
          </ProductPagePrice>
          <ProductShortDescription>
            <p>Tpu Flexível Transparente</p>
            <p>Bordas Anti Impacto</p>
            <p>Impressão UV de alta resolução, tinta ecológica, sem solventes</p>
          </ProductShortDescription>
          <FormCart>
            <Variations>
              <tbody>
                <tr>
                  <TdLabel>
                    <label>Modelo</label>
                  </TdLabel>
                  <TdValue>
                    <select id="modelo" class="" name="attribute_modelo" data-attribute_name="attribute_modelo" data-show_option_none="yes"><option value="">Escolha uma opção</option><option value="Iphone5">Iphone5</option><option value="Iphone5c">Iphone5c</option><option value="Iphone6">Iphone6</option><option value="Iphone6(anti-impacto)">Iphone6(anti-impacto)</option><option value="Iphone6Plus">Iphone6Plus</option><option value="Iphone7(anti-impacto)">Iphone7(anti-impacto)</option><option value="Iphone7Plus(anti-impacto)">Iphone7Plus(anti-impacto)</option><option value="Iphone8(anti-impacto)">Iphone8(anti-impacto)</option><option value="Iphone8Plus(anti-impacto)">Iphone8Plus(anti-impacto)</option><option value="IphoneSE">IphoneSE</option><option value="IphoneX">IphoneX</option><option value="IphoneXR">IphoneXR</option><option value="IphoneXR(anti-impacto)">IphoneXR(anti-impacto)</option><option value="IphoneXS">IphoneXS</option><option value="IphoneXSMax">IphoneXSMax</option><option value="IphoneXSMax(anti-impacto)">IphoneXSMax(anti-impacto)</option><option value="Iphone-11-(Anti-Impacto)">Iphone-11-(Anti-Impacto)</option><option value="Iphone-11-PRO-(Anti-Impacto)">Iphone-11-PRO-(Anti-Impacto)</option><option value="Zenfone3MaxTela5.2">Zenfone3MaxTela5.2</option><option value="Zenfone3MaxTela5.5">Zenfone3MaxTela5.5</option><option value="Zenfone3Tela5.2">Zenfone3Tela5.2</option><option value="Zenfone3Tela5.5">Zenfone3Tela5.5</option><option value="LenovoVibeK5">LenovoVibeK5</option><option value="LenovoVibeK6">LenovoVibeK6</option><option value="LenovoVibeK6Plus">LenovoVibeK6Plus</option><option value="LGK10">LGK10</option><option value="LGK102017">LGK102017</option><option value="LGK11Alpha">LGK11Alpha</option><option value="LGk11Plus">LGk11Plus</option><option value="LGK12Plus(antiimpacto)">LGK12Plus(antiimpacto)</option><option value="LGK8">LGK8</option><option value="LGQ6">LGQ6</option><option value="LGXCam">LGXCam</option><option value="LGXPower">LGXPower</option><option value="MotoE4">MotoE4</option><option value="MotoE4Plus">MotoE4Plus</option><option value="MotoE5Play(antiimpacto)">MotoE5Play(antiimpacto)</option><option value="MotoG2ªGeração">MotoG2ªGeração</option><option value="MotoG3ªGeração">MotoG3ªGeração</option><option value="MotoG4">MotoG4</option><option value="MotoG4Play">MotoG4Play</option><option value="MotoG4Plus">MotoG4Plus</option><option value="MotoG5">MotoG5</option><option value="MotoG5Plus">MotoG5Plus</option><option value="MotoG5S">MotoG5S</option><option value="MotoG5SPlus">MotoG5SPlus</option><option value="MotoG6">MotoG6</option><option value="MotoG6Plus">MotoG6Plus</option><option value="MotoG7">MotoG7</option><option value="MotoG7(antiimpacto)">MotoG7(antiimpacto)</option><option value="MotoG7Power(antiimpacto)">MotoG7Power(antiimpacto)</option><option value="MotoX(2ªGeração)">MotoX(2ªGeração)</option><option value="MotoX4">MotoX4</option><option value="MotoZPlay">MotoZPlay</option><option value="MotoZ2Play">MotoZ2Play</option><option value="MotoZ3Play(antiimpacto)">MotoZ3Play(antiimpacto)</option><option value="MotorolaOne">MotorolaOne</option><option value="MotorolaOneVission(antiimpacto)">MotorolaOneVission(antiimpacto)</option><option value="GalaxyA10(antiimpacto)">GalaxyA10(antiimpacto)</option><option value="GalaxyA20(antiimpacto)">GalaxyA20(antiimpacto)</option><option value="GalaxyA3">GalaxyA3</option><option value="GalaxyA30(antiimpacto)">GalaxyA30(antiimpacto)</option><option value="GalaxyA52017">GalaxyA52017</option><option value="GalaxyA50(antiimpacto)">GalaxyA50(antiimpacto)</option><option value="GalaxyA6Plus">GalaxyA6Plus</option><option value="GalaxyA72016">GalaxyA72016</option><option value="GalaxyA72017">GalaxyA72017</option><option value="GalaxyA72018">GalaxyA72018</option><option value="GalaxyA70(antiimpacto)">GalaxyA70(antiimpacto)</option><option value="GalaxyA82018">GalaxyA82018</option><option value="GalaxyA8Plus">GalaxyA8Plus</option><option value="GalaxyGranPrime">GalaxyGranPrime</option><option value="GalaxyJ1">GalaxyJ1</option><option value="GalaxyJ2">GalaxyJ2</option><option value="GalaxyJ2Prime">GalaxyJ2Prime</option><option value="GalaxyJ3">GalaxyJ3</option><option value="GalaxyJ4">GalaxyJ4</option><option value="GalaxyJ4Plus">GalaxyJ4Plus</option><option value="GalaxyJ5">GalaxyJ5</option><option value="GalaxyJ5(antiimpacto)">GalaxyJ5(antiimpacto)</option><option value="GalaxyJ5Metal">GalaxyJ5Metal</option><option value="GalaxyJ5Prime">GalaxyJ5Prime</option><option value="GalaxyJ5Pro">GalaxyJ5Pro</option><option value="GalaxyJ6">GalaxyJ6</option><option value="GalaxyJ6Plus">GalaxyJ6Plus</option><option value="GalaxyJ7">GalaxyJ7</option><option value="GalaxyJ7Metal">GalaxyJ7Metal</option><option value="GalaxyJ7Neo">GalaxyJ7Neo</option><option value="GalaxyJ7Prime(antiimpacto)">GalaxyJ7Prime(antiimpacto)</option><option value="GalaxyJ7Prime2(antiimpacto)">GalaxyJ7Prime2(antiimpacto)</option><option value="GalaxyJ8">GalaxyJ8</option><option value="GalaxyS10(antiimpacto)">GalaxyS10(antiimpacto)</option><option value="GalaxyS10e(antiimpacto)">GalaxyS10e(antiimpacto)</option><option value="GalaxyS7">GalaxyS7</option><option value="GalaxyS7Edge">GalaxyS7Edge</option><option value="GalaxyS8">GalaxyS8</option><option value="GalaxyS8Plus">GalaxyS8Plus</option><option value="GalaxyS9">GalaxyS9</option><option value="J2Pro2018(antiimpacto)">J2Pro2018(antiimpacto)</option><option value="Xiaomi8Lite(antiimpacto)">Xiaomi8Lite(antiimpacto)</option><option value="XiaomiPocophoneF1">XiaomiPocophoneF1</option><option value="XiaomiRedmi6(antiimpacto)">XiaomiRedmi6(antiimpacto)</option><option value="XiaomiRedmi7(antiimpacto)">XiaomiRedmi7(antiimpacto)</option><option value="Zenfone4MaxTela5.2">Zenfone4MaxTela5.2</option><option value="Zenfone4MaxTela5.5">Zenfone4MaxTela5.5</option><option value="Zenfone4SelfieTela5.2">Zenfone4SelfieTela5.2</option><option value="Zenfone4SelfieTela5.5">Zenfone4SelfieTela5.5</option><option value="Zenfone52018">Zenfone52018</option><option value="ZenfoneLive">ZenfoneLive</option></select>
                  </TdValue>
                </tr>
              </tbody>
            </Variations>
            <VariationAddCart>
              <div>
                <div>
                  <QuantityButtons>
                    <MinusButton type="Button" value="-" />
                    <InputQuantity type="number" step="1" value="1" />
                    <PlusButton type="button"  value="+" />
                  </QuantityButtons>
                  <Button to={'/cart'}>comprar</Button>
                </div>
              </div>
            </VariationAddCart>
          </FormCart>
        </ProductInfo>
      </RowContent>
    </ProductMain>
  );
}

export default Main
