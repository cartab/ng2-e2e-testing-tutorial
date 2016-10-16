
describe('Jarvis caller', function () {
  var callButton;

  beforeEach(function () {
    browser.get('');

    // Gets the button to call Jarvis
    callButton = element(by.tagName('button'));
  });

  it('should display correct title', function () {
    expect(browser.getTitle()).toEqual('Angular 2 e2e Testing');
  });

  it('should find the button to call Jarvis', function() {
    expect(callButton.getText()).toEqual('Toggle Jarvis');
  });

  it('should see Jarvis after calling him', function() {
    // Click the button
    callButton.click();

    expect(element(by.id('jarvis-response')).isDisplayed()).toBeTruthy(); // Checking if element is displayed
    expect(element(by.id('jarvis-response')).getText()).toEqual('Yes sir!'); // Check if display text is correct
  });
});
