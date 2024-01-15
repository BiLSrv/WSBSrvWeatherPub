// upd1a1 STABLE trim with upravl timer	https://rakosel.github.io/wsb_script_2_2_2.js
//
//					https://javascriptcompressor.com/
//
	// $(document).ready(function ()
window.onload = function () {
    $(".bt0st").attr("value", "off");
    $(".navia").addClass("list-group-item list-group-item-action bg-light border");
    $("#esp_tx").val("wsbuser.prints(node.heap());");
    $("#esp_urx").val("");
    rs = setInterval(refr_rtc, 3000);
    i = 0;
	
	                // Initialize GaugeMeter plugin
                $(".GaugeMeter").gaugeMeter();

                // Bind new handler to init and update gauges.
                ko.bindingHandlers.gaugeValue = {
                    init: function(element, valueAccessor) {
                        $(element).gaugeMeter({ percent: ko.unwrap(valueAccessor()) });
                    },
                    update: function(element, valueAccessor) {
                        $(element).gaugeMeter({ percent: ko.unwrap(valueAccessor()) });
                    }
                };

                // Create view model with inital gauge value 15mph
                // Use observable for easy update.
                var myViewModel = {
                    Percent: ko.observable(15)
                };
                ko.applyBindings(myViewModel);
	
    //$(".bsn0").collapse('show');
    smgh();
};
