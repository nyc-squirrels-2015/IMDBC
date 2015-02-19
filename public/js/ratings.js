// $(document).ready(function () {
//   $('#options').on("click", "#add-rating", function (e) {
//     e.preventDefault();
//     var target = $(this);
//     var url = target.attr('href');
//     $.ajax({
//       type: 'get',
//       url: url,
//       success: function (response) {
//         $('#add-rating').after(response);
//       }
//     });
//   });

//   $('#options').on("click", "#rating-form", function (e) {
//     e.preventDefault();
//     var target = $(this);
//     var url = target.attr('action');
//     $.ajax({
//       type: 'post',
//       url: url,
//       data: {'movie[id]': , 'rating[:rating]': getInput.input(target, 'input', 0)}
//       success: function (response) {
//         $('#add-rating').after(response);
//       }
//     });
//   });
// });