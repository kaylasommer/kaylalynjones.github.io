var smoothScroll, FastClick;
(function(){
  'use strict';
  //smooth scrolling------------------------------------------------------------
  smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function(toggle, anchor){}, // Function to run before scrolling
    callbackAfter: function(toggle, anchor){} // Function to run after scrolling
  });
  //-----------------------
  window.addEventListener('load', function(){
    FastClick.attach(document.body);
  }, false);
})();
