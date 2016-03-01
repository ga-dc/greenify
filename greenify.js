(function($){
  $.fn.greenify = function(){
    this.css("color", "green");
    this.css("background-color", "white");
    this.addClass("greenified");
    return this;
  };

  $.fn.addGreenDiv = function(){
    var div = $("<div>jQuery plugins are really really cool!</div>").greenify();
    this.append(div);
    return div;
  };

  $.fn.limeify = function() {
     this.css("background-color", "lime");
     return this;
   };
})(jQuery);
