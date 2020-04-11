import React from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { OmxUrl1 } from '../constants/Urls';

export const OmxStockData = async () => {
  const result = await axios.get(OmxUrl1).then((res) => {
    const today = new Date();
    const time = today.getHours();
    const isAuctionPeriod = time > 10 && time < 16 ? true : false;

    const $ = cheerio.load(res.data);
    const openingPrice1 = $(
      'tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'
    ).html();
    const openingPrice2 = $(
      'tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1)'
    ).html();
    const currentPrice = $(
      'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div > div > div:nth-of-type(4) > div > div > div > div:nth-of-type(3) > div > div > span:nth-of-type(1)'
    ).html();
    const previousClose = $(
      'table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'
    ).html();

    return [
      isAuctionPeriod ? openingPrice2 : openingPrice1,
      currentPrice,
      previousClose,
    ];
  });
  return result;
};
