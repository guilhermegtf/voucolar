import React from 'react';
import { AiFillTag } from 'react-icons/ai'

import { 
  ColLatrals, 
  ColInner,
  Table,
  TitleTable,
  ShopTable,
  Subtotal,
  ShippingTotals,
  OrderTotal,
  ProceedCheckout,
  FormCupom
} from './styles';

function ColumnLaterals() {
  return (
    <ColLatrals>
      <ColInner>
        <div>
          <Table cellSpacing={0} >
            <thead>
              <tr>
                <TitleTable colSpan={2}>Total no carrinho</TitleTable>
              </tr>
            </thead>
          </Table>
          <ShopTable cellSpacing={0}>
            <tbody>
              <Subtotal>
                <th>Subtotal</th>
                <td>
                  <span>R$ 49,90</span>
                </td>
              </Subtotal>
              <ShippingTotals>
                <td colSpan={2}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Entrega</th>
                        <td>
					                  Digite seu endereço para ver as opções de entrega.
                            <form>
                              <a href="">Calcular entrega</a>
                            </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </ShippingTotals>
              <OrderTotal>
                <th>Total</th>
                <td>
                  <strong>
                    <span>R$ 49,90</span>
                  </strong>
                </td>
              </OrderTotal>
            </tbody>
          </ShopTable>
          <ProceedCheckout>
            <a href="">Fechar compra</a>
          </ProceedCheckout>
        </div>
        <FormCupom>
          <div>
            <h3>
              <AiFillTag size={18}/>
              Cupom
            </h3>
            <input type="text" placeholder="Código do cupom" />
            <input type="submit" value="Aplicar cupom"/>
          </div>
        </FormCupom>
      </ColInner>
    </ColLatrals>
    );
  }
  
  export default ColumnLaterals;
  