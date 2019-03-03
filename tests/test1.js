module.exports = {
  'Test Filter Component': function(browser) {
    browser
      .url('localhost:8000')
      .waitForElementVisible('body')
      .waitForElementVisible('.filter-item:nth-of-type(1)')
      .click('.filter-item:nth-of-type(1)')
      .pause(1000)
      .assert.containsText('.filter h3', 'Filter:')
      .end();
  },

  'Step Two: See if components were filtered': function(browser) {
    browser
      .url('localhost:8000')
      .waitForElementVisible('.filter-item:nth-of-type(2)')
      .click('.filter-item:nth-of-type(2)')
      .pause(1000)
      .end();
  }
};
