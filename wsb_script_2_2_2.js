// upd1a2 STABLE trim with upravl timer	https://rakosel.github.io/wsb_script_2_2_2.js
//
//					https://javascriptcompressor.com/

var gateway = 
{
		gw:'ws://192.168.1.45/ws',
		timeout:2000,
		attempts: 60,		
		dataType: 'json',
		protocol:''
};
var WSsocket;

window.onload = function () {
	    /*var idArr = [];
        $(".box").each(function(){
            idArr.push($(this).attr("id"));
        });*/
        // Join array elements and display in alert
        //alert(idArr.join(", "));
//var gaugeElement = document.getElementsByTagName('canvas')[0];	
// Design WSocket gw:'ws://${window.location.hotname}/ws',
var str_out = "";
var str_out1 = "";
var uart_json = {};
var temp_json = {};
var input_lm75 = {};
var tmranim = 2000; // animate [s]


// This jQuery https://canvas-gauges.com/documentation/examples/ 
var CanvGaugeArr = [];



	
var url = "https://bilsrv.github.io/WSBSrvWeatherPub/GaugeMeter.js";
$.getScript( url, function() {
	$(".macnt").load('https://bilsrv.github.io/WSBSrvWeatherPub/WSB_page_main.html').html();
};
	
console.log("ready wsbscript ok!");
// Canvas .each Default Settings 
$('canvas').each(function(index){	
    CanvGaugeArr.push(new LinearGauge({
    renderTo: $( this ).attr('id'),
    width: 100,
    height: 300,
	colorPlate: "black",
	colorUnits: "black",
	colorNeedle: "#222",
	colorNeedleEnd: "",
	colorBar: "#f5f5f5",
	colorTitle: "#C90076",
    colorPlate: "#ccc",
	colorPlateEnd: "#ccc",
	colorBarStroke: "black",
	borderRadius: "20",
	borders: "true",
	minValue: -50,
	maxValue: 50,
	minorTicks: 11,
	majorTicks: ['-50','-40','-30','-20','-10','0','10','20','30','40','50'],
    colorNumbers: ['cyan','blue','blue','blue','black','black','black','green','green','#CE7E00','red'],
    colorMajorTicks: ['yellow','green','blue','blue','black','black','black','black','black','black','black'],
    fontNumbersSize: "30",
	fontValueSize: "45",
	fontTitleSize: "35",
	fontUnitsSize: "45",
	value: 0,
	units: '°C',
	title: 'noname',
	animationRule: 'elastic',
	animationDuration: 250
}).draw());
	//console.log( index + ": " + $( this ).text() + $( this ).attr('id')+ " " );    units: '°C',	colorPlateEnd: "#327ac0",
});

	
// This jQuery GaugeMeter Plugin 
// theme: ["Red-Gold-Green","Green-Gold-Red","DarkBlue-LightBlue","LightBlue-DarkBlue"],
// style: ["Semi","Arch"],
var GuageMeter =
{
	theme: "Red-Gold-Green",
	text: "-60",
	style: "Arch",
	text_size: "0.15",
	append: "°C",
	percent: 77,
	size: 110,
	width: 10,
	color: null,
	animate_gauge_colors: true,
	animate_text_colors:  false,
	label: "Темпер",
	label_color: null
}


$(".GaugeMeter1T").gaugeMeter(GuageMeter);
GuageMeter.append = "%";
GuageMeter.label = "Влажн-ь"
$(".GaugeMeter1H").gaugeMeter(GuageMeter);
GuageMeter.append = "ммРт";
GuageMeter.label = "Давл-е"
GuageMeter.text_size = "0.18";
$(".GaugeMeter1P").gaugeMeter(GuageMeter);
GuageMeter.append = "";
GuageMeter.label = "Воздух"
$(".GaugeMeter1AQ").gaugeMeter(GuageMeter);
//$( "div:has(.GaugeMeter1T)").addClass("bd_fail");.fadeOut(1000)
$( ".GaugeMeter1T").addClass("bd_fail");
//$( ".GaugeMeter1T" ).find('bd_fail').fadeIn(1000);

//gaugeArr[1].update({ value: '47' });

					/*$('canvas').attr({value:'51'})
					/$('canvas').attr({width:'100',height:'150'});*/
					
					/*guagelm75_t.attr('data-value','47');guagelm75_t.attr('data-width','100');
					guagelm75_t.attr('data-height','150');
					guagelm75_t.attr('data-value','47');*/

$(".bt0st").attr("value", "off");
$(".navia").addClass("list-group-item list-group-item-action bg-light border");
$("#esp_tx").val("wsbuser.prints(node.heap());");
$("#esp_urx").val("");
//rs = setInterval(refr_rtc, 3000);
i = 0;
	                // Initialize GaugeMeter plugin
$(".GaugeMeter").gaugeMeter();
	

WSsocket = new WebSocket(gateway.gw,gateway.timeout,gateway.attempts,gateway.dataType,gateway.protocol);

initWebSocket(WSsocket);
	
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
};


function sub_grad()
{
	WSsocket.send("toggle");
	alert("send tx");
}

function initWebSocket(ws)
{
	ws.onopen = onOpen;
	ws.onclose = onClose;
	ws.onmessage = onMessage; // add this line
	ws.onerror = onError;
	// socket.isConnected(); // or: socket.isConnected(function(connected) {});
	// socket.listen(function(data) {});
	// socket.remove(listenerCallback);
	// socket.removeAll();
}

function onOpen(event)
{
	console.log('ws opened');
}

function onClose(event)
{
	if (event.wasClean) 
	{
        console.log('Соединение закрыто чисто');
	}
	console.log('ws close');
}

function onError(error) {
	console.log('ws error');
};
 


function onMessage(event)
{
	console.log(event.data);
	alert("rx"+event.data);
	
	WSsocket.readyState(event.data);
/*	var j=0,ii=0;
	var tmpf = 0.0;
	//var jT = 0;
	//var jH = 0;
	//var jP = 0;
	var T_cnt = 1
	var H_cnt = 1
	var P_cnt = 1
//    console.log(d);
    if (s != 200) {
        as0.removeClass("badge-success");
        as0.addClass("badge-danger");
        as0.text("Нет связи");
        as1.removeClass("badge-success");
        as1.addClass("badge-danger");
        as1.text("Нет связи");
        $(".swdeb").removeAttr("disabled");
        ftmpd();
        //console.log("Connection proplem!");
        return 0;
        //clearTimeout(rs.handle);
    } else {

        as0.removeClass("badge-danger");
        as1.removeClass("badge-danger");
        as0.addClass("badge-success");
        as1.addClass("badge-success");
        as0.text("ОК ");
		as1.text("ОК ");
        if (typeof d === "string") {
            console.log("priem ok!");
            try {
                temp_json = JSON.parse(d);
                console.log(s, temp_json);
            } catch (e) {
                // ftvall - form clear
                ftvall("");
                console.log(s, e.message);
                return 0;
            }
        } else {
            //console.log("d not string");
            ftvall("");
            return 0;
        }
    }
    //$(".btns_bme280_1").fadeIn();
    // posle input BME280: WEB -> ESP

    if (temp_json["LM75_CMP"]) {
        //$(".btns_bme280_1").removeClass('badge-success');
        //$(".btns_bme280_1").removeClass('badge-danger');
        try {
            var aou1 = parseInt(temp_json.LM75_CMP[0].trim(), 10);
            var aou2 = parseInt(temp_json.LM75_CMP[1].trim(), 10);
            //console.log("temp_json.LM75_CMP[0]" + aou1);
            //console.log("temp_json.LM75_CMP[1]" + aou2);
            if (aou1 == 1) {
                $("#lm75_t1_chk").prop("checked", true);
            } else {
                $("#lm75_t1_chk").prop("checked", false);
            }
            if (aou2 == 1) {
                $("#lm75_t2_chk").prop("checked", true);
            } else {
                $("#lm75_t2_chk").prop("checked", false);
            }
        } catch (e) {
            //console.log(e);
        }
    }*/
	WSsocket.close();

	
}
