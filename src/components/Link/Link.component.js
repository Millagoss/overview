import React from 'react';

import styled from 'styled-components';

const LinkComponent = ({ label, icon, index }) => {
  return (
    <LinkWrapper className={index === 0 && 'active'}>
      <div>
        <span className='icon'>{icon}</span>
        <p className='label'>{label}</p>
      </div>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: #a4a6b3;
  div {
    width: 80%;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 0 auto;
  }
`;

export default LinkComponent;
