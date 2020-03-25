import React, { useEffect, useState } from 'react';
import { OmxStockData } from './Omx';
import { lhvStockData1, lhvStockData2 } from './Lhv';
import { talStockData1, talStockData2 } from './Tal';
import { tkmStockData1, tkmStockData2 } from './Tkm';
import { tsmStockData1, tsmStockData2 } from './Tsm';
import { mrkStockData1, mrkStockData2 } from './Mrk';
import { tveStockData1, tveStockData2 } from './Tve';
import { sfgStockData1, sfgStockData2 } from './Sfg';
import { arcStockData1, arcStockdata2 } from './Arc';
import { bltStockData1, bltStockdata2 } from './Blt';
import { cpaStockData1, cpaStockdata2 } from './Cpa';
import { eegStockData1, eegStockdata2 } from './Eeg';
import { haeStockData1, haeStockdata2 } from './Hae';
import { ncnStockData1, ncnStockdata2 } from './Ncn';
import { pkgStockData1, pkgStockdata2 } from './Pkg';
import { prfStockData1, prfStockdata2 } from './Prf';
import { eftStockData1, eftStockData2 } from './Eft';

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

  const [arcStockNr, setArcStockNr] = useState();
  const [arcStockYnr, setArcStockYnr] = useState();
  const [arcStockOp, setArcStockOp] = useState();
  const [arcStockP, setArcStockP] = useState();
  const [arcStockDiv, setArcStockDiv] = useState();

  const [bltStockNr, setBltStockNr] = useState();
  const [bltStockYnr, setBltStockYnr] = useState();
  const [bltStockOp, setBltStockOp] = useState();
  const [bltStockP, setBltStockP] = useState();
  const [bltStockDiv, setBltStockDiv] = useState();

  const [cpaStockNr, setCpaStockNr] = useState();
  const [cpaStockYnr, setCpaStockYnr] = useState();
  const [cpaStockOp, setCpaStockOp] = useState();
  const [cpaStockP, setCpaStockP] = useState();
  const [cpaStockDiv, setCpaStockDiv] = useState();

  const [eegStockNr, setEegStockNr] = useState();
  const [eegStockYnr, setEegStockYnr] = useState();
  const [eegStockOp, setEegStockOp] = useState();
  const [eegStockP, setEegStockP] = useState();
  const [eegStockDiv, setEegStockDiv] = useState();

  const [eftStockNr, setEftStockNr] = useState();
  const [eftStockYnr, setEftStockYnr] = useState();
  const [eftStockOp, setEftStockOp] = useState();
  const [eftStockP, setEftStockP] = useState();
  const [eftStockDiv, setEftStockDiv] = useState();

  const [haeStockNr, setHaeStockNr] = useState();
  const [haeStockYnr, setHaeStockYnr] = useState();
  const [haeStockOp, setHaeStockOp] = useState();
  const [haeStockP, setHaeStockP] = useState();
  const [haeStockDiv, setHaeStockDiv] = useState();

  const [ncnStockNr, setNcnStockNr] = useState();
  const [ncnStockYnr, setNcnStockYnr] = useState();
  const [ncnStockOp, setNcnStockOp] = useState();
  const [ncnStockP, setNcnStockP] = useState();
  const [ncnStockDiv, setNcnStockDiv] = useState();

  const [pkgStockNr, setPkgStockNr] = useState();
  const [pkgStockYnr, setPkgStockYnr] = useState();
  const [pkgStockOp, setPkgStockOp] = useState();
  const [pkgStockP, setPkgStockP] = useState();
  const [pkgStockDiv, setPkgStockDiv] = useState();

  const [prfStockNr, setPrfStockNr] = useState();
  const [prfStockYnr, setPrfStockYnr] = useState();
  const [prfStockOp, setPrfStockOp] = useState();
  const [prfStockP, setPrfStockP] = useState();
  const [prfStockDiv, setPrfStockDiv] = useState();

  const [omxStockP, setOmxStockP] = useState();
  const [omxStockOp, setOmxStockOp] = useState();

  useEffect(() => {
    arcStockData1().then(data => {
      console.log('made request');
      setArcStockNr(data[0]);
      setArcStockYnr(data[1]);
    });
    arcStockData2().then(data => {
      console.log('made request');
      setArcStockOp(data[0]);
      setArcStockP(data[1]);
      setArcStockDiv(data[2]);
    });

    bltStockData1().then(data => {
      console.log('made request');
      setBltStockNr(data[0]);
      setBltStockYnr(data[1]);
    });
    bltStockData2().then(data => {
      console.log('made request');
      setBltStockOp(data[0]);
      setBltStockP(data[1]);
      setBltStockDiv(data[2]);
    });

    cpaStockData1().then(data => {
      console.log('made request');
      setCpaStockNr(data[0]);
      setCpaStockYnr(data[1]);
    });
    cpaStockData2().then(data => {
      console.log('made request');
      setCpaStockOp(data[0]);
      setCpaStockP(data[1]);
      setCpaStockDiv(data[2]);
    });

    eegStockData1().then(data => {
      console.log('made request');
      setEegStockNr(data[0]);
      setEegStockYnr(data[1]);
    });
    eegStockData2().then(data => {
      console.log('made request');
      setEegStockOp(data[0]);
      setEegStockP(data[1]);
      setEegStockDiv(data[2]);
    });

    eftStockData1().then(data => {
      console.log('made request');
      setEftStockNr(data[0]);
      setEftStockYnr(data[1]);
    });
    eftStockData2().then(data => {
      console.log('made request');
      setEftStockOp(data[0]);
      setEftStockP(data[1]);
      setEftStockDiv(data[2]);
    });

    haeStockData1().then(data => {
      console.log('made request');
      setHaeStockNr(data[0]);
      setHaeStockYnr(data[1]);
    });
    haeStockData2().then(data => {
      console.log('made request');
      setHaeStockOp(data[0]);
      setHaeStockP(data[1]);
      setHaeStockDiv(data[2]);
    });

    ncnStockData1().then(data => {
      console.log('made request');
      setNcnStockNr(data[0]);
      setNcnStockYnr(data[1]);
    });
    ncnStockData2().then(data => {
      console.log('made request');
      setNcnStockOp(data[0]);
      setNcnStockP(data[1]);
      setNcnStockDiv(data[2]);
    });

    pkgStockData1().then(data => {
      console.log('made request');
      setPkgStockNr(data[0]);
      setPkgStockYnr(data[1]);
    });
    pkgStockData2().then(data => {
      console.log('made request');
      setPkgStockOp(data[0]);
      setPkgStockP(data[1]);
      setPkgStockDiv(data[2]);
    });

    prfStockData1().then(data => {
      console.log('made request');
      setPrfStockNr(data[0]);
      setPrfStockYnr(data[1]);
    });
    prfStockData2().then(data => {
      console.log('made request');
      setPrfStockOp(data[0]);
      setPrfStockP(data[1]);
      setPrfStockDiv(data[2]);
    });

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
  }, []);

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
    const arc = {
      volume: arcStockNr,
      volumeYesterday: arcStockYnr,
      openingPrice: arcStockOp,
      price: arcStockP,
      dividend: arcStockDiv
    };
    console.log('arc', arc);
  }, [arcStockDiv]);

  useEffect(() => {
    const blt = {
      volume: bltStockNr,
      volumeYesterday: bltStockYnr,
      openingPrice: bltStockOp,
      price: bltStockP,
      dividend: bltStockDiv
    };
    console.log('blt', blt);
  }, [bltStockDiv]);

  useEffect(() => {
    const cpa = {
      volume: cpaStockNr,
      volumeYesterday: cpaStockYnr,
      openingPrice: cpaStockOp,
      price: cpaStockP,
      dividend: cpaStockDiv
    };
    console.log('cpa', cpa);
  }, [cpaStockDiv]);

  useEffect(() => {
    const eeg = {
      volume: eegStockNr,
      volumeYesterday: eegStockYnr,
      openingPrice: eegStockOp,
      price: eegStockP,
      dividend: eegStockDiv
    };
    console.log('eeg', eeg);
  }, [eegStockDiv]);

  useEffect(() => {
    const eft = {
      volume: eftStockNr,
      volumeYesterday: eftStockYnr,
      openingPrice: eftStockOp,
      price: eftStockP,
      dividend: eftStockDiv
    };
    console.log('eft', eft);
  }, [eftStockDiv]);

  useEffect(() => {
    const hae = {
      volume: haeStockNr,
      volumeYesterday: haeStockYnr,
      openingPrice: haeStockOp,
      price: haeStockP,
      dividend: haeStockDiv
    };
    console.log('hae', hae);
  }, [haeStockDiv]);

  useEffect(() => {
    const ncn = {
      volume: ncnStockNr,
      volumeYesterday: ncnStockYnr,
      openingPrice: ncnStockOp,
      price: ncnStockP,
      dividend: ncnStockDiv
    };
    console.log('ncn', ncn);
  }, [ncnStockDiv]);

  useEffect(() => {
    const pkg = {
      volume: pkgStockNr,
      volumeYesterday: pkgStockYnr,
      openingPrice: pkgStockOp,
      price: pkgStockP,
      dividend: pkgStockDiv
    };
    console.log('pkg', pkg);
  }, [pkgStockDiv]);

  useEffect(() => {
    const prf = {
      volume: prfStockNr,
      volumeYesterday: prfStockYnr,
      openingPrice: prfStockOp,
      price: prfStockP,
      dividend: prfStockDiv
    };
    console.log('prf', prf);
  }, [prfStockDiv]);

  useEffect(() => {
    const omx = {
      openingPrice: omxStockOp,
      price: omxStockP
    };
    console.log('omx', omx);
  }, [omxStockP, omxStockOp]);

  return <h1>Jaanika</h1>;
};
