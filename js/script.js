$(document).ready(function () {
  $('#portfolio_project').mixItUp({
  });
});

$(document).ready(function () {
  let filterButton = $('.filter-block_button');
  filterButtonActive = 'filter-active_button';

  filterButton.on('click', function () {
    if (filterButton.hasClass(filterButtonActive)) {
      filterButton.removeClass(filterButtonActive);
    }
    $(this).toggleClass(filterButtonActive);
  });
});


$(document).ready(function () {
  $("#bottom-slider").owlCarousel({
    items: 8,
    itemsScaleUp: true,
    navigation: true,
    theme: "owl_brand-slider",
    navigationText: ["", ""],
    pagination: false,
    itemsDesktop: [1305, 8],
    itemsDesktop: [1305, 6],
    itemsDesktopSmall: [990, 4],
    itemsTablet: [775, 3],
    itemsMobile: [481, 2],
    itemsMobile: [360, 1]
  });
});

$(document).ready(function () {
  $(".main-menu a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
    scrollSpeed: 700,
  });
});

if ($(window).width() < 420) {
  $("#portfolio_project").owlCarousel({
    items: 3
  });
}
$(document).ready(function () {
  let navToggleButton = $('.navigation__toogle'),
  navBlock = $('.main-menu'),
  navBlockOpen = 'main-menu--open',
  navLink = $('.main-menu a'),
  navIcon = $('#mobile-menu'),
  navIconActive = 'burger-btn-active',
  navFix = 'navigation__toogle--fixed';

    //Мобильная навигация
    navToggleButton.on('click', function(e) {
        e.preventDefault(); //отменяем стандартное поведение элемента
        navBlock.toggleClass(navBlockOpen);
        navIcon.toggleClass(navIconActive);
        navToggleButton.toggleClass(navFix);
      });

    // По клику по пункту в мобильном меню, удаляем класс и переходим к выбранному пункту

    navLink.on('click', function() {   // Находим в навигации пункты меню (ссылки)
      navBlock.removeClass(navBlockOpen); // При клике удаляем класс --open 
      navIcon.toggleClass(navIconActive);
      navToggleButton.toggleClass(navFix);
    });

    $(window).resize(function(){

      var w = $(window).width();

      if(w > 992 ) {
        // navBlock.removeClass(navBlockOpen);
        // navIcon.toggleClass('navIconActive');

      } else {
        // navBlock.toggleClass(navBlockOpen);
      }

    });
  });
