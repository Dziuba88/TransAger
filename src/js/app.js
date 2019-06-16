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

// IMAGE SLIDER
$('.slider-module').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  mouseDrag: false,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  items: 1
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
$('.btn__basket').click(function (e) {
  if ($(this).hasClass('disabled')) {
    return
  }
  var cart = $('.navbar__basket');
  $(cart).addClass('animated');
  setTimeout(() => {
    $(cart).removeClass('animated');
  }, 1000);
})
// Change Profile Type
$('.profile--form [data-target]').on('click', function (e) {
  $(this).tab('show')
})
// Enable TVA
$('#hastva').on('change', function (e) {
  var isChecked = $('#hastva:checkbox:checked').length > 0;
  if (isChecked) {
    return $('input[name=companyTVA]').removeAttr("disabled").attr('required', 'required');
  }
  $('input[name=companyTVA]').attr('disabled', 'disabled').removeAttr("required");
})
// Input NUMBER
$('.input__number .input-plus').on('click', function (e) {
  var inp = $(this).parent('.input__number').children('input')[0];

  $(inp).val(function (i, oldval) {
    return parseInt(oldval, 10) + 1;
  });
});
$('.input__number .input-minus').on('click', function (e) {
  var inp = $(this).parent('.input__number').children('input')[0];

  if (inp.value <= 1) {
    return
  }

  $(inp).val(function (i, oldval) {
    return parseInt(oldval, 10) - 1;
  });
});

// MAP Settings
if (document.getElementById('google-map')) {
  var map_location = [46.994165, 28.908851];
  var contentString = '<div id="content"><h3 id="firstHeading" class="firstHeading">«TRANS AGER» S.R.L.</h3><div id="bodyContent"><p><b>MD-2037, mun.Chișinău, str.Uzinelor, 171-A</b></p><p><b>tel:</b> +373 60 097 755</p><p><b>tel/fax:</b> +373 22 42 87 49</p><p><b>e-Mail:</b> transager@company.md</p></div></div>';
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 15,
    center: new google.maps.LatLng(map_location[0], map_location[1]),
    disableDefaultUI: true
  });

  var map_marker = new google.maps.Marker({
    position: new google.maps.LatLng(map_location[0], map_location[1]),
    map: map,
    title: '"Trans Ager" SRL',
    icon: {
      url: 'img/marker.png',
      scaledSize: new google.maps.Size(48, 48)
    }
  });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  map_marker.addListener('click', function () {
    console.log(1);

    infowindow.open(map, map_marker);
  });

  window.addEventListener("resize", function () {
    window.setTimeout(function () {
      map.panTo(map_marker.getPosition());
    }, 250);

  });

}
