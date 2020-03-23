import axios from 'axios';
import cheerio from 'cheerio';

const talLink1 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE0000001105/security?';

const talLink2 =
  'https://cors-anywhere.herokuapp.com/https://finance.yahoo.com/quote/TAL1T.TL?p=TAL1T.TL';

export const talStockData1 = async () => {
  const result = await axios.get(talLink1).then(res => {
    const $ = cheerio.load(res.data);
    const number = $(
      'table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)'
    ).html();

    return number;
  });
  return result;
};

export const talStockData2 = async () => {
  const result = await axios.get(talLink2).then(res => {
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

    return [openingPrice, price.split(' ')[0], dividend.split(' ')[0]];
  });
  return result;
};
