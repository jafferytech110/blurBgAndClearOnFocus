$(document).ready(function () {
  $(".mouse_hover_area").mousemove(function (e) {
    let top = $(window).scrollTop() - $(this).offset().top + e.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + e.clientX;
    $(".mouse").css({ left: left - 150, top: top - 150 });
  });
});
