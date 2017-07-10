import { BjjnotesFePage } from './app.po';

describe('bjjnotes-fe App', () => {
  let page: BjjnotesFePage;

  beforeEach(() => {
    page = new BjjnotesFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
