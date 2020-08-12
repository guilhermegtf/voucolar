import React from 'react';

import imgIphone from '../../../../assets/banner_corporativa_img_case.png';

import {
  SectionComponent,
  Content,
  Row,
  Column,
  ImageBox,
  ColInner,
  Text,
  ColInnerColored,
  SectionTitleContainer,
  DivForm,
  Campo,
  Button,
} from './styles';

function Section() {
  return (
    <SectionComponent>
      <Content>
        <Row>
          <Column>
            <div>
              <ImageBox>
                <img src={imgIphone} alt="" />
              </ImageBox>
            </div>
          </Column>
          <Column>
            <ColInner>
              <Text>
                Você pode criar capinhas para celular e outros itens
                personalizados mantendo&nbsp;
                <strong>sua marca na mão de seus clientes.</strong>
              </Text>
              <Text>
                Os&nbsp;<strong>squeezes</strong>&nbsp;e&nbsp;
                <strong>canecas</strong>&nbsp;são uma alternativa sustentável
                para substituir os copos plásticos e manter a visibilidade da
                sua marca.
              </Text>
            </ColInner>
          </Column>
          <Column>
            <ColInnerColored>
              <SectionTitleContainer>
                <h3>
                  <b></b>
                  <span>soicite um orçamento agora mesmo!</span>
                  <b></b>
                </h3>
              </SectionTitleContainer>
              <DivForm>
                <form>
                  <Campo>
                    <label>
                      <br />
                      Nome ou Razão Social (Obrigatório)
                      <br />
                      <span>
                        <input
                          type="text"
                          name="campo_nome_razao_social"
                          value=""
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Nome ou Razão Social"
                        />
                      </span>
                      <br />
                      <br />
                    </label>
                  </Campo>
                  <Campo>
                    <label>
                      <br />
                      Digite seu E-mail (Obrigatório)
                      <br />
                      <span>
                        <input
                          type="email"
                          name="campo_email"
                          value=""
                          size="40"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Digite seu E-mail"
                        />
                      </span>
                      <br />
                      <br />
                    </label>
                  </Campo>
                  <Campo>
                    <label>
                      <br />
                      Assunto (Obrigatório)
                      <br />
                      <span>
                        <input
                          type="text"
                          name="assunto"
                          value=""
                          size="40"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Assunto"
                        />
                      </span>
                      <br />
                      <br />
                    </label>
                  </Campo>
                  <Campo>
                    <label>
                      <br />
                      Mensagem (Obrigatório)
                      <br />
                      <span>
                        <textarea
                          name="mensagem"
                          cols="40"
                          rows="10"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Mensagem"
                        />
                      </span>
                      <br />
                      <br />
                    </label>
                  </Campo>
                  <Campo>
                    <label>
                      <br />
                      <Button type="submit" value="Enviar Contato" />
                      <br />
                    </label>
                  </Campo>
                </form>
              </DivForm>
            </ColInnerColored>
          </Column>
        </Row>
      </Content>
    </SectionComponent>
  );
}

export default Section;
