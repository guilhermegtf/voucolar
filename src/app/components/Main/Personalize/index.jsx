import React from 'react';
import {
  Container,
  Card,
  ColInner,
  Banner,
  BannerInner,
  BannerLayer,
  TextBox,
  TextInner,
  DivImg,
  Title,
  Description,
  Button,
} from './styles';

import ImgAdesivos from '../../../assets/icon-1.png';
import ImgSqueeze from '../../../assets/termica.png';
import ImgQuadros from '../../../assets/fotos.png';
import ImgImas from '../../../assets/molduras.png';

function Personalize() {
  return (
    <Container>
      <Card>
        <ColInner>
          <Banner color={'#36b5b0'}>
            <BannerInner>
              <BannerLayer>
                <TextBox>
                  <TextInner>
                    <DivImg>
                      <div>
                        <img src={ImgAdesivos} alt="imagem adesivos" />
                      </div>
                    </DivImg>
                    <Title>Personalizar</Title>
                    <Description>
                      <strong>
                        <span>Adesivos</span>
                      </strong>
                    </Description>
                    <Button to="/produto-categoria/adesivos">
                      <span>Comprar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card>
        <ColInner>
          <Banner color={'#f09595'}>
            <BannerInner>
              <BannerLayer>
                <TextBox>
                  <TextInner>
                    <DivImg>
                      <div>
                        <img src={ImgSqueeze} alt="imagem adesivos" />
                      </div>
                    </DivImg>
                    <Title>Personalizar</Title>
                    <Description>
                      <strong>
                        <span>SQUEEZE</span>
                      </strong>
                    </Description>
                    <Button to="/produto-categoria/squeeze">
                      <span>Comprar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card>
        <ColInner>
          <Banner color={'#fff271'}>
            <BannerInner>
              <BannerLayer>
                <TextBox>
                  <TextInner>
                    <DivImg>
                      <div>
                        <img src={ImgQuadros} alt="imagem adesivos" />
                      </div>
                    </DivImg>
                    <Title>Personalizar</Title>
                    <Description>
                      <strong>
                        <span>Foto quadro</span>
                      </strong>
                    </Description>
                    <Button to="/produto-categoria/foto quadro">
                      <span>Comprar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>

      <Card>
        <ColInner>
          <Banner color={'#9dd8c8'}>
            <BannerInner>
              <BannerLayer>
                <TextBox>
                  <TextInner>
                    <DivImg>
                      <div>
                        <img src={ImgImas} alt="imagem imãs" />
                      </div>
                    </DivImg>
                    <Title>Personalizar</Title>
                    <Description>
                      <strong>
                        <span>imãs</span>
                      </strong>
                    </Description>
                    <Button to="/produto-categoria/imãs">
                      <span>Comprar</span>
                    </Button>
                  </TextInner>
                </TextBox>
              </BannerLayer>
            </BannerInner>
          </Banner>
        </ColInner>
      </Card>
    </Container>
  );
}

export default Personalize;
