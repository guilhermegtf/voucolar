import React from 'react';

import Header from '../Header';
import ShopPageTitle from './ShopPageTitle'
import Main from './Main'
import Footer from '../Footer';
import { useParams } from 'react-router-dom';

function Personalizar () {
  const { category } = useParams()

  return (
    <>
      <Header />
      <ShopPageTitle title={category} />
      <Main title={category} />
      <Footer />
    </>
  );
}

export default Personalizar;
