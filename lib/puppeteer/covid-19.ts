import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

const main = async () => {
  const browser = await puppeteer.launch({'timeout': 0});
  const page = await browser.newPage();
  const url: string = 'https://www.city.nagareyama.chiba.jp/information/1007525/1024556/1025141.html';
  await page.goto(url);
  const selector: string = '#voice > h2 + ul > li:nth-child(1)';
  const elementHandle = await page.$(selector);
  if (elementHandle === null) {
    await browser.close();
    throw Error('要素が取得できませんでした');
  }
  const jsHandle = await elementHandle.getProperty('textContent');
  const infectText: unknown = await jsHandle?.jsonValue();
  if (typeof infectText !== 'string') {
    await browser.close();
    throw Error('文字列が取得できませんでした');
  }
  // See: https://github.com/yamanoku/Nagareyamanoku/pull/289
  const firstArrayString: string = infectText.split('。').filter(n => n)[0];
  let infectTextIndex: number;
  // See: https://github.com/yamanoku/Nagareyamanoku/pull/262
  if (firstArrayString.indexOf("・") !== -1) {
    infectTextIndex = firstArrayString.indexOf("・");
  } else {
    infectTextIndex = firstArrayString.indexOf('流山市内居住者において新型コロナウイルス感染症の感染者');
  }
  const infectNum = Number(firstArrayString.slice(infectTextIndex).replace(/[^0-9]/g, ''));

  let filename;
  if (process.env.BUILD === '11ty') {
    filename = '../../src/_data/data.json';
  } else {
    filename = '../../functions/data.json';
  }
  const obj = JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf-8'));
  obj.covid19.positive = infectNum;
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(obj));

  await browser.close();
};

main();
