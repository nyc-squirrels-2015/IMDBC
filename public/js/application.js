$(document).ready(function () {
  $('nav').on("click", "#login-btn", function (e) {
    e.preventDefault();
    var target = $(e.target);
    var url = target.attr('href');
    console.log(url);
    $.ajax({
      type: 'get',
      url: url
    }).success(function (response) {
      $('nav').append(response);
    });
  });

  $('nav').on("submit", "#login-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    var input = function (id) { return ($(target.find('input')[id]).val()); };
    // console.log(input(1));
    $.ajax({
      type: 'post',
      url: url,
      data: {'user[email]': input(0), 'user[password]': input(1)},
      dataType: 'json'
    }).success(function (response) {
      window.location.href = response.path;
    });
  });

  $('#content').on("click", "#movies-btn", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    if ($('#content #movies-list').length === 0) {
      $.ajax({
        type: 'get',
        url: url
      }).success(function (response) {
        target.append(response);
      });
    } else {
      $('#movies-list').remove();
    }
  });

  $('#signup-btn').on("click", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    if ($('#content #signup-form').length === 0) {
      $.ajax({
        type: 'get',
        url: url
      }).success(function (response) {
        target.after(response);
      });
    } else {
      $('#signup-form').remove();
    }
  });

  $('nav').on("submit", "#signup-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    var input = function (id) { return ($(target.find('input')[id]).val()); };
    console.log(url);
    $.ajax({
      type: 'post',
      url: url,
      data: {'user[name]': input(0), 'user[email]': input(1), 'user[password]': input(2)},
      dataType: 'json'
    }).success(function (response) {
      window.location.href = response.path;
    });
  });
});
