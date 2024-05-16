const MainPage = require("./main.page");

/**
 *
 * @param {*} page {'main'}
 * @returns {MainPage}
 */
// 'pages' function receive a page argument to return the instance of MainPage
// MainPage has access to all the elements in the form (selector of those elements)
function pages(page) {
  const items = {
    main: new MainPage(),
  };
  return items[page.toLowerCase()];
}

module.exports = { MainPage, pages };
