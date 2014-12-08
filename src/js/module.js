/*! myModule - v1.0.0 - 2014-11-24
* https://github.com/dshahin/myModule
* Copyright (c) 2014 dan shahin; Licensed MIT */
(function ($) {


  // Static method.
  $.myModule = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.myModule.options, options);
    // Return the name of your plugin plus a punctuation character.
    return ready(options); ;
  };

  // Static method default options.
  $.myModule.options = {
    backgroundColor: 'red',
    selector : '#ready',
    message: 'ready!'
  };

  function ready(options){
  	$(options.selector).html(options.message).css({'background-color' : options.backgroundColor});
  }


}(jQuery));
