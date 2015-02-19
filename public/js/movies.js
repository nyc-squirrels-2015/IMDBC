$(document).ready(function () {

  $('#content').on("click", "#movies-btn", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    if ($('#content #movies-list').length === 0) {
      $.ajax({
        type: 'get',
        url: url,
        success: function (response) {
          target.after(response);
        }
      });
    } else {
      $('#movies-list').remove();
    }
  });

  $('#options').on("click", "#create-movie", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    console.log(url);
    $.ajax({
      type: 'get',
      url: url,
      success: function (response) {
        $('#options').after(response);
      },
      error: function () {
        $('#options').after('Failed');
      }
    });
  });

  $('#content').on("submit", "#movie-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    // var input = function (id) { return $(target.find('input')[id]).val(); };
    $.ajax({
      type: 'post',
      url: url,
      data: {'movie[title]': getInput.input(target, 'input', 0)},
      dataType: 'json',
      success: function () {
        $('#movie-form').hide();
        if ($('#movies-list').length > 0) {
          $('#movies-list').remove();
        }
      }
    });
  });

  $('#options').on("click", "#delete-movie", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    $.ajax({
      type: 'delete',
      url: url,
      dataType: 'json',
      success: function (response) {
        $("#movie" + response.id).remove();
      }
    });
  });

  $('#options').on("click", "#update-movie", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    $.ajax({
      type: 'get',
      url: url,
      success: function (response) {
        $('#update-movie').after(response);
      }
    });
  });

  $('#options').on("click", "#movie-edit-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    $.ajax({
      type: 'put',
      url: url,
      data: {'movie[title]': getInput.input(target, 'input', 0)},
      dataType: 'json',
      success: function (response) {

      }
    });
  });
});
