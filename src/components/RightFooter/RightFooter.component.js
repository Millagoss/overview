import React from 'react';
import { CgAddR } from 'react-icons/cg';
import { ImRadioUnchecked } from 'react-icons/im';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import RightFooterWrapper from './RightFooter.style';

const RightFooterComponent = () => {
  return (
    <RightFooterWrapper>
      <div className='head'>
        <div className='unresolved'>
          <h5>Tasks</h5>
          <div className='group-support'>
            <p className='soft'>Today</p>
          </div>
        </div>
        <a href=''>View all</a>
      </div>

      <div className='foot'>
        <div className='list'>
          <p className='soft'>Create new task</p>
          <span className='svg-container'>
            <CgAddR />
          </span>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <div>
            <ImRadioUnchecked />
            <p>Finish ticket update</p>
          </div>
          <button className='yellow button'>urgent</button>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <div>
            <ImRadioUnchecked />
            <p>Create new ticket example</p>
          </div>
          <button className='green button'>new</button>
        </div>
        <div className='underline'></div>
        <div className='list'>
          <div>
            <BsFillCheckCircleFill className='checked' />
            <p>Update ticket report</p>
          </div>
          <button className='default button'>default</button>
        </div>
      </div>
    </RightFooterWrapper>
  );
};

export default RightFooterComponent;
