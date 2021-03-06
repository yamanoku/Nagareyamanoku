describe('COVID-19-Test', () => {
  beforeAll(async () => {
    await page.goto('https://www.city.nagareyama.chiba.jp/information/1007525/1024556/1025141.html')
  })

  it('h2見出し後にul, liタグが存在するか', async () => {
    await expect(page).toMatchElement('#voice > h2 + ul > li:nth-child(1)');
  })

  it('「流山市内居住者において新型コロナウイルス感染症の感染者」の文字列が存在するか', async () => {
    await expect(page).toMatch('流山市内居住者において新型コロナウイルス感染症の感染者')
  })
})
