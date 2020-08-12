import React from 'react';

import imgCapinha from '../../../../assets/foto-de-capa-compress-2.png';
import imgHand from '../../../../assets/icon-4.png';
import imgFutebol from '../../../../assets/banner-cases-futebol-compress.png';
import imgCanecas from '../../../../assets/canecas-compress.png';

import {
  Card,
  ColInner,
  Banner,
  BannerInner,
  BannerLayer,
  TextBox,
  TextInner,
  DivImg,
  ImgInner,
  TextPersonalizar,
  TextTitle,
  Button,
} from './styles';

function OtherCards() {
  return (
    <>
      <Card left={'354px'} top={'0px'}>
        <ColInner>
          <Banner bckcolor={'#36b5b0'}>
            <BannerInner>
              <BannerLayer>
                <TextBox width={'100%'}>
                  <TextInner>
                    <DivImg width={'77%'}>
                      <ImgInner margin={'-91px 0px -45px 0px'}>
                        <img src={imgCapinha} alt="" />
                      </ImgInner>
                    </DivImg>
                    <TextPersonalizar>&nbsp;</TextPersonalizar>
                    <TextTitle>
                      <strong>
                        <span>Coleções</span>
                      </strong>
                    </TextTitle>
                    <Button to="/produto-categoria/Coleções">
                      <span>Começar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card left={'709px'} top={'0px'}>
        <ColInner>
          <Banner bckcolor={'#9dd8c8'}>
            <BannerInner>
              <BannerLayer>
                <TextBox width={'75%'}>
                  <TextInner>
                    <DivImg width={'50%'}>
                      <ImgInner margin={'-45px 0px 12px 0px'}>
                        <img src={imgHand} alt="" />
                      </ImgInner>
                    </DivImg>
                    <TextPersonalizar>Personalizar</TextPersonalizar>
                    <TextTitle>
                      <strong>
                        <span>Pop socket</span>
                      </strong>
                    </TextTitle>
                    <Button to="/produto-categoria/Pop socket">
                      <span>Começar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card left={'354px'} top={'308px'}>
        <ColInner>
          <Banner bckcolor={'#ffdbc5'}>
            <BannerInner>
              <BannerLayer>
                <TextBox width={'100%'}>
                  <TextInner>
                    <DivImg width={'43%'}>
                      <ImgInner margin={'-38px 0px 0px 0px'}>
                        <img src={imgFutebol} alt="" />
                      </ImgInner>
                    </DivImg>
                    <TextPersonalizar>Personalizar</TextPersonalizar>
                    <TextTitle>
                      <strong>
                        <span>time de futebol</span>
                      </strong>
                    </TextTitle>
                    <Button to="/produto-categoria/Coleções">
                      <span>Começar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card left={'709px'} top={'308px'}>
        <ColInner>
          <Banner bckcolor={'#fff271'}>
            <BannerInner>
              <BannerLayer>
                <TextBox width={'100%'}>
                  <TextInner>
                    <DivImg width={'54%'}>
                      <ImgInner margin={'-71px 0px 0px 0px'}>
                        <img src={imgCanecas} alt="" />
                      </ImgInner>
                    </DivImg>
                    <TextPersonalizar>Personalizar</TextPersonalizar>
                    <TextTitle>
                      <strong>
                        <span>Canecas</span>
                      </strong>
                    </TextTitle>
                    <Button to="/produto-categoria/Caneca">
                      <span>Começar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>
    </>
  );
}

export default OtherCards;
