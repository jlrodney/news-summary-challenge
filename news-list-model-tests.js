describe('article list model',function() {
  it('should create articles an id', function(){
    var articlesList = new articleList ()
    articlesList.createArticle("hello politicians")
    articlesList.createArticle("hello comrades")
    instanceChecker.isTrue(articlesList.list[0].id === 0)
    instanceChecker.isTrue(articlesList.list[1].id === 1)
  })

  it('should create articles with some text', function(){
    var articlesList = new articleList ()
    articlesList.createArticle("hello politicians")
    articlesList.createArticle("hello comrades")
    console.log(articlesList.list[0].text)
    instanceChecker.isTrue(articlesList.list[0].text === 'hello politicians');
    instanceChecker.isTrue(articlesList.list[1].text === 'hello comrades');
  })

  it("should test articles are stored in an array", function() {
    var articlesList = new articleList()
    articlesList.createArticle("Brexit... :(")
    articlesList.createArticle("UKIP... :(")
    array.isArray(articlesList.list)
  })

  it('should check that each articles list initializes with no articles', function() {
    var articlesList = new articleList()
    instanceChecker.isTrue(articlesList.list[0] === undefined )
  })

  it('should return the string when viewArticleList is called', function() {
    var articlesList = new articleList ()
    articlesList.createArticle("hello politicians")
    articlesList.createArticle("hello comrades")
    console.log(articlesList.viewArticleList()[0].text)
    console.log(articlesList.viewArticleList()[1].text)
    instanceChecker.isTrue(articlesList.viewArticleList()[0].text === "hello politicians")
    instanceChecker.isTrue(articlesList.viewArticleList()[1].text === "hello comrades")
  })
})
