import axios from 'axios';
import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import { LHV1T_DIVIDEND } from '../constants/dividends';
import { OmxStockData } from './Omx';

const lhvLink1 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE3100073644/security?';

const lhvLink2 =
  'https://cors-anywhere.herokuapp.com/https://finance.yahoo.com/quote/LHV1T.TL?p=LHV1T.TL';

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
    const openingPrice = $(
      'table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1)'
    ).html();
    const price = $(
      'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > table > tbody > tr:nth-of-type(4) > td:nth-of-type(2) > span'
    ).html();

    const dividend = $(
      'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > table > tbody > tr:nth-of-type(6) > td:nth-of-type(2)'
    ).html();

    return [openingPrice, price.split(' ')[0], dividend.split('(')[0]];
  });
  return result;
};
