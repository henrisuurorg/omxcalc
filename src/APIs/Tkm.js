import axios from 'axios';
import cheerio from 'cheerio';

const newDate = new Date();
const date =
  '2020-' + '0' + (newDate.getMonth() + 1) + '-' + (newDate.getDate() - 1);

const tkmLink1 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE0000001105/security?';

const tkmLink2 =
  'https://cors-anywhere.herokuapp.com/https://finance.yahoo.com/quote/TKM1T.TL?p=TKM1T.TL';

const tkmLink3 =
  'https://www.nasdaqbaltic.com/statistics/et/instrument/EE0000001105/security?date=' +
  date;

export const tkmStockData1 = async () => {
  const result = await axios.get(tkmLink1).then(res => {
    const $ = cheerio.load(res.data);
    const number = $(
      '.smaller-nrs > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1)'
    ).html();
    console.log(tkmLink3);
    return number;
  });
  return result;
};

export const tkmStockData2 = async () => {
  const result = await axios.get(tkmLink2).then(res => {
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
