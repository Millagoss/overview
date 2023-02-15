import React from 'react';

const StatusComponent = () => {
  return (
    <section className='box-container'>
      <div className='box'>
        <p>Unresolved</p>
        <span>60</span>
      </div>
      <div className='box' style={{ border: '1px #3751FF solid' }}>
        <p className='active-para'>Overdue</p>
        <span className='active-para'>16</span>
      </div>
      <div className='box'>
        <p>Open</p>
        <span>43</span>
      </div>
      <div className='box'>
        <p>On hold</p>
        <span>64</span>
      </div>
    </section>
  );
};

export default StatusComponent;
