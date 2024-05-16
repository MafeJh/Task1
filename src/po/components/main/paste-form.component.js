const BaseComponent = require("./../common/base.component");
const TextAreaComponent = require("./../common/text-area.component");
const InputComponent = require("./../common/input.component");
const DropdownComponent = require("./../common/dropdown.component");

class PasteFormComponent extends BaseComponent {
  constructor() {
    super("#w0");
    this._newPasteTextArea = new TextAreaComponent("#postform-text");
    this._pasteExpirationDropdown = new DropdownComponent(
      "div.field-postform-expiration span[role='presentation']"
    );
    this._pasteNameInputText = new InputComponent("#postform-name");
  }

  get newPasteTextArea() {
    return this._newPasteTextArea.rootEl;
  }

  get pasteExpirationDropdown() {
    return this._pasteExpirationDropdown.rootEl;
  }

  get pasteNameInputText() {
    return this._pasteNameInputText.rootEl;
  }

  /**
   *
   * @param {*} option {'ten_minutes'}
   * @returns {*} {'DropdownComponent' 'selector' }
   */

  // This function build a selector with the value selected in the object 'selectors'
  // join the selector in the instance of DropdownComponent with the selector returned by the function item (the value of the key 'ten_minutes')

  expirationOption(option) {
    const selectors = {
      ten_minutes: `//li[contains(@id,'10M')]`,
    };
    return this._pasteExpirationDropdown.item(selectors, option);
  }
}
module.exports = PasteFormComponent;
