(function($){
  $.fn.greenify = function(){
    this.css("color", "green")
    this.css("background-color", "white")
    this.addClass("greenified")
    return this
  }

  $.fn.addGreenDiv = function(){
    var div = $("<div>jQuery plugins are really really cool!</div>").greenify()
    this.append(div)
    return div
  }

  $.fn.switchColors = function(){
    var self = this
    this.css({
      "color": self.css("background-color"),
      "background-color": self.css("color")
    })
  }

  $.fn.growTree = function(){
    this.append($("<div><img src='http://images.clipartpanda.com/oak-tree-clipart-tree-clip-art_1404139671.jpg'/></div>"));
  }
})(jQuery);
