$(document).ready(function () {
  $(".mouse_hover_area").mousemove(function (e) {
    let top = $(window).scrollTop() - $(this).offset().top + e.clientY;
    let left = $(window).scrollLeft() - $(this).offset().left + e.clientX;
    $(".mouse").css({ left: left - 150, top: top - 150 });
  });
});

// document
//   .querySelector(".mouse_hover_area")
//   .addEventListener("mousemove", (e) => {
//     let top = this.scrollTop - this.offset().top + e.clientY;
//     let left = this.scrollLeft - this.offset().left + e.clientX;
//     document.querySelector(".mouse").style.left = left - 150;
//     document.querySelector(".mouse").style.top = top - 150;
//   });

// $(document).ready(function () {
//   $(".mouse_hover_area").touchmove(function (e) {
//     e.preventDefault();
//     let top = $(window).scrollTop() - $(this).offset().top + e.clientY;
//     let left = $(window).scrollLeft() - $(this).offset().left + e.clientX;
//     $(".mouse").css({ left: left - 150, top: top - 150 });
//   });
// });
