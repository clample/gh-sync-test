const { chromium } = require('playwright')
const takeScreenshot = require('../test-dependency/helper')

// Checkly supports top level await, but we wrap your code in an async function so you can run it locally too.
async function run () {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto('https://google.com')

  // If the page doesn't return a successful response code, we fail the check.
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

  console.log('Running from directory ', __dirname)
  // We snap a screenshot.
  await page.screenshot({ path: 'screenshot1.jpg' })
  await page.screenshot({ path: '../screenshot2.jpg' })
  await page.screenshot({ path: 'test-screenshot/screenshot3.jpg' })
  await takeScreenshot(page)

  // We close the page to clean up and gather performance metrics.
  await page.close()
  await browser.close()
}

run()
