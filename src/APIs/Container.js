import React, { useEffect, useState } from 'react';
import { OmxStockData } from './Omx';
import { lhvStockData1, lhvStockData2 } from './Lhv';
import { talStockData1, talStockData2 } from './Tal';
import { tkmStockData1, tkmStockData2 } from './Tkm';
import { tsmStockData1, tsmStockData2 } from './Tsm';
import { mrkStockData1, mrkStockData2 } from './Mrk';
import { tveStockData1, tveStockData2 } from './Tve';
import { sfgStockData1, sfgStockData2 } from './Sfg';
import { arcStockData1, arcStockData2 } from './Arc';
import { bltStockData1, bltStockData2 } from './Blt';
import { cpaStockData1, cpaStockData2 } from './Cpa';
import { eegStockData1, eegStockData2 } from './Eeg';
import { haeStockData1, haeStockData2 } from './Hae';
import { ncnStockData1, ncnStockData2 } from './Ncn';
import { pkgStockData1, pkgStockData2 } from './Pkg';
import { prfStockData1, prfStockData2 } from './Prf';
import { eftStockData1, eftStockData2 } from './Eft';

/* import { OmxIndex } from './Calculations'; */

export const HULL = () => {
  /*   OmxIndex(); */

  let isLoading = true;
  /*   if () */

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
      setArcStockNr(data[0]);
      setArcStockYnr(data[1]);
    });
    arcStockData2().then(data => {
      setArcStockOp(data[0]);
      setArcStockP(data[1]);
      setArcStockDiv(data[2]);
    });

    bltStockData1().then(data => {
      setBltStockNr(data[0]);
      setBltStockYnr(data[1]);
    });
    bltStockData2().then(data => {
      setBltStockOp(data[0]);
      setBltStockP(data[1]);
      setBltStockDiv(data[2]);
    });

    cpaStockData1().then(data => {
      setCpaStockNr(data[0]);
      setCpaStockYnr(data[1]);
    });
    cpaStockData2().then(data => {
      setCpaStockOp(data[0]);
      setCpaStockP(data[1]);
      setCpaStockDiv(data[2]);
    });

    eegStockData1().then(data => {
      setEegStockNr(data[0]);
      setEegStockYnr(data[1]);
    });
    eegStockData2().then(data => {
      setEegStockOp(data[0]);
      setEegStockP(data[1]);
      setEegStockDiv(data[2]);
    });

    eftStockData1().then(data => {
      setEftStockNr(data[0]);
      setEftStockYnr(data[1]);
    });
    eftStockData2().then(data => {
      setEftStockOp(data[0]);
      setEftStockP(data[1]);
      setEftStockDiv(data[2]);
    });

    haeStockData1().then(data => {
      setHaeStockNr(data[0]);
      setHaeStockYnr(data[1]);
    });
    haeStockData2().then(data => {
      setHaeStockOp(data[0]);
      setHaeStockP(data[1]);
      setHaeStockDiv(data[2]);
    });

    ncnStockData1().then(data => {
      setNcnStockNr(data[0]);
      setNcnStockYnr(data[1]);
    });
    ncnStockData2().then(data => {
      setNcnStockOp(data[0]);
      setNcnStockP(data[1]);
      setNcnStockDiv(data[2]);
    });

    pkgStockData1().then(data => {
      setPkgStockNr(data[0]);
      setPkgStockYnr(data[1]);
    });
    pkgStockData2().then(data => {
      setPkgStockOp(data[0]);
      setPkgStockP(data[1]);
      setPkgStockDiv(data[2]);
    });

    prfStockData1().then(data => {
      setPrfStockNr(data[0]);
      setPrfStockYnr(data[1]);
    });
    prfStockData2().then(data => {
      setPrfStockOp(data[0]);
      setPrfStockP(data[1]);
      setPrfStockDiv(data[2]);
    });

    sfgStockData1().then(data => {
      setSfgStockNr(data[0]);
      setSfgStockYnr(data[1]);
    });
    sfgStockData2().then(data => {
      setSfgStockOp(data[0]);
      setSfgStockP(data[1]);
      setSfgStockDiv(data[2]);
    });

    tveStockData1().then(data => {
      setTveStockNr(data[0]);
      setTveStockYnr(data[1]);
    });
    tveStockData2().then(data => {
      setTveStockOp(data[0]);
      setTveStockP(data[1]);
      setTveStockDiv(data[2]);
    });

    mrkStockData1().then(data => {
      setMrkStockNr(data[0]);
      setMrkStockYnr(data[1]);
    });
    mrkStockData2().then(data => {
      setMrkStockOp(data[0]);
      setMrkStockP(data[1]);
      setMrkStockDiv(data[2]);
    });

    lhvStockData1().then(data => {
      setlhvStockNr(data[0]);
      setLhvStockYnr(data[1]);
    });
    lhvStockData2().then(data => {
      setlhvStockOp(data[0]);
      setlhvStockP(data[1]);
      setLhvStockDiv(data[2]);
    });

    talStockData1().then(data => {
      setTalStockNr(data[0]);
      setTalStockYnr(data[1]);
    });
    talStockData2().then(data => {
      setTalStockOp(data[0]);
      setTalStockP(data[1]);
      setTalStockDiv(data[2]);
    });

    tkmStockData1().then(data => {
      setTkmStockNr(data[0]);
      setTkmStockYnr(data[1]);
    });
    tkmStockData2().then(data => {
      setTkmStockOp(data[0]);
      setTkmStockP(data[1]);
      setTkmStockDiv(data[2]);
    });

    tsmStockData1().then(data => {
      setTsmStockNr(data[0]);
      setTsmStockYnr(data[1]);
    });
    tsmStockData2().then(data => {
      setTsmStockOp(data[0]);
      setTsmStockP(data[1]);
      setTsmStockDiv(data[2]);
    });

    OmxStockData().then(data => {
      setOmxStockOp(data[0]);
      setOmxStockP(data[1]);
    });
  }, []);

  const lhv = {
    volume: lhvStockNr,
    volumeYesterday: lhvStockYnr,
    openingPrice: lhvStockOp,
    price: lhvStockP,
    dividend: lhvStockDiv
  };

  const tal = {
    volume: talStockNr,
    volumeYesterday: talStockYnr,
    openingPrice: talStockOp,
    price: talStockP,
    dividend: talStockDiv
  };

  const tkm = {
    volume: tkmStockNr,
    volumeYesterday: tkmStockYnr,
    openingPrice: tkmStockOp,
    price: tkmStockP,
    dividend: tkmStockDiv
  };

  const tsm = {
    volume: tsmStockNr,
    volumeYesterday: tsmStockYnr,
    openingPrice: tsmStockOp,
    price: tsmStockP,
    dividend: tsmStockDiv
  };

  const mrk = {
    volume: mrkStockNr,
    volumeYesterday: mrkStockYnr,
    openingPrice: mrkStockOp,
    price: mrkStockP,
    dividend: mrkStockDiv
  };

  const tve = {
    volume: tveStockNr,
    volumeYesterday: tveStockYnr,
    openingPrice: tveStockOp,
    price: tveStockP,
    dividend: tveStockDiv
  };

  const sfg = {
    volume: sfgStockNr,
    volumeYesterday: sfgStockYnr,
    openingPrice: sfgStockOp,
    price: sfgStockP,
    dividend: sfgStockDiv
  };

  const arc = {
    volume: arcStockNr,
    volumeYesterday: arcStockYnr,
    openingPrice: arcStockOp,
    price: arcStockP,
    dividend: arcStockDiv
  };

  const blt = {
    volume: bltStockNr,
    volumeYesterday: bltStockYnr,
    openingPrice: bltStockOp,
    price: bltStockP,
    dividend: bltStockDiv
  };

  const cpa = {
    volume: cpaStockNr,
    volumeYesterday: cpaStockYnr,
    openingPrice: cpaStockOp,
    price: cpaStockP,
    dividend: cpaStockDiv
  };

  const eeg = {
    volume: eegStockNr,
    volumeYesterday: eegStockYnr,
    openingPrice: eegStockOp,
    price: eegStockP,
    dividend: eegStockDiv
  };

  const eft = {
    volume: eftStockNr,
    volumeYesterday: eftStockYnr,
    openingPrice: eftStockOp,
    price: eftStockP,
    dividend: eftStockDiv
  };

  const hae = {
    volume: haeStockNr,
    volumeYesterday: haeStockYnr,
    openingPrice: haeStockOp,
    price: haeStockP,
    dividend: haeStockDiv
  };

  const prf = {
    volume: prfStockNr,
    volumeYesterday: prfStockYnr,
    openingPrice: prfStockOp,
    price: prfStockP,
    dividend: prfStockDiv
  };

  const ncn = {
    volume: ncnStockNr,
    volumeYesterday: ncnStockYnr,
    openingPrice: ncnStockOp,
    price: ncnStockP,
    dividend: ncnStockDiv
  };

  const pkg = {
    volume: pkgStockNr,
    volumeYesterday: pkgStockYnr,
    openingPrice: pkgStockOp,
    price: pkgStockP,
    dividend: pkgStockDiv
  };

  const omx = {
    openingPrice: omxStockOp,
    price: omxStockP
  };

  const stocks = [
    arc,
    blt,
    cpa,
    eeg,
    eft,
    hae,
    lhv,
    mrk,
    ncn,
    pkg,
    prf,
    sfg,
    tal,
    tkm,
    tsm,
    tve,
    omx
  ];
  /* 
    useEffect(() => {
    console.log('lhv', lhv);
  }, [lhvStockDiv]);

  useEffect(() => {
    console.log('tal', tal);
  }, [talStockDiv]);

  useEffect(() => {
    console.log('tkm', tkm);
  }, [tkmStockDiv]);

  useEffect(() => {
    console.log('tsm', tsm);
  }, [tsmStockDiv]);

  useEffect(() => {
    console.log('mrk', mrk);
  }, [mrkStockDiv]);

  useEffect(() => {
    console.log('tve', tve);
  }, [tveStockDiv]);

  useEffect(() => {
    console.log('sfg', sfg);
  }, [sfgStockDiv]);

  useEffect(() => {
    console.log('arc', arc);
  }, [arcStockDiv]);

  useEffect(() => {
    console.log('blt', blt);
  }, [bltStockDiv]);

  useEffect(() => {
    console.log('cpa', cpa);
  }, [cpaStockDiv]);

  useEffect(() => {
    console.log('eeg', eeg);
  }, [eegStockDiv]);

  useEffect(() => {
    console.log('eft', eft);
  }, [eftStockDiv]);

  useEffect(() => {
    console.log('hae', hae);
  }, [haeStockDiv]);

  useEffect(() => {
    console.log('ncn', ncn);
  }, [ncnStockDiv]);

  useEffect(() => {
    console.log('pkg', pkg);
  }, [pkgStockDiv]);

  useEffect(() => {
    console.log('prf', prf);
  }, [prfStockDiv]);

  useEffect(() => {
    console.log('omx', omx);
  }, [omxStockP, omxStockOp]);
 */
  return <p>{JSON.stringify(stocks)}</p>;
};
