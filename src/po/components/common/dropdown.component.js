const BaseComponent = require("./base.component");

class DropdownComponent extends BaseComponent {
  constructor(rootSelector) {
    super(rootSelector);
  }

  /**
   *
   * @param {*} selectors
   * @param {*} option
   * @returns selector
   */

  // item requires the object 'selector' that is into 'expirationOption()' function
  // into the 'selector' there is the value for the key 'option' passed
  // All this concatenaded build a selector for the element in the dropdown of the web page
  item(selectors, option) {
    return this.rootEl.$(selectors[option.toLowerCase()]);
  }
}
module.exports = DropdownComponent;
