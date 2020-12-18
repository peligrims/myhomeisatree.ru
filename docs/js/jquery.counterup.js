/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 400,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $this.text();
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), $settings.delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'), $settings.delay);
        };

        // Perform counts when the element gets into view
        $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );

$(document).ready(function(){
        var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
    	var engImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Grossbritanien.gif";
		var deuImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Deutschland.gif";
		var fraImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Frankreich.gif";

		var imgBtnSel = $('#imgBtnSel');
		var imgBtnIta = $('#imgBtnIta');
		var imgBtnEng = $('#imgBtnEng');
		var imgBtnDeu = $('#imgBtnDeu');
		var imgBtnFra = $('#imgBtnFra');

		var imgNavSel = $('#imgNavSel');
		var imgNavIta = $('#imgNavIta');
		var imgNavEng = $('#imgNavEng');
		var imgNavDeu = $('#imgNavDeu');
		var imgNavFra = $('#imgNavFra');

		var spanNavSel = $('#lanNavSel');
		var spanBtnSel = $('#lanBtnSel');

		imgBtnSel.attr("src",itaImgLink);
		imgBtnIta.attr("src",itaImgLink);
		imgBtnEng.attr("src",engImgLink);
		imgBtnDeu.attr("src",deuImgLink);
		imgBtnFra.attr("src",fraImgLink);

		imgNavSel.attr("src",itaImgLink);
		imgNavIta.attr("src",itaImgLink);
		imgNavEng.attr("src",engImgLink);
		imgNavDeu.attr("src",deuImgLink);
		imgNavFra.attr("src",fraImgLink);

		$( ".language" ).on( "click", function( event ) {
			var currentId = $(this).attr('id');

			if(currentId == "navIta") {
				imgNavSel.attr("src",itaImgLink);
				spanNavSel.text("ITA");
			} else if (currentId == "navEng") {
				imgNavSel.attr("src",engImgLink);
				spanNavSel.text("ENG");
			} else if (currentId == "navDeu") {
				imgNavSel.attr("src",deuImgLink);
				spanNavSel.text("DEU");
			} else if (currentId == "navFra") {
				imgNavSel.attr("src",fraImgLink);
				spanNavSel.text("FRA");
			}

			if(currentId == "btnIta") {
				imgBtnSel.attr("src",itaImgLink);
				spanBtnSel.text("ITA");
			} else if (currentId == "btnEng") {
				imgBtnSel.attr("src",engImgLink);
				spanBtnSel.text("ENG");
			} else if (currentId == "btnDeu") {
				imgBtnSel.attr("src",deuImgLink);
				spanBtnSel.text("DEU");
			} else if (currentId == "btnFra") {
				imgBtnSel.attr("src",fraImgLink);
				spanBtnSel.text("FRA");
			}
			
		});
});