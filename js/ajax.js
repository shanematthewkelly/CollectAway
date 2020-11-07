$(document).ready(function () {

  //Load sidebar component & set it as active
  $("#sidebar").load("../components/sidebar.html").toggleClass('active');

  $("#sidebarToggleBtn").on('click', function () {
    $("#sidebar").toggleClass('active');
  });

  //GET Request - Specials Menu Items
  //To make this section neater, code comments are explained in the report
  $.getJSON('https://api.jsonbin.io/b/5fa32cec47077d298f5d1b66', function (data) {

    const template = document.querySelector('#speical-menu-items');

    $.each(data, function (i, item) {
      const clone = template.content.cloneNode(true);

      specialsContent(clone, item, i);
      $('div#specials-caro').append(clone);
      $('ol#indicators').append(`<li data-target="#customCarousel" data-slide-to="${i}" ${i === 0 ? 'class="active"' : ""}></li>`
      );
    });
  });

  //Ensures the button is only clickable once
  $("#menu-button").one('click', function () {

    //GET Request - Full Menu
    $.getJSON('https://api.jsonbin.io/b/5f8f6342058d9a7b94de2a3f', function (data) {

      const template = document.querySelector('#full-menu-items');

      $.each(data, function (i, item) {
        const clone = template.content.cloneNode(true);

        fullMenuContent(clone, item);
        $('div#menu-item-name').append(clone);
      });
    });
  });
});

function fullMenuContent(clone, item) {
  clone.querySelector("#menu-item-title").innerHTML = '<i class="fas fa-utensils"></i>&nbsp;' + item.name
  clone.querySelector("#menu-item-desc").innerHTML = item.description
  clone.querySelector("#menu-item-price").innerHTML = item.price
}

function specialsContent(clone, item, i) {
  clone.querySelector("#specials-title").innerHTML = item.name
  clone.querySelector("#specials-desc").innerHTML = item.description
  clone.querySelector("#overlay").style.backgroundImage = `url('${item.image}')`

  if (i === 0) {
    clone.querySelector("#item-caro").classList.add("active")
  }

}



