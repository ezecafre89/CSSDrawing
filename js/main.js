/**
 * MainManager is resposible of handle the DOM events.
 *
 *@author Ezequiel Calvo <ezecafre@gmail.com>
 */
var MainManager = function() {

  var init = function() {
    tabListeners();

  };

  /*
   * Listens to the click of a tab element.
   */
  var tabListeners = function() {
    $('#tabContent a').on('click', function(e) {
      e.preventDefault();
      $(this).tab('show');
    });
  };

  return {
    init: init
  };
};