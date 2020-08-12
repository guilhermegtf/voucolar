import React from 'react';

import {
  BannerComponent,
  BannerInner,
  Background,
  Overlay,
  BannerLayers,
  TextBox,
  TextLight,
} from './styles';

function Banner() {
  return (
    <BannerComponent>
      <BannerInner>
        <div>
          <Background />
          <Overlay />
        </div>
        <BannerLayers>
          <TextBox>
            <TextLight>
              <div>
                <h3>Brinde corporativo</h3>
                <p>
                  O presente ideal para aproximar sua marca com seu cliente e
                  colaborador!
                </p>
              </div>
            </TextLight>
          </TextBox>
        </BannerLayers>
      </BannerInner>
    </BannerComponent>
  );
}

export default Banner;
