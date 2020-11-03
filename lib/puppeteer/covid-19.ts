import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

const main = async () => {
  const browser = await puppeteer.launch({'timeout': 0});
  const page = await browser.newPage();
  const url: string = 'https://www.city.nagareyama.chiba.jp/information/1007525/1024556/1025141.html';
  await page.goto(url);
  const selector: string = '#voice > h2 + p';
  const elementHandle = await page.$(selector);
  if (elementHandle === null) {
    await browser.close();
    throw Error('要素が取得できませんでした');
  }
  const infectText: unknown = await (await elementHandle.getProperty('textContent')).jsonValue();
  if (typeof infectText !== 'string') {
    await browser.close();
    throw Error('文字列が取得できませんでした');
  }
  let infectTextIndex: number;
  // See: https://github.com/yamanoku/Nagareyamanoku/pull/262
  if (infectText.indexOf("・") !== -1) {
    infectTextIndex = infectText.indexOf("・");
  } else {
    infectTextIndex = infectText.indexOf('流山市内居住者において新型コロナウイルス感染症の感染者');
  }
  const infectNum = infectText.slice(infectTextIndex).replace(/[^0-9]/g, '');

  let filename;
  if (process.env.BUILD === '11ty') {
    filename = '../../src/_data/data.json';
  } else {
    filename = '../../functions/data.json';
  }
  const obj = JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf-8'));
  obj.covid19.positive = Number(infectNum);
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(obj));

  await browser.close();
};

main();
