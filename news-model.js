(function(exports) {

  function newsArticle(string, id) {
    this.text = string
    this.id = id
  };

  newsArticle.prototype.returnArticle = function () {
    return this.text
  }

  exports.newsArticle = newsArticle;
})(this);
