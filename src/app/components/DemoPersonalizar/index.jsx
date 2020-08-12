import React, { useState } from 'react';

import CropperCasePhone from '../CropperCasePhone';

function Demo() {
  const [image, setImage] = useState([]);
  return (
    <>
      Personalização
      <CropperCasePhone
        type="dev"
        phone="IPHONE-11-PRO-MAX-ANTI-IMPACTO"
        output={(image) => {
          if (image) setImage([image]);
        }}
      />
      {image.length !== 0 && (
        <>
          Produção
          <CropperCasePhone
            type="prod"
            url={image}
            phone="IPHONE-11-PRO-MAX-ANTI-IMPACTO"
          />
        </>
      )}
    </>
  );
}

export default Demo;
