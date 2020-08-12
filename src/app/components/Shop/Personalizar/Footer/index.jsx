import React from 'react';
import {
  ProductFooter,
  TabsProduct,
  TabProductList,
  TabLi,
  TabPanelProduct,
  TabAditionalInformation,
  TableProduct,
  TableReview,
  Reviews,
  Coments
} from './styles'

function FooterProduct () {
  return (
    <ProductFooter>
      <TabsProduct>
        <TabProductList>
          <TabLi>
            <a>Descrição</a>
          </TabLi>
          <TabLi>
            <a>Informação adicional</a>
          </TabLi>
          <TabLi>
            <a>Avaliações (0)</a>
          </TabLi>
        </TabProductList>

        <TabPanelProduct>
          <div>
            <p>Personalize Squeeze Alumínio Escovado 750 ml.</p>
          </div>
        </TabPanelProduct>
        <TabPanelProduct>
          <TabAditionalInformation>
            <TableProduct>
              <tbody>
                <tr>
                  <th>Peso</th>
                  <td>600 g</td>
                </tr>
                <tr>
                  <th>Dimensões</th>
                  <td>20 × 15 × 9 cm</td>
                </tr>
              </tbody>
            </TableProduct>
          </TabAditionalInformation>
        </TabPanelProduct>
        <TabPanelProduct>
        <TableReview>
            <Reviews>
              <Coments>
                <h3>Avaliações</h3>
                <p>Não há avaliações ainda.</p>
              </Coments>
            </Reviews>
          </TableReview>
        </TabPanelProduct>
      </TabsProduct>
    </ProductFooter>
  )
}

export default FooterProduct;
