import { browser, by, element } from 'protractor';

export class RoutingAndNavigationDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
