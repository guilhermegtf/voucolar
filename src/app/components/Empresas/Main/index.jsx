import React from 'react';

import SectionTitle from '../../Main/SectionTitle/index.jsx';
import Banner from './Banner/index.jsx';
import Section from './Section/index.jsx';
import mockList from './mockList'

import {
  MainComponent,
  Content,
  RowMain,
  Large12Col,
  ColInner,
  Porfolio,
  Card,
  CardColInner,
  Plain,
  PorfolioBox,
  BoxImage,
  BoxText,
  BoxTextInner
} from './styles';

function Main() {
  return (
    <MainComponent>
      <Content>
        <RowMain>
          <Large12Col>
            <ColInner>
              <Banner />
              <Section />
              <SectionTitle title="Algumas empresas que já criaram conosco!" />
              <Porfolio>
                {mockList.map((list => (
                  <Card key={list.id}>
                  <CardColInner>
                    <Plain>
                      <PorfolioBox>
                        <BoxImage>
                          <div>
                            <img src={list.photo} alt=""/>
                          </div>
                        </BoxImage>
                        <BoxText>
                          <BoxTextInner>
                            <h6>{list.name}</h6>
                          </BoxTextInner>
                        </BoxText>
                      </PorfolioBox>
                    </Plain>
                  </CardColInner>
                </Card>
                )
                ))}
              </Porfolio>
            </ColInner>
          </Large12Col>
        </RowMain>
      </Content>
    </MainComponent>
  );
}

export default Main;
