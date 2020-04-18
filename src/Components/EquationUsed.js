import React from 'react';
import { Equation } from '../Equation';

export const EquationUsed = () => {
  return (
    <div className='EquationUsed'>
      <h2 className='tekst4'>Index equation</h2>
      <Equation />
      <div className='parameters'>
        <h3 className='parameter'>OMXT = OMX Tallinn index values</h3>
        <h3 className='parameter'>
          q<sub>i</sub> = quantity of stock <i>i</i>
        </h3>
        <h3 className='parameter'>
          p<sub>i</sub> = price of stock <i>i</i>
        </h3>
        <h3 className='parameter'>t = time of calculation</h3>
        <h3 className='parameter'>n = number of stocks in the index</h3>
        <h3 className='parameter'>
          d<sub>i</sub> = dividend parameter of stock <i>i</i>
        </h3>
      </div>
    </div>
  );
};
