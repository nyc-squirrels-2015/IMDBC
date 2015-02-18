var getInput = (function () {

  var getInput = function (target, selector, id) {
    return ($(target.find(selector)[id]).val());
  };

  return {
    input: getInput
  };

})();

//     var input = function (id) { return ($(target.find('input')[id]).val()); };


// var errorModule = (function () {

//   var errorDiv = '.error';

//   var errorShow = function (message) {
//     $(errorDiv).html("<p>" + message + "<p>");
//     $(errorDiv).show();
//   }

//   var errorHide = function () {
//     $(errorDiv).hide();
//   };

//   return {
//     show: errorShow,
//     hide: errorHide
//   };

// })();