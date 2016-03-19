$(document).foundation();

$('.grid').masonry({
  // options
  itemSelector: '.grid-item'
});


var navBar            = $('#nav-bar'),
    navToggleClose    = $('#nav-bar-toggle-close'),
    navToggle         = $('#nav-bar-toggle'),
    searchTrigger     = $('#search-trigger'),
    searchTriggerIcon = $('#search-trigger i'),
    closeSearch       = $('#close-search'),
    searchContainer   = $('#search-container');

$(function () {
  searchTrigger.on('click', function () {
    searchContainer.toggleClass('open');
    searchTriggerIcon.toggleClass('active');
  })
  closeSearch.on('click', function () {
    searchContainer.toggleClass('open');
    searchTriggerIcon.toggleClass('active');
  })
});

$(function () {
  navToggle.on('click', function () {
    navBar.toggleClass('active');
    navToggle.toggleClass('inactive');
    navToggleClose.toggleClass('active');
  })
  navToggleClose.on('click', function () {
    navBar.toggleClass('active');
    navToggle.toggleClass('inactive');
    navToggleClose.toggleClass('active');
  })
});

