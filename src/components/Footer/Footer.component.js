import React from 'react';

import RightFooterComponent from '../RightFooter/RightFooter.component';
import LeftFooterComponent from '../LeftFooter/LeftFooter.component';
import FooterWrapper from './Footer.style';

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <LeftFooterComponent />
      <RightFooterComponent />
    </FooterWrapper>
  );
};

export default FooterComponent;
