import React from 'react';

import LeftFooterWrapper from './LeftFooter.style';

const LeftFooterComponent = () => {
  return (
    <LeftFooterWrapper>
      <div className='head'>
        <div className='unresolved'>
          <h5>Unresolved tickets</h5>
          <div className='group-support'>
            <p>Group:</p>
            <span>Support</span>
          </div>
        </div>
        <a href=''>View details</a>
      </div>
      <div className='foot'>
        <div className='list'>
          <p>Waiting on Feature Request</p>
          <span>4228</span>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <p>Awaiting Customer Response</p>
          <span>1005</span>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <p>Awaiting Developer Fix</p>
          <span>914</span>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <p>Pending</p>
          <span>281</span>
        </div>
      </div>
    </LeftFooterWrapper>
  );
};

export default LeftFooterComponent;
