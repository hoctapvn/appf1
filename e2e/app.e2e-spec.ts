import { Appf1Page } from './app.po';

describe('appf1 App', function() {
  let page: Appf1Page;

  beforeEach(() => {
    page = new Appf1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
