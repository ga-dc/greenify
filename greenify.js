(function($){
  $.fn.greenify = function(){
    this.css("color", "green")
    return this
  }

  $.fn.addGreenDiv = function(){
    this.append($("<div>jQuery plugins are really really cool!</div>").greenify())
    return this
  }
})(jQuery);
