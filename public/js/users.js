$(document).ready(function () {
  $('#user-options').on("click", "#user-edit-btn", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('route');
    $.ajax({
      type: 'get',
      url: url,
      success: function (response) {
        $('#user-options').append(response);
      }
    });
  });

  $('#user-options').on("submit", "#user-edit-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    var input = function (id) { return ($(target.find('input')[id]).val()); };
    $.ajax({
      url: url,
      type: 'put',
      data: {'user[name]': input(0), 'user[email]': input(1), 'user[password]': input(2)},
      dataType: 'json',
      success: function (response) {
        $('#username').text(response.user.name);
        console.log(response.user.email);
      }
    });
  });
});