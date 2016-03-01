(function($){
$.fn.greenify = function() {
  this.css("color", "green");
  return this;
};
$.fn.addGreenDiv = function() {
  var newDiv = $("<div>Green Divs are p sweet</div>").greenify();
  this.append(newDiv);
  return this;
};
$.fn.removeDiv = function() {
  $('div').eq(0).remove();
  return this;
};
})(jQuery);
