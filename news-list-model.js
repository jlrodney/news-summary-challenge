(function(exports) {
  function articleList() {
    this.list = []
    this.id = 0
  };

    articleList.prototype.createArticle = function (text) {
      this.list.push(new newsArticle(text, id = this.id))
      this.id++;
    };

    articleList.prototype.viewArticleList = function () {
      return this.list
  };



  exports.articleList = articleList;
})(this);
