var instanceChecker = {
  isTrue: function(instanceChecker) {
    if (!instanceChecker) {
      throw new Error("Needs to be an instance");
    } else {
      console.log("%c It was an instance of ... well done! That was not too hard", "color:green")
    }
  }
};


var string = {
  isString: function(string) {
    if (!typeof string === typeof '' || !typeof string === typeof "") {
      throw new Error("That was not a string :(")
    } else {
      console.log("%c That was a string, well done! That was not too hard", "color:green")
    }
  }
}
var array = {
  isArray(array) {
    if (!typeof array === typeof []) {
    }
    console.log('%c That was an array, well done! That was not too hard', "color:green")
  }
}
