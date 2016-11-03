import { BraukontrolPage } from './app.po';

describe('braukontrol App', function() {
  let page: BraukontrolPage;

  beforeEach(() => {
    page = new BraukontrolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
