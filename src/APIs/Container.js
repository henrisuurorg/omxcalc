import React, { useEffect, useState } from 'react';
import { OmxStockData } from './Omx';
import { lhvStockData1, lhvStockData2 } from './Lhv';
import { talStockData1, talStockData2 } from './Tal';
import { tkmStockData1, tkmStockData2 } from './Tkm';

export const HULL = () => {
  const [lhvStockNr, setlhvStockNr] = useState();
  const [lhvStockOp, setlhvStockOp] = useState();
  const [lhvStockP, setlhvStockP] = useState();
  const [lhvStockDiv, setLhvStockDiv] = useState();

  const [talStockNr, setTalStockNr] = useState();
  const [talStockOp, setTalStockOp] = useState();
  const [talStockP, setTalStockP] = useState();
  const [talStockDiv, setTalStockDiv] = useState();

  const [tkmStockNr, setTkmStockNr] = useState();
  const [tkmStockOp, setTkmStockOp] = useState();
  const [tkmStockP, setTkmStockP] = useState();
  const [tkmStockDiv, setTkmStockDiv] = useState();

  const [omxStockP, setOmxStockP] = useState();
  const [omxStockOp, setOmxStockOp] = useState();

  /*   lhvStockData1().then(data => setlhvStockNr(data));
  lhvStockData2().then(data => {
    setlhvStockOp(data[0]);
    setlhvStockP(data[1]);
    setLhvStockDiv(data[2]);
  });

  talStockData1().then(data => setTalStockNr(data));
  talStockData2().then(data => {
    setTalStockOp(data[0]);
    setTalStockP(data[1]);
    setTalStockDiv(data[2]);
  });

  tkmStockData1().then(data => setTkmStockNr(data));
  tkmStockData2().then(data => {
    setTkmStockOp(data[0]);
    setTkmStockP(data[1]);
    setTkmStockDiv(data[2]);
  });

  OmxStockData().then(data => {
    setOmxStockOp(data[0]);
    setOmxStockP(data[1]);
  }); */

  tkmStockData1().then();

  useEffect(() => {
    const lhv = {
      amount: lhvStockNr,
      openingPrice: lhvStockOp,
      price: lhvStockP,
      dividend: lhvStockDiv
    };
    console.log('lhv', lhv);
  }, [lhvStockNr, lhvStockOp, lhvStockP, lhvStockDiv]);

  useEffect(() => {
    const tal = {
      amount: talStockNr,
      openingPrice: talStockOp,
      price: talStockP,
      dividend: talStockDiv
    };
    console.log('tal', tal);
  }, [talStockNr, talStockOp, talStockP, talStockDiv]);

  useEffect(() => {
    const tkm = {
      amount: tkmStockNr,
      openingPrice: tkmStockOp,
      price: tkmStockP,
      dividend: tkmStockDiv
    };
    console.log('tkm', tkm);
  }, [tkmStockNr, tkmStockOp, tkmStockP, tkmStockDiv]);

  useEffect(() => {
    const omx = {
      openingPrice: omxStockOp,
      price: omxStockP
    };
    console.log('omx', omx);
  }, [omxStockP, omxStockOp]);

  return <h1>Jaanika</h1>;
};
