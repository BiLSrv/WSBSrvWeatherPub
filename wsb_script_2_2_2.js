// upd19a
// https://bilsrv.github.io/WSBSrvWeatherPub/wsb_script_2_2_2.js
// reverse panelki dlya debug
var sds, mds, sets, maOBJ, canvasOBJ, GuageMeterOBJ;
sds = $(".sideset");
mds = $(".macnt");
sets = $(".setcnt");
cnftmp = $(".scntf");
	
var CanvGaugeArr = [];
	
//$(document).ready(function() {
var gateway = 'wss://wsb.bilymo.keenetic.pro/ws'
/*
var gateway = 
{
		//gw:'wss://wsb.bilymo.keenetic.pro/ws',
		gw:'ws://wsb.bilymo.keenetic.pro/ws',
		timeout:2000,
		attempts: 60,		
		dataType: 'json',
		protocol:''
};
*/
var WSsocket;

var GuageMeter =
{
	theme: "Red-Gold-Green",
	text: "-60",
	style: "Arch",
	text_size: "0.15",
	append: "°C",
	percent: 77,
	size: 70,
	width: 10,
	color: "#DCDCDC",
	animate_gauge_colors: true,
	animate_text_colors:  false,
	label: "Темпер",
	label_color: null
}


$('body').delay(500).queue(function() {
    //$(this).load('myPage.php');
WSsocket = new WebSocket(gateway);
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
	title: String($(this).attr('id')),
	animationRule: 'elastic',
	animationDuration: 250
}).draw());
	//console.log( String($(this).attr('id')) + ": " + $( this ).text() + $( this ).attr('id')+ " " );    units: '°C',	colorPlateEnd: "#327ac0",
});

$(".GaugeMeter1T").gaugeMeter(GuageMeter);
GuageMeter.append = " С";
GuageMeter.label = "Темпер-а"
GuageMeter.text_size = "0.18";
GuageMeter.back="#DCDCDC"
$(".GaugeMeter1H").gaugeMeter(GuageMeter);
GuageMeter.append = "ммРт";
GuageMeter.label = "Влажн-ь"
GuageMeter.text_size = "0.18";
GuageMeter.back="#DCDCDC"
$(".GaugeMeter1P").gaugeMeter(GuageMeter);
GuageMeter.append = "ммРт";
GuageMeter.label = "Давл-е"
GuageMeter.text_size = "0.18";
GuageMeter.back="#DCDCDC"
$(".GaugeMeter1AQ").gaugeMeter(GuageMeter);
GuageMeter.append = "";
GuageMeter.label = "Воздух"
GuageMeter.text_size = "0.18";
GuageMeter.back="#DCDCDC"
//$( "div:has(.GaugeMeter1T)").addClass("bd_fail");.fadeOut(1000)
//$( ".GaugeMeter1T").addClass("bd_fail");
//$( ".GaugeMeter1T" ).find('bd_fail').fadeIn(1000);
$(".GaugeMeter").gaugeMeter();

if(WSsocket.readyState!=1)
{
	initWebSocket();
}

//maOBJ = $('*');
canvasOBJ = $( "canvas" ).get();
GuageMeterOBJ = $("GaugeMeter").get();
//console.log(maOBJ);
console.log(GuageMeterOBJ);
	
});


function sdmc_sh() {
    mds.removeClass("collapse show");
    mds.addClass("collapse hide");
    sds.removeClass("collapse hide");
    sds.addClass("collapse show");
    sets.removeClass("collapse hide");
    sets.addClass("collapse show");
}

function sdmc_rm() {
    mds.removeClass("collapse hide");
    mds.addClass("collapse show");
    sds.removeClass("collapse show");
    sds.addClass("collapse hide");
    sets.removeClass("collapse show");
    sets.addClass("collapse hide");
}

function ftvall(cl) {
    for (i = 0; i < maOBJ.length; i++) {
        $("#" + maOBJ[i].name).val(cl);
        $("#" + maOBJ[i].name)
			.removeClass("is-invalid")
			.html();
        $("#" + maOBJ[i].name)
			.removeClass("is-valid")
			.html();
    }
}

function ftmpd() {
    for (i = 0; i < maOBJ.length; i++) {
        $("#" + maOBJ[i].name)
			.removeClass("is-invalid")
			.html();
        $("#" + maOBJ[i].name)
			.removeClass("is-valid")
			.html();
    }
}

function spt0() {
    var lines = $("#esp_tx")
		.val()
		.replace(/^[\n]+$/g, "")
		.split(/[\n]+/);
    return lines;
}

function smgh() {
    if (!device.mobile()) {
        $(".bt0st").click();
    }
}

// MENU - dublirovanmie
$(".bt0st1").click(function bjst1() {
    $(".bt0st").click();
});

function erxclr_uart() {
    $("#esp_tx").val("");
}

function etxclr_uart() {
    $("#esp_urx").val("");
    str_out1 = "";
}


function rm_b() {
    // remove deviser HD
    $(".mc1").removeClass("col-md-8 col-xl-8").html();
    $(".bsn0").removeClass("col-md-4 col-xl-4").html();
    $(".mc1").removeClass("noscroll collapse hide");
    $(".mc1").addClass("col-12").html();
}

function sh_b() {
    // deviser HD
    $(".mc1").remove("col-12").html();
    $(".mc1").addClass("col-md-8 col-xl-8").html();
    $(".bsn0").addClass("col-md-4 col-xl-4").html();
}

function rms_b() {
    //$('.bsn0').removeClass('col-12').html();
    $(".bsn0").removeClass("col-12 overlay").html();
    $(".mc1").removeClass("noscroll collapse hide");
}

function shs_b() {
    $(".bsn0").addClass("col-12 overlay").html();
    $(".mc1").addClass("noscroll collapse hide").html();
}

function sub_init()
{
	//
//https://javascriptcompressor.com/
//gaugeArr[1].update({ value: '47' });

					/*$('canvas').attr({value:'51'})
					/$('canvas').attr({width:'100',height:'150'});*/
					
					/*guagelm75_t.attr('data-value','47');guagelm75_t.attr('data-width','100');
					guagelm75_t.attr('data-height','150');
					guagelm75_t.attr('data-value','47');*/

//rs = setInterval(refr_rtc, 3000);
	

initWebSocket();

// Initialize GaugeMeter plugin
}

function sub_grad()
{
	//
//https://javascriptcompressor.com/
//gaugeArr[1].update({ value: '47' });

					/*$('canvas').attr({value:'51'})
					/$('canvas').attr({width:'100',height:'150'});*/
					
					/*guagelm75_t.attr('data-value','47');guagelm75_t.attr('data-width','100');
					guagelm75_t.attr('data-height','150');
					guagelm75_t.attr('data-value','47');*/
console.log(WSsocket.readyState);
//rs = setInterval(refr_rtc, 3000);
if (WSsocket.readyState === 1) {
	WSsocket.send('time');
} 

// Initialize GaugeMeter plugin
}
// https://learn.javascript.ru/websocket
// event websocket
// event.error
// event.wasClean
//   
// event.code === 1000
// event.reason === "работа закончена"
// event.wasClean === true (закрыто чисто)
//socket.readyState со значениями:
//
//0 – «CONNECTING»: соединение ещё не установлено,
//1 – «OPEN»: обмен данными,
//2 – «CLOSING»: соединение закрывается,
//3 – «CLOSED»: соединение закрыто.

// Make the function wait until the connection is made...
// 
//  waitForSocketConnection(socket, () => {
//        socket.send(action.payload);
 // })
function waitForSocketConnection(socket, callback)
{
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                console.log("Connection is made")
                if (callback != null){
                    callback();
                }
            } else {
                console.log("wait for connection...")
                if (callback != null)
					waitForSocketConnection(socket, callback);
            }

        }, 500); // wait 5 milisecond for the connection...
}


function initWebSocket()
{
	console.log('Trying to open a WebSocket connection...');
	
	WSsocket.onopen = onOpen;
	WSsocket.onclose = onClose;
	WSsocket.onmessage = onMessage; // add this line
	WSsocket.onerror = onError;
	// socket.isConnected(); // or: socket.isConnected(function(connected) {});
	// socket.listen(function(data) {});
	// socket.remove(listenerCallback);
	// socket.removeAll();
}

function onOpen(event)
{
	//console.log('ws opened');
	state_online(true);
	WSsocket.send('time');
}

function onClose(event)
{
	// wasClean Returns a boolean value that Indicates whether or not the connection was cleanly closed.
	// reason
	// Returns an unsigned short containing the close code sent by the server.
	state_online(false);
	if (event.wasClean) 
	{
        console.log('Соединение закрыто чисто');
	}
	waitForSocketConnection(WSsocket, null);
	console.log('ws close');
	WSsocket.close();
}

function onError(event) {
	// only event
	if(WSsocket.readyState==2 || WSsocket.readyState==3)
	{
		state_online(false);
		waitForSocketConnection(WSsocket, null);
		console.log('ws error'+event);
	}
};
 

function onMessage(event)
{

	// data
	// origin
if(WSsocket.readyState==1)
{
	        try {
                temp_json = JSON.parse(event.data);
            } catch (e) {
                console.log(e.message);
                return 0;
            }
}
else
	return 0;
	

/*
if (temp_json["temp"]) {
	    console.log(temp_json["temp"]);
		j_T = 0.0; j_H = 0.0; j_P = 0.0;
		T_cnt = 0; H_cnt = 0; P_cnt = 0;
        for (i = 3; i <= maOBJ.length && (i - 3) <= temp_json.temp.length; i++) {
            try {
		console.log("temp_json:", parseFloat(temp_json.temp[T_arr[ii]]));
            
				if(ii<T_arr.length && parseFloat(temp_json.temp[T_arr[ii]]) != NaN && temp_json.temp[T_arr[ii]] != "#ERR")
				{
					tmpf = parseFloat(temp_json.temp[T_arr[ii]]);
					if(tmpf<0)
					{j=-1;}
					else
					{j=j*j}
					j_T+=Math.abs(tmpf);T_cnt++; 
					//console.log("a5 "+" "+ii+" "+parseFloat(temp_json.temp[T_arr[ii]])+" "+T_arr[ii]+" "+temp_arr[ii]+" "+T_arr+" "+T_cnt);
				}
				if(ii<H_arr.length && parseFloat(temp_json.temp[H_arr[ii]]) != NaN && temp_json.temp[H_arr[ii]] != "#ERR")
				{
					tmpf = parseFloat(temp_json.temp[H_arr[ii]]);
					H_cnt++;
					if(tmpf>=99.0)
					{H_cnt--;}
					else if(H_arr[ii] == 3)
					{j_H+=(parseFloat(temp_json.temp[H_arr[ii]])-9.5);}
					else 
					{j_H+=parseFloat(temp_json.temp[H_arr[ii]]);}
				}
				if(ii<P_arr.length && parseFloat(temp_json.temp[P_arr[ii]]) != NaN && temp_json.temp[P_arr[ii]] != "#ERR")
				{
					j_P+=parseFloat(temp_json.temp[P_arr[ii]]);P_cnt++;
				}	
					ii++;
				}
				catch (e) 
				{
					console.log(e);
				}
				$("#" + maOBJ[i].name).val(temp_json.temp[i - 3]);
				}
			}

			j_T=(j_T*j)/T_cnt; j_H=j_H/H_cnt; j_P=j_P/P_cnt;
			*/
//$('.mcu_tus').text(temp_json.time[0].toString());
//$('.ptime').text(temp_json.time[1].toString());
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
	//WSsocket.close();
}

function state_online(state) 
{
	if(state==true)
	{$(".tst0").removeClass("bg-danger");$(".tst0").addClass("bg-success").text("ОК")}
	else
	{$(".tst0").removeClass("bg-success");$(".tst0").addClass("bg-danger").text("off")};
}


	
window.onload = function () {


	
$(".bt0st").attr("value", "off");
$(".navia").addClass("list-group-item list-group-item-action bg-light border");
$("#esp_tx").val("wsbuser.prints(node.heap());");
$("#esp_urx").val("");
	
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip)
    })

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  // js-docs-end live-toast

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // js-docs-start live-alert
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
  }

  const alertTrigger = document.getElementById('liveAlertBtn')
  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success')
    })
  }
  // js-docs-end live-alert

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      bootstrap.Carousel.getOrCreateInstance(carousel)
    })

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // js-docs-start varying-modal-content
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
  if (myOffcanvas) {
    myOffcanvas.forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  }
	
	
	
	
	
	
}