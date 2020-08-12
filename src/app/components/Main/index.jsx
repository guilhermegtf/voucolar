import React from 'react';
import { MainComponent } from './styles';

import Cards from './Cards';
import Infos from './Infos';
import SectionTitle from './SectionTitle';
import CompreAgora from './CompreAgora';
import Personalize from './Personalize';
import Marcas from './Marcas';

function Main() {
  return (
    <MainComponent>
      <Cards />
      <Infos />
      <SectionTitle title="Compre agora" />
      <CompreAgora />
      <SectionTitle title="Personalize mais" />
      <Personalize />
      <SectionTitle title="Por marca" />
      <Marcas />
      <SectionTitle title="Siga no instagram" />
    </MainComponent>
  );
}

export default Main;
