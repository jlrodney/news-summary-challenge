(function(exports) {
  function ArticlesView(view) {
    this.view = view
  }

  ArticlesView.prototype.htmlReturn = function () {
    var text = "<ul>"
    for (var i = 0; i < this.view.viewArticles().length; i++) {
      text += "<li>" + `<a id="note-link-${i}"  href="#${this.view.viewNotes()[i].id}">` +this.view.viewNotes()[i].note.substring(0,20) + "</li>"
    }
    text += "</ul>"
    return text
  };

  exports.ArticlesView = ArticlesView;
})(this);
