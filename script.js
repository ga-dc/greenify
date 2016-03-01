$(document).ready(function(){
    (function($){

        $.fn.greenify = function(){
            this.css("color", "green");
            return this;
        };

        $.fn.addGreenDiv = function(){
            newDiv = $("<div>Green Divs are awesome.</div>").greenify();
            this.append(newDiv);
            return this;
        };

        $.fn.switchGreen = function(){
            var colorArray = ["Chartreuse","DarkGreen","DarkOliveGreen", "DarkSeaGreen","ForestGreen", "GreenYellow", "LawnGreen","LightGreen","Lime", "LimeGreen","MediumSpringGreen", "OliveDrab", "PaleGreen"];

            for(i=0; i<colorArray.length; i++){
                this.css("color", colorArray[i]);
            }
            return this;

        };
    })(jQuery);


    $("h1").on("click", function(){
    $("body").append("<div>jQuery is awesome!</div>");
    });

    $("h2").on("click", function(){
        $("div").greenify();
    });

    $("h3").on("click", function(){
        $("body").addGreenDiv();
    });

    $("h4").on("click", function(){
        $("div").switchGreen();
    });
});
