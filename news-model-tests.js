describe('Each article', function() {
  it ('should have a string', function() {
    var article = new newsArticle("hello", 0)
    instanceChecker.isTrue(article.text === "hello")
  });

  it('should create a note which returns a string', function() {
    var article = new newsArticle("hello", 0)
    string.isString(article.text)
  })

  it('should return a string when returnText is called', function() {
    var article = new newsArticle("hello", 0)
    instanceChecker.isTrue(article.returnArticle() === "hello")
  })

  it('should have an id', function() {
    var article = new newsArticle("hello", 0)
    instanceChecker.isTrue(article.id === 0)
  })
})
