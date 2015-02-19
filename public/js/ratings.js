$(document).ready(function () {
  $('#options').on("click", "#add-rating", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('href');
    $.ajax({
      type: 'get',
      url: url,
      success: function (response) {
        $('#add-rating').after(response);
      }
    });
  });

  $('#options').on("submit", "#rating-form", function (e) {
    e.preventDefault();
    var target = $(this);
    var url = target.attr('action');
    var movie_id = $(target.find('input')[0]).attr('name');
    var rating = getInput.input(target, 'input', 1)
    console.log(getInput.input(target, 'input', 1));
    $.ajax({
      type: 'post',
      url: "/movies/" + movie_id + "/ratings",
      data: {'movie[id]':  movie_id, 'rating': getInput.input(target, 'input', 1)},
      success: function (response) {
        console.log("#your_rating" + movie_id);
        $("#your_rating" + movie_id).html(rating)
      }
    });
  });
});