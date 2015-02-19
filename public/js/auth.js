$(document).ready(function () {
  $('nav').on("click", "#login-btn", function (e) {
    e.preventDefault();
    var target = $(e.target);
    var url = target.attr('href');
    console.log(url);
    if ($('nav #login-form').length === 0) {
      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          $('nav').append(response);
        }
      });
    } else {
      $('#login-form').remove();
    }
  });

  $('nav').on("submit", "#login-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    // var input = function (id) { return ($(target.find('input')[id]).val()); };
    // console.log(input(1));
    $.ajax({
      type: 'post',
      url: url,
      data: {
        'user[email]': getInput.input(target, 'input', 0),
        'user[password]': getInput.input(target, 'input', 1)
      },
      dataType: 'json',
      success: function (response) {
        window.location.href = response.path;
      },
      error: function () {
        console.log('sup');
        errorModule.show("Invalid email or password");
      }
    });
  });

  $('#signup-btn').on("click", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    if ($('nav #signup-form').length === 0) {
      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          target.after(response);
        }
      });
    } else {
      $('#signup-form').remove();
    }
  });

  $('nav').on("submit", "#signup-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    // var input = function (id) { return ($(target.find('input')[id]).val()); };
    console.log(url);
    $.ajax({
      type: 'post',
      url: url,
      data: {
        'user[name]': getInput.input(target, 'input', 0),
        'user[email]': getInput.input(target, 'input', 0),
        'user[password]': getInput.input(target, 'input', 0)
      },
      dataType: 'json',
      success: function (response) {
        window.location.href = response.path;
      }
    });
  });
});
