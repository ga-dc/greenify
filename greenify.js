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

  $.fn.addGreenGrid = function(rows, columns) {
    if (!rows) rows = 4
    if (!columns) columns = 4
    var height = "25px", width = "25px"
    var table = $("<table></table>")
    var i, j
    for (i = 0; i < rows; i++) {
      var row = $("<tr></tr>")
      for (j = 0; j < columns; j++) {
        var cell = $("<td></td").css({
            "background-color": "green",
            "height": height,
            "width": width,
        })
        row.append(cell)
      }
      table.append(row)
    }
    this.append(table)
    return this
  }
})(jQuery)
