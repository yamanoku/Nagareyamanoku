describe('COVID-19-Test', () => {
  beforeAll(async () => {
    await page.goto('https://www.city.nagareyama.chiba.jp/information/1007525/1024556/1025141.html')
  })

  it('h2見出し後にpタグが存在するか', async () => {
    await expect(page).toMatchElement('#voice > h2 + p');
  })

  it('「流山市内居住者において新型コロナウイルス感染症の患者」の文字列が存在するか', async () => {
    await expect(page).toMatch('流山市内居住者において新型コロナウイルス感染症の患者')
  })
})
