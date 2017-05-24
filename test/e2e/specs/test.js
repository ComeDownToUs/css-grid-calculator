// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'keys are present': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.calculator')
      .assert.elementCount('.number', 11)
      .assert.elementCount('.operation', 5)
      .assert.elementCount('.log', 2)
      .assert.elementCount('a', 22)//all of the above, the bootstrap link, the 3 initial results
      .end()
  },
  'bootstrap loads, count including hidden elements': function (browser){
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.bootstrap-link', 5000)
      .click('.bootstrap-link')
      .waitForElementVisible('.bootstrap', 5000)
      .assert.elementCount('.num', 11)
      .assert.elementCount('.opera', 10)
      .assert.elementCount('.logg', 4)
      .assert.elementCount('a', 28)//all of the above, the 3 initial results
      .end()

  }
}
