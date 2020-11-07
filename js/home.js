$(document).ready(function () {

  //Load global components
  $("#sidebar").load("../components/sidebar.html").toggleClass('active');
  $("#homeCards").load("../components/cards.html");


  $("#sidebarToggleBtn").on('click', function () {
    $("#sidebar").toggleClass('active');
  });
});
