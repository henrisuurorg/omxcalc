import axios from 'axios';
import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import { LHV1T_DIVIDEND } from '../constants/dividends';

const lhvLink1 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE3100073644/security?date=2020-03-13';
const lhvLink2 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE3100073644/trading';

export const lhvStockData1 = async () => {
  const result = await axios.get(lhvLink1).then(res => {
    const $ = cheerio.load(res.data);
    const number = $('table')
      .children()
      .children()
      .next()
      .children()
      .next()
      .html();

    return number;
  });
  return result;
};

export const lhvStockData2 = async () => {
  const result = await axios.get(lhvLink2).then(res => {
    const $ = cheerio.load(res.data);
    const openingPrice = $('.smaller-nrs')
      .children()
      .children(':nth-child(4)')
      .children()
      .html();
    const price = $('.tradinginfo-numbers')
      .children(':nth-child(2)')
      .children(':nth-child(2)')
      .children()
      .html();
    return [openingPrice, price];
  });
  return result;
};

export const HULL = () => {
  const [lhvStockNr, setlhvStockNr] = useState();
  const [lhvStockOp, setlhvStockOp] = useState();
  const [lhvStockP, setlhvStockP] = useState();

  lhvStockData1().then(data => setlhvStockNr(data));
  lhvStockData2().then(data => setlhvStockOp(data[0]));
  lhvStockData2().then(data => setlhvStockP(data[1]));

  useEffect(() => {
    const lhv = {
      amount: lhvStockNr,
      openingPrice: lhvStockOp,
      price: lhvStockP,
      dividend: LHV1T_DIVIDEND
    };
    console.log(lhv);
  }, [lhvStockNr, lhvStockOp, lhvStockP]);

  return <h1>Jaanika</h1>;
};
