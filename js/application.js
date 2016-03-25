$(document).foundation();

$(document).ready(function () {

	// Hiding menu on scroll
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 500) {
			alert('test2');
	   	$('#nav-bar').toggleClass('active');
		}
	});
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

