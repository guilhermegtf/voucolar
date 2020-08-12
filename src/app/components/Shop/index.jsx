import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../Header';
import ShopPageTitle from '../Personalizar/ShopPageTitle'
import Main from './Main'
import FooterProduct from './Personalizar/Footer'
import Footer from '../Footer';

function Shop () {
  const { category, product } = useParams();

  return (
    <>
     <Header />
     <ShopPageTitle title={category} />
     <Main product={product} category={category} />
     <FooterProduct />
     <Footer />
    </>
  );
}

export default Shop;
