// AJAX Sprite Data
$.get("img/sprite.svg", function (data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});
// Navbar Toggle
document.querySelector('.navbar__toggle').onclick = function (e) {
  document.querySelector('.navbar__nav').classList.toggle('show');
}

// Navbar Fix Position
function fixNavbar() {
  let navBar = document.querySelector('.navbar').classList
  window.pageYOffset > 70 ? navBar.add("sticky") : navBar.remove("sticky");
  window.pageYOffset > 200 ? navBar.add("in") : navBar.remove("in");
};

window.addEventListener("scroll", fixNavbar);
document.addEventListener("DOMContentLoaded", fixNavbar);

// SELECTBOX
$('select').selectric({
  maxHeight: 200
});

// NEW ITEMS SLIDER
$('.anounses-list .owl-carousel').owlCarousel({
  responsiveRefreshRate: 0,
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: false,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    560: {
      items: 2
    },
    800: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
})
// BRANDS SLIDER
$('.brands .owl-carousel').owlCarousel({
  responsiveRefreshRate: 0,
  loop: true,
  mouseDrag: false,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3
    },
    480: {
      items: 4
    },
    800: {
      items: 6
    },
    1200: {
      items: 8
    }
  }
})
// ADD to BASKET EFFECT
$('.add-to-basket').click(function (e) {
  if ($(this).hasClass('disabled')) {
    return
  }

  var cart = $('.navbar__basket');
  $(cart).addClass('animated');

  var imgWrap = $(this).parents('.catalog-list__item').children('.item-image');
  var itemImage = $(imgWrap).find('img');

  if (itemImage) {
    var imgclone = itemImage.clone()
      .offset({
        top: itemImage.offset().top,
        left: itemImage.offset().left
      })
      .css({
        'opacity': '0.5',
        'position': 'absolute',
        'height': itemImage.innerHeight() + 'px',
        'width': itemImage.innerWidth() + 'px',
        'z-index': '100'
      })
      .appendTo($('body'))
      .animate({
        'top': cart.offset().top + 10,
        'left': cart.offset().left + 10,
        'width': 40,
        'height': 40,
        'opacity': '0',
      }, 500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function () {
      $(cart).removeClass('animated');
      $(this).detach()
    });
  }

})
