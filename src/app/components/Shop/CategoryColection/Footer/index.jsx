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
            <a>Informação adicional</a>
          </TabLi>
          <TabLi>
            <a>Avaliações (0)</a>
          </TabLi>
        </TabProductList>

        <TabPanelProduct>
          <TabAditionalInformation>
            <TableProduct>
              <tbody>
                <tr>
                  <th>Peso</th>
                  <td>300 g</td>
                </tr>
                <tr>
                  <th>Dimensões</th>
                  <td>20 × 15 × 15 cm</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>
                    <p>
                    Iphone5, Iphone5c, Iphone6, Iphone6(anti-impacto), Iphone6Plus, Iphone7(anti-impacto), Iphone7Plus(anti-impacto), Iphone8(anti-impacto), Iphone8Plus(anti-impacto), IphoneSE, IphoneX, IphoneXR, IphoneXR(anti-impacto), IphoneXS, IphoneXSMax, IphoneXSMax(anti-impacto), Iphone-11-(Anti-Impacto), Iphone-11-PRO-(Anti-Impacto), Iphone-11-PRO-Max-(Anti-Impacto), Zenfone3MaxTela5.2, Zenfone3MaxTela5.5, Zenfone3Tela5.2, Zenfone3Tela5.5, LenovoVibeK5, LenovoVibeK6, LenovoVibeK6Plus, LGK10, LGK102017, LGK11Alpha, LGk11Plus, LGK12Plus(antiimpacto), LGK8, LGQ6, LGXCam, LGXPower, MotoE4, MotoE4Plus, MotoE5Play(antiimpacto), MotoG2ªGeração, MotoG3ªGeração, MotoG4, MotoG4Play, MotoG4Plus, MotoG5, MotoG5Plus, MotoG5S, MotoG5SPlus, MotoG6, MotoG6Plus, MotoG7, MotoG7(antiimpacto), MotoG7Power(antiimpacto), MotoX(2ªGeração), MotoX4, MotoZPlay, MotoZ2Play, MotoZ3Play(antiimpacto), MotorolaOne, MotorolaOneVission(antiimpacto), GalaxyA10(antiimpacto), GalaxyA20(antiimpacto), GalaxyA3, GalaxyA30(antiimpacto), GalaxyA52017, GalaxyA50(antiimpacto), GalaxyA6Plus, GalaxyA72016, GalaxyA72017, GalaxyA72018, GalaxyA70(antiimpacto), GalaxyA82018, GalaxyA8Plus, GalaxyGranPrime, GalaxyJ1, GalaxyJ2, GalaxyJ2Prime, GalaxyJ3, GalaxyJ4, GalaxyJ4Plus, GalaxyJ5, GalaxyJ5(antiimpacto), GalaxyJ5Metal, GalaxyJ5Prime, GalaxyJ5Pro, GalaxyJ6, GalaxyJ6Plus, GalaxyJ7, GalaxyJ7Metal, GalaxyJ7Neo, GalaxyJ7Prime(antiimpacto), GalaxyJ7Prime2(antiimpacto), GalaxyJ8, GalaxyS10(antiimpacto), GalaxyS10e(antiimpacto), GalaxyS7, GalaxyS7Edge, GalaxyS8, GalaxyS8Plus, GalaxyS9, J2Pro2018(antiimpacto), Xiaomi8Lite(antiimpacto), XiaomiPocophoneF1, XiaomiRedmi6(antiimpacto), XiaomiRedmi7(antiimpacto), Zenfone4MaxTela5.2, Zenfone4MaxTela5.5, Zenfone4SelfieTela5.2, Zenfone4SelfieTela5.5, Zenfone52018, ZenfoneLive
                    </p>
                  </td>
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
