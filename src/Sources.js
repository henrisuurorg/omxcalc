import React from 'react';

export const Sources = () => {
  return (
    <div className='Sources'>
      <h3 className='tekst4'>Sources</h3>
      <div className='sourceList'>
        <div className='source'>
          <h2 className='tekst5 justifyStart'>Prices and dividends</h2>
          <a href='https://finance.yahoo.com/' className='tekst5 justifyEnd'>
            <b>Yahoo Finance</b>
          </a>
        </div>
        <div className='source'>
          <h2 className='tekst5 justifyStart'>Quantities</h2>
          <a href='https://nasdaqbaltic.com/' className='tekst5 justifyEnd'>
            <b>Nasdaq Baltic</b>
          </a>
        </div>
        <div className='source'>
          <h2 className='tekst5 justifyStart'>Code</h2>
          <a href='https://www.w3schools.com' className='tekst5 justifyEnd'>
            <b>Github</b>
          </a>
        </div>
        <div className='source'>
          <h2 className='tekst5 justifyStart'>Equation</h2>
          <a
            href='https://www.nasdaqbaltic.com/files/tallinn/oigusaktid/ee_OMXT.pdf'
            className='tekst5 justifyEnd'
          >
            <b>OMXT documentation</b>
          </a>
        </div>
      </div>
    </div>
  );
};
