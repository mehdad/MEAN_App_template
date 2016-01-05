describe('Article E2E Test', function () {
  describe('New Article page', function () {
    it('Should not be able to create a new article', function () {
      browser.get('http://localhost:6767/#!/articles/create');
      element(by.css('input[type=submit]')).click();
    })
  })
})
