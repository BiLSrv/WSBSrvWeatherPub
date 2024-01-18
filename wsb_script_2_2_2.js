// upd1a1 STABLE trim with upravl timer	https://rakosel.github.io/wsb_script_2_2_2.js
//
//					https://javascriptcompressor.com/
//
// $(document).ready(function ()
// $(document).ready(function ()
/*
$.fn.gaugeMeter = function (t) {
    var defaults = $.extend(
      {
        id: '',
        percent: 0,
        used: null,
        min: null,
        total: null,
        size: 100,
        prepend: '',
        append: '',
        theme: 'Red-Gold-Green',
        color: '',
        back: 'RGBa(0,0,0,.06)',
        width: 3,
        style: 'Full',
        stripe: '0',
        animationstep: 1,
        animate_gauge_colors: false,
        animate_text_colors: false,
        label: '',
        label_color: 'Black',
        text: '',
        text_size: 0.22,
        fill: '',
        showvalue: false
      },
      t
    );
    return this.each(function () {
      function getThemeColor(e) {
        if (
          option.color !== '' &&
          option.color !== null &&
          option.color !== undefined
        ) {
          return option.color;
        }
        var t = '#2C94E0';
        return (
          e || (e = 1e-14),
          'Red-Gold-Green' === option.theme &&
            (e > 0 && (t = '#d90000'),
            e > 10 && (t = '#e32100'),
            e > 20 && (t = '#f35100'),
            e > 30 && (t = '#ff8700'),
            e > 40 && (t = '#ffb800'),
            e > 50 && (t = '#ffd900'),
            e > 60 && (t = '#dcd800'),
            e > 70 && (t = '#a6d900'),
            e > 80 && (t = '#69d900'),
            e > 90 && (t = '#32d900')),
          'Green-Gold-Red' === option.theme &&
            (e > 0 && (t = '#32d900'),
            e > 10 && (t = '#69d900'),
            e > 20 && (t = '#a6d900'),
            e > 30 && (t = '#dcd800'),
            e > 40 && (t = '#ffd900'),
            e > 50 && (t = '#ffb800'),
            e > 60 && (t = '#ff8700'),
            e > 70 && (t = '#f35100'),
            e > 80 && (t = '#e32100'),
            e > 90 && (t = '#d90000')),
          'Green-Red' === option.theme &&
            (e > 0 && (t = '#32d900'),
            e > 10 && (t = '#41c900'),
            e > 20 && (t = '#56b300'),
            e > 30 && (t = '#6f9900'),
            e > 40 && (t = '#8a7b00'),
            e > 50 && (t = '#a75e00'),
            e > 60 && (t = '#c24000'),
            e > 70 && (t = '#db2600'),
            e > 80 && (t = '#f01000'),
            e > 90 && (t = '#ff0000')),
          'Red-Green' === option.theme &&
            (e > 0 && (t = '#ff0000'),
            e > 10 && (t = '#f01000'),
            e > 20 && (t = '#db2600'),
            e > 30 && (t = '#c24000'),
            e > 40 && (t = '#a75e00'),
            e > 50 && (t = '#8a7b00'),
            e > 60 && (t = '#6f9900'),
            e > 70 && (t = '#56b300'),
            e > 80 && (t = '#41c900'),
            e > 90 && (t = '#32d900')),
          'DarkBlue-LightBlue' === option.theme &&
            (e > 0 && (t = '#2c94e0'),
            e > 10 && (t = '#2b96e1'),
            e > 20 && (t = '#2b99e4'),
            e > 30 && (t = '#2a9ce7'),
            e > 40 && (t = '#28a0e9'),
            e > 50 && (t = '#26a4ed'),
            e > 60 && (t = '#25a8f0'),
            e > 70 && (t = '#24acf3'),
            e > 80 && (t = '#23aff5'),
            e > 90 && (t = '#21b2f7')),
          'LightBlue-DarkBlue' === option.theme &&
            (e > 0 && (t = '#21b2f7'),
            e > 10 && (t = '#23aff5'),
            e > 20 && (t = '#24acf3'),
            e > 30 && (t = '#25a8f0'),
            e > 40 && (t = '#26a4ed'),
            e > 50 && (t = '#28a0e9'),
            e > 60 && (t = '#2a9ce7'),
            e > 70 && (t = '#2b99e4'),
            e > 80 && (t = '#2b96e1'),
            e > 90 && (t = '#2c94e0')),
          'DarkRed-LightRed' === option.theme &&
            (e > 0 && (t = '#d90000'),
            e > 10 && (t = '#dc0000'),
            e > 20 && (t = '#e00000'),
            e > 30 && (t = '#e40000'),
            e > 40 && (t = '#ea0000'),
            e > 50 && (t = '#ee0000'),
            e > 60 && (t = '#f30000'),
            e > 70 && (t = '#f90000'),
            e > 80 && (t = '#fc0000'),
            e > 90 && (t = '#ff0000')),
          'LightRed-DarkRed' === option.theme &&
            (e > 0 && (t = '#ff0000'),
            e > 10 && (t = '#fc0000'),
            e > 20 && (t = '#f90000'),
            e > 30 && (t = '#f30000'),
            e > 40 && (t = '#ee0000'),
            e > 50 && (t = '#ea0000'),
            e > 60 && (t = '#e40000'),
            e > 70 && (t = '#e00000'),
            e > 80 && (t = '#dc0000'),
            e > 90 && (t = '#d90000')),
          'DarkGreen-LightGreen' === option.theme &&
            (e > 0 && (t = '#32d900'),
            e > 10 && (t = '#33db00'),
            e > 20 && (t = '#34df00'),
            e > 30 && (t = '#34e200'),
            e > 40 && (t = '#36e700'),
            e > 50 && (t = '#37ec00'),
            e > 60 && (t = '#38f100'),
            e > 70 && (t = '#38f600'),
            e > 80 && (t = '#39f900'),
            e > 90 && (t = '#3afc00')),
          'LightGreen-DarkGreen' === option.theme &&
            (e > 0 && (t = '#3afc00'),
            e > 10 && (t = '#39f900'),
            e > 20 && (t = '#38f600'),
            e > 30 && (t = '#38f100'),
            e > 40 && (t = '#37ec00'),
            e > 50 && (t = '#36e700'),
            e > 60 && (t = '#34e200'),
            e > 70 && (t = '#34df00'),
            e > 80 && (t = '#33db00'),
            e > 90 && (t = '#32d900')),
          'DarkGold-LightGold' === option.theme &&
            (e > 0 && (t = '#ffb800'),
            e > 10 && (t = '#ffba00'),
            e > 20 && (t = '#ffbd00'),
            e > 30 && (t = '#ffc200'),
            e > 40 && (t = '#ffc600'),
            e > 50 && (t = '#ffcb00'),
            e > 60 && (t = '#ffcf00'),
            e > 70 && (t = '#ffd400'),
            e > 80 && (t = '#ffd600'),
            e > 90 && (t = '#ffd900')),
          'LightGold-DarkGold' === option.theme &&
            (e > 0 && (t = '#ffd900'),
            e > 10 && (t = '#ffd600'),
            e > 20 && (t = '#ffd400'),
            e > 30 && (t = '#ffcf00'),
            e > 40 && (t = '#ffcb00'),
            e > 50 && (t = '#ffc600'),
            e > 60 && (t = '#ffc200'),
            e > 70 && (t = '#ffbd00'),
            e > 80 && (t = '#ffba00'),
            e > 90 && (t = '#ffb800')),
          'White' === option.theme && (t = '#fff'),
          'Black' === option.theme && (t = '#000'),
          t
        );
      }
      /* The label below gauge. */
      function createLabel(t, a) {
        if (t.children('b').length === 0) {
          $('<b></b>')
            .appendTo(t)
            .html(option.label)
            .css({
              'line-height': option.size + 5 * a + 'px',
              color: option.label_color
            });
        }
      }
      /* Prepend and append text, the gauge text or percentage value. */
      function createSpanTag(t) {
        var fgcolor = '';
        if (option.animate_text_colors === true) {
          fgcolor = option.fgcolor;
        }
        var child = t.children('span');
        if (child.length !== 0) {
          child.html(r).css({ color: fgcolor });
          return;
        }
        if (option.text_size <= 0.0 || Number.isNaN(option.text_size)) {
          option.text_size = 0.22;
        }
        if (option.text_size > 0.5) {
          option.text_size = 0.5;
        }
        $('<span></span>')
          .appendTo(t)
          .html(r)
          .css({
            'line-height': option.size + 'px',
            'font-size': option.text_size * option.size + 'px',
            color: fgcolor
          });
      }
      /* Get data attributes as options from div tag. Fall back to defaults when not exists. */
      function getDataAttr(t) {
        $.each(dataAttr, function (index, element) {
          if (t.data(element) !== undefined && t.data(element) !== null) {
            option[element] = t.data(element);
          } else {
            option[element] = $(defaults).attr(element);
          }

          if (element === 'fill') {
            s = option[element];
          }

          if (
            (element === 'size' ||
              element === 'width' ||
              element === 'animationstep' ||
              element === 'stripe') &&
            !Number.isInteger(option[element])
          ) {
            option[element] = parseInt(option[element]);
          }

          if (element === 'text_size') {
            option[element] = parseFloat(option[element]);
          }
        });
      }
      /* Draws the gauge. */
      function drawGauge(a) {
        if (option.animate_gauge_colors) {
          // Set gauge color for each value change.
          option.fgcolor = getThemeColor(a * 100);
        }
        if (M < 0) M = 0;
        if (M > 100) M = 100;
        var lw =
          option.width < 1 || isNaN(option.width)
            ? option.size / 20
            : option.width;
        g.clearRect(0, 0, b.width, b.height);
        g.beginPath();
        g.arc(m, v, x, G, k, !1);
        if (s) {
          g.fillStyle = option.fill;
          g.fill();
        }
        g.lineWidth = lw;
        g.strokeStyle = option.back;
        option.stripe > parseInt(0)
          ? g.setLineDash([option.stripe], 1)
          : (g.lineCap = 'round');
        g.stroke();
        g.beginPath();
        g.arc(m, v, x, -I, P * a - I, !1);
        g.lineWidth = lw;
        g.strokeStyle = option.fgcolor;
        g.stroke();
        c > M &&
          ((M += z),
          requestAnimationFrame(function () {
            drawGauge(Math.min(M, c) / 100);
            if (option.animate_text_colors) {
              // Set text color for each value change.
              $(p).find('span').css({ color: option.fgcolor });
            }
            if (defaults.showvalue === true || option.showvalue === true) {
              $(p).find('output').text(option.used);
            } else {
              $(p).find('output').text(M);
            }
          }, p));
      }

      $(this).attr('data-id', $(this).attr('id'));
      var r,
        dataAttr = [
          'percent',
          'used',
          'min',
          'total',
          'size',
          'prepend',
          'append',
          'theme',
          'color',
          'back',
          'width',
          'style',
          'stripe',
          'animationstep',
          'animate_gauge_colors',
          'animate_text_colors',
          'label',
          'label_color',
          'text',
          'text_size',
          'fill',
          'showvalue',
		  'data'
        ],
        option = {},
        c = 0,
        p = $(this),
        s = false;
      p.addClass('gaugeMeter');
      getDataAttr(p);

      if (Number.isInteger(option.used) && Number.isInteger(option.total)) {
        var u = option.used;
        var t = option.total;
        if (Number.isInteger(option.min)) {
          if (option.min < 0) {
            t -= option.min;
            u -= option.min;
          }
        }
        c = u / (t / 100);
      } else {
        if (Number.isInteger(option.percent)) {
          c = option.percent;
        } else {
          c = parseInt(defaults.percent);
        }
      }
      if (c < 0) c = 0;
      if (c > 100) c = 100;

      if (
        option.text !== '' &&
        option.text !== null &&
        option.text !== undefined
      ) {
        if (
          option.append !== '' &&
          option.append !== null &&
          option.append !== undefined
        ) {
          r = option.text + '<u>' + option.append + '</u>';
        } else {
          r = option.text;
        }
        if (
          option.prepend !== '' &&
          option.prepend !== null &&
          option.prepend !== undefined
        ) {
          r = '<s>' + option.prepend + '</s>' + r;
        }
      } else {
        if (defaults.showvalue === true || option.showvalue === true) {
          r = '<output>' + option.used + '</output>';
        } else {
          r = '<output>' + c.toString() + '</output>';
        }
        if (
          option.prepend !== '' &&
          option.prepend !== null &&
          option.prepend !== undefined
        ) {
          r = '<s>' + option.prepend + '</s>' + r;
        }

        if (
          option.append !== '' &&
          option.append !== null &&
          option.append !== undefined
        ) {
          r = r + '<u>' + option.append + '</u>';
        }
      }

      option.fgcolor = getThemeColor(c);
      createSpanTag(p);

      if (
        option.style !== '' &&
        option.style !== null &&
        option.style !== undefined
      ) {
        createLabel(p, option.size / 13);
      }

      $(this).width(option.size + 'px');

      var b = $('<canvas></canvas>')
          .attr({ width: option.size, height: option.size })
          .get(0),
        g = b.getContext('2d'),
        m = b.width / 2,
        v = b.height / 2,
        x = (360 * option.percent * (Math.PI / 180), b.width / 2.5),
        k = 2.3 * Math.PI,
        G = 0,
        M = 0 === option.animationstep ? c : 0,
        z = Math.max(option.animationstep, 0),
        P = 2 * Math.PI,
        I = Math.PI / 2;
      var child = $(this).children('canvas');
      if (child.length !== 0) {
        /* Replace existing canvas when new percentage was written. */
        child.replaceWith(b);
      } else {
        /* Initially create canvas. */
        $(b).appendTo($(this));
      }

      if ('Semi' === option.style) {
        k = 2 * Math.PI;
        G = 3.13;
        P = 1 * Math.PI;
        I = Math.PI / 0.996;
      } else if ('Arch' === option.style) {
        k = 2.195 * Math.PI;
        G = 655.99999;
        P = 1.4 * Math.PI;
        I = Math.PI / 0.8335;
      }
      drawGauge(M / 100);
    });
};
*/
window.onload = function () {

	    /*var idArr = [];
        $(".box").each(function(){
            idArr.push($(this).attr("id"));
        });*/
        // Join array elements and display in alert
        //alert(idArr.join(", "));

//var gaugeElement = document.getElementsByTagName('canvas')[0];	
// Design WSocket gw:'ws://${window.location.hotname}/ws',

var gateway = 
{
		gw:'ws://192.168.1.45/ws',
		timeout:2000,
		attempts: 60,		
		dataType: 'json',
		protocol:''
};
var WSsocket = new WebSocket(gateway.gw,gateway.timeout,gateway.attempts,gateway.dataType,gateway.protocol);

	
var str_out = "";
var str_out1 = "";
var uart_json = {};
var temp_json = {};
var input_lm75 = {};
var tmranim = 2000; // animate [s]
// This jQuery https://canvas-gauges.com/documentation/examples/ 
var CanvGaugeArr = [];

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
