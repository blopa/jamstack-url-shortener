# JAMStack URL Shortener

This is a basic URL shortener POC build with Gatsby.

## 🚀 Quick start

1.  **Create a Google Spreadsheet with the URLs.**

    Make a copy of [this](https://docs.google.com/spreadsheets/d/1ca1kNCze-3Ch7bqKrpK5tQK8NLjCh0K4h7Rji5PZRhg/copy) Google Spreadsheet
    ![ScreenShot](https://raw.githubusercontent.com/blopa/jamstack-url-shortener/master/readme_images/screenshot_1.png)

2.  **Make the Spreadsheet public.**

    Go to File -> Share and [make it public](https://webapps.stackexchange.com/a/103851/235980).
    ![ScreenShot](https://raw.githubusercontent.com/blopa/jamstack-url-shortener/master/readme_images/public_spreadsheet.png)

3.  **Add your Spreadsheet ID**

    Copy your Spreasheet ID into `gatsby-node.js` line 2.

4.  **Add new URLs**

    Whenever a new URL is added to the Spreadsheet, you need to manually trigger a new Github Actions build
    ![ScreenShot](https://raw.githubusercontent.com/blopa/jamstack-url-shortener/master/readme_images/manual_deploy.png)

## 🗜 Examples
- https://blopa.github.io/jamstack-url-shortener/4c2873b2 goes to https://github.com/blopa/jamstack-url-shortener/
- https://blopa.github.io/jamstack-url-shortener/99969f07 goes to https://google.com
- https://blopa.github.io/jamstack-url-shortener/44290ffb goes to https://github.com/blopa

## 📝 TODO list
- Make the Gatsby build automatic via Github API call in a custom Spreadsheet action or something like that
- Improve redirecting pages
