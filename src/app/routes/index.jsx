import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import ValePresente from '../components/ValePresente';
import Empresas from '../components/Empresas';
import Checkout from '../components/Checkout';
import Demo from '../components/DemoPersonalizar';
import Personalizar from '../components/Personalizar'
import Shop from '../components/Shop'
import CategoryShop from '../components/Shop/CategoryShop'
import CategoryColection from '../components/Shop/CategoryColection'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/vale-presente" component={ValePresente} />
      <Route path="/personalizar" component={Demo} />
      <Route
        path="/brindes-personalizados-para-empresas"
        component={Empresas}
      />
      <Route path="/cart" component={Checkout} />
      <Route path="/produto-categoria/:category" component={Personalizar} />
      <Route path="/shop/:category/:product" component={Shop} />
      <Route path="/shop" component={CategoryShop} />
      <Route path="/shops/:category/:subcategory/:product" component={CategoryColection} />
    </Switch>
  );
}

export default Routes;
