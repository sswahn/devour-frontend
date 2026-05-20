
module.exports = {
  url: 'http://localhost:3000',

  action: async function (page) {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('body');
  }
};
