const { pages } = require("./../po");

describe("PasteBin Page", () => {
  beforeEach(async () => {
    await pages("main").open();
  });

  it("Create a New Paste", async () => {
    // Write a text into the paste area: "Hello from WebDriver"

    await pages("main").pasteForm.newPasteTextArea.addValue(
      "Hello from WebDriver"
    );
    // //* Paste Expiration: "10 Minutes"
    await pages("main").pasteForm.pasteExpirationDropdown.click();
    await pages("main").pasteForm.expirationOption("ten_minutes").click();
    // //* Paste Name / Title: "helloweb"
    await pages("main").pasteForm.pasteNameInputText.addValue("helloweb");
  });
});
