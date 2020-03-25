import React, { useEffect, useState } from 'react';
import { OmxStockData } from './Omx';
import { lhvStockData1, lhvStockData2 } from './Lhv';
import { talStockData1, talStockData2 } from './Tal';
import { tkmStockData1, tkmStockData2 } from './Tkm';
import { tsmStockData1, tsmStockData2 } from './Tsm';
import { mrkStockData1, mrkStockData2 } from './Mrk';
import { tveStockData1, tveStockData2 } from './Tve';
import { sfgStockData1, sfgStockData2 } from './Sfg';

export const HULL = () => {
  const [lhvStockNr, setlhvStockNr] = useState();
  const [lhvStockYnr, setLhvStockYnr] = useState();
  const [lhvStockOp, setlhvStockOp] = useState();
  const [lhvStockP, setlhvStockP] = useState();
  const [lhvStockDiv, setLhvStockDiv] = useState();

  const [talStockNr, setTalStockNr] = useState();
  const [talStockYnr, setTalStockYnr] = useState();
  const [talStockOp, setTalStockOp] = useState();
  const [talStockP, setTalStockP] = useState();
  const [talStockDiv, setTalStockDiv] = useState();

  const [tkmStockNr, setTkmStockNr] = useState();
  const [tkmStockYnr, setTkmStockYnr] = useState();
  const [tkmStockOp, setTkmStockOp] = useState();
  const [tkmStockP, setTkmStockP] = useState();
  const [tkmStockDiv, setTkmStockDiv] = useState();

  const [tsmStockNr, setTsmStockNr] = useState();
  const [tsmStockYnr, setTsmStockYnr] = useState();
  const [tsmStockOp, setTsmStockOp] = useState();
  const [tsmStockP, setTsmStockP] = useState();
  const [tsmStockDiv, setTsmStockDiv] = useState();

  const [mrkStockNr, setMrkStockNr] = useState();
  const [mrkStockYnr, setMrkStockYnr] = useState();
  const [mrkStockOp, setMrkStockOp] = useState();
  const [mrkStockP, setMrkStockP] = useState();
  const [mrkStockDiv, setMrkStockDiv] = useState();

  const [tveStockNr, setTveStockNr] = useState();
  const [tveStockYnr, setTveStockYnr] = useState();
  const [tveStockOp, setTveStockOp] = useState();
  const [tveStockP, setTveStockP] = useState();
  const [tveStockDiv, setTveStockDiv] = useState();

  const [sfgStockNr, setSfgStockNr] = useState();
  const [sfgStockYnr, setSfgStockYnr] = useState();
  const [sfgStockOp, setSfgStockOp] = useState();
  const [sfgStockP, setSfgStockP] = useState();
  const [sfgStockDiv, setSfgStockDiv] = useState();

  const [omxStockP, setOmxStockP] = useState();
  const [omxStockOp, setOmxStockOp] = useState();

  /*   useEffect(() => {
    sfgStockData1().then(data => {
      console.log('made request');
      setSfgStockNr(data[0]);
      setSfgStockYnr(data[1]);
    });
    sfgStockData2().then(data => {
      console.log('made request');
      setSfgStockOp(data[0]);
      setSfgStockP(data[1]);
      setSfgStockDiv(data[2]);
    });

    tveStockData1().then(data => {
      console.log('made request');
      setTveStockNr(data[0]);
      setTveStockYnr(data[1]);
    });
    tveStockData2().then(data => {
      console.log('made request');
      setTveStockOp(data[0]);
      setTveStockP(data[1]);
      setTveStockDiv(data[2]);
    });

    mrkStockData1().then(data => {
      console.log('made request');
      setMrkStockNr(data[0]);
      setMrkStockYnr(data[1]);
    });
    mrkStockData2().then(data => {
      console.log('made request');
      setMrkStockOp(data[0]);
      setMrkStockP(data[1]);
      setMrkStockDiv(data[2]);
    });

    lhvStockData1().then(data => {
      console.log('made request');
      setlhvStockNr(data[0]);
      setLhvStockYnr(data[1]);
    });
    lhvStockData2().then(data => {
      console.log('made request');
      setlhvStockOp(data[0]);
      setlhvStockP(data[1]);
      setLhvStockDiv(data[2]);
    });

    talStockData1().then(data => {
      console.log('made request');
      setTalStockNr(data[0]);
      setTalStockYnr(data[1]);
    });
    talStockData2().then(data => {
      console.log('made request');
      setTalStockOp(data[0]);
      setTalStockP(data[1]);
      setTalStockDiv(data[2]);
    });

    tkmStockData1().then(data => {
      console.log('made request');
      setTkmStockNr(data[0]);
      setTkmStockYnr(data[1]);
    });
    tkmStockData2().then(data => {
      console.log('made request');
      setTkmStockOp(data[0]);
      setTkmStockP(data[1]);
      setTkmStockDiv(data[2]);
    });

    tsmStockData1().then(data => {
      console.log('made request');
      setTsmStockNr(data[0]);
      setTsmStockYnr(data[1]);
    });
    tsmStockData2().then(data => {
      console.log('made request');
      setTsmStockOp(data[0]);
      setTsmStockP(data[1]);
      setTsmStockDiv(data[2]);
    });

    OmxStockData().then(data => {
      console.log('made request');
      setOmxStockOp(data[0]);
      setOmxStockP(data[1]);
    });
  }, []); */

  useEffect(() => {
    const lhv = {
      volume: lhvStockNr,
      volumeYesterday: lhvStockYnr,
      openingPrice: lhvStockOp,
      price: lhvStockP,
      dividend: lhvStockDiv
    };
    console.log('lhv', lhv);
  }, [lhvStockDiv]);

  useEffect(() => {
    const tal = {
      volume: talStockNr,
      volumeYesterday: talStockYnr,
      openingPrice: talStockOp,
      price: talStockP,
      dividend: talStockDiv
    };
    console.log('tal', tal);
  }, [talStockDiv]);

  useEffect(() => {
    const tkm = {
      volume: tkmStockNr,
      volumeYesterday: tkmStockYnr,
      openingPrice: tkmStockOp,
      price: tkmStockP,
      dividend: tkmStockDiv
    };
    console.log('tkm', tkm);
  }, [tkmStockDiv]);

  useEffect(() => {
    const tsm = {
      volume: tsmStockNr,
      volumeYesterday: tsmStockYnr,
      openingPrice: tsmStockOp,
      price: tsmStockP,
      dividend: tsmStockDiv
    };
    console.log('tsm', tsm);
  }, [tsmStockDiv]);

  useEffect(() => {
    const mrk = {
      volume: mrkStockNr,
      volumeYesterday: mrkStockYnr,
      openingPrice: mrkStockOp,
      price: mrkStockP,
      dividend: mrkStockDiv
    };
    console.log('mrk', mrk);
  }, [mrkStockDiv]);

  useEffect(() => {
    const tve = {
      volume: tveStockNr,
      volumeYesterday: tveStockYnr,
      openingPrice: tveStockOp,
      price: tveStockP,
      dividend: tveStockDiv
    };
    console.log('tve', tve);
  }, [tveStockDiv]);

  useEffect(() => {
    const sfg = {
      volume: sfgStockNr,
      volumeYesterday: sfgStockYnr,
      openingPrice: sfgStockOp,
      price: sfgStockP,
      dividend: sfgStockDiv
    };
    console.log('sfg', sfg);
  }, [sfgStockDiv]);

  useEffect(() => {
    const omx = {
      openingPrice: omxStockOp,
      price: omxStockP
    };
    console.log('omx', omx);
  }, [omxStockP, omxStockOp]);

  return <h1>Jaanika</h1>;
};
