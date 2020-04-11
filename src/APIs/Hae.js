import axios from 'axios';
import cheerio from 'cheerio';
import { haeUrl1, haeUrl2, haeUrl3 } from '../constants/Urls';

export const haeStockData1 = async () => {
  const result1 = await axios.get(haeUrl1).then((res) => {
    const $ = cheerio.load(res.data);
    const volume = $(
      '.tablepadding0 > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'
    ).html();
    return volume;
  });

  const result2 = await axios.get(haeUrl3).then((res) => {
    const $ = cheerio.load(res.data);
    const yesterdayVolume = $(
      '.tablepadding0 > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'
    ).html();
    return yesterdayVolume;
  });
  return [result1, result2];
};

export const haeStockData2 = async () => {
  const result = await axios.get(haeUrl2).then((res) => {
    const $ = cheerio.load(res.data);
    const openingPrice = $(
      'table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)'
    ).html();

    const price = $(
      'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div:nth-of-type(1) > table > tbody > tr:nth-of-type(4) > td:nth-of-type(2) > span'
    ).html();

    const dividend = $(
      'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(1) > div > div:nth-of-type(3) > div:nth-of-type(1) > div > div:nth-of-type(1) > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > table > tbody > tr:nth-of-type(6) > td:nth-of-type(2)'
    ).html();

    return [openingPrice, price.split(' ')[0], dividend.split(' ')[0]];
  });
  return result;
};
