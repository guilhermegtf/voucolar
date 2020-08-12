import React from 'react';

import imgCapinha from '../../../../assets/capinhas-compress.png';

import {
  ColunaCapinha,
  ColInner,
  Banner,
  BannerInner,
  BannerLayers,
  TextBox,
  TextInner,
  DivImage,
  ImgInner,
  TextPersonalizar,
  TextCapinha,
  Separator,
  Button,
} from './styles';

function Capinha() {
  return (
    <ColunaCapinha>
      <ColInner>
        <Banner>
          <BannerInner>
            <BannerLayers>
              <TextBox>
                <TextInner>
                  <DivImage>
                    <ImgInner>
                      <img src={imgCapinha} alt="" />
                    </ImgInner>
                  </DivImage>
                  <TextPersonalizar>Personalizar</TextPersonalizar>
                  <TextCapinha>
                    <strong>
                      <span>Capinha</span>
                    </strong>
                  </TextCapinha>
                  <Separator>&nbsp;</Separator>
                  <Button to="/produto-categoria/marcas">
                    <span>Começar</span>
                  </Button>
                </TextInner>
              </TextBox>
            </BannerLayers>
          </BannerInner>
        </Banner>
      </ColInner>
    </ColunaCapinha>
  );
}

export default Capinha;
