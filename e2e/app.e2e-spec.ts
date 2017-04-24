import { MyfreelanceappPage } from './app.po';

describe('myfreelanceapp App', () => {
  let page: MyfreelanceappPage;

  beforeEach(() => {
    page = new MyfreelanceappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
