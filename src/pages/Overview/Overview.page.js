import React from 'react';

import ChartComponent from '../../components/Chart/Chart.Component';
import FooterComponent from '../../components/Footer/Footer.component';
import StatusComponent from '../../components/Status/Status.component';
import HeaderComponent from '../../components/Header/Header.component';
import OverviewWrapper from './Overview.style';

const OverviewPage = () => {
  return (
    <OverviewWrapper>
      <HeaderComponent />
      <StatusComponent />
      <ChartComponent />
      <FooterComponent />
    </OverviewWrapper>
  );
};

export default OverviewPage;
