import { TimeTrackerProjectPage } from './app.po';

describe('time-tracker-project App', () => {
  let page: TimeTrackerProjectPage;

  beforeEach(() => {
    page = new TimeTrackerProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
