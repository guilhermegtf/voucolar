import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../Header';
import ShopPageTitle from './ShopPageTitle'
import Main from './Main'
import FooterProduct from './Footer'
import Footer from '../../Footer';

function CategoryColection () {
  const { category, subcategory, product } = useParams();

  return (
    <>
     <Header />
     <ShopPageTitle category={category} subcategory={subcategory} />
     <Main product={product}/>
     <FooterProduct />
     <Footer />
    </>
  );
}

export default CategoryColection;
