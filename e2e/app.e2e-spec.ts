import { AngularLessonsPage } from './app.po';

describe('angular-lessons App', () => {
  let page: AngularLessonsPage;

  beforeEach(() => {
    page = new AngularLessonsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
