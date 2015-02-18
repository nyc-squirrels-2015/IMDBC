var errorModule = (function () {

  var errorDiv = '.error';

  var errorShow = function (message) {
    $(errorDiv).html("<p>" + message + "<p>");
    $(errorDiv).show();
  }

  var errorHide = function () {
    $(errorDiv).hide();
  };

  return {
    show: errorShow,
    hide: errorHide
  };

})();