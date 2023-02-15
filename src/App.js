import React from 'react';

import NavbarComponent from './components/Navbar/Navbar.component';
import OverviewPage from './pages/Overview/Overview.page';

import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <NavbarComponent />
      <OverviewPage />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  gap: 40px;
`;
