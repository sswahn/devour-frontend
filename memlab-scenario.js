
module.exports = {
  url: 'http://localhost:3000',

  action: async function (page) {
    await page.waitForSelector('body');
  },

  getHeadlessBrowserOptions: function () {
    return {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    };
  }
};
