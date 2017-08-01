import { RoutingAndNavigationDemoPage } from './app.po';

describe('routing-and-navigation-demo App', () => {
  let page: RoutingAndNavigationDemoPage;

  beforeEach(() => {
    page = new RoutingAndNavigationDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
