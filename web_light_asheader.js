// upd1a ligtht)version	https://rakosel.github.io/wsb_script_2_2_1.js
//
//					https://javascriptcompressor.com/
//
// 02.01.22
//	+ Ispravil "H"
//	1127 line pravka lm75
// 747,751 stroka trim ???
// except (
// http://qaru.site/questions/66646/how-to-recognize-touch-events-using-jquery-in-safari-for-ipad-is-it-possible
// function time(){
//https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
// }
// https://jscompress.com/
// https://beautifytools.com/javascript-minifier.php
// https://www.minifier.org/
// https://unminify.com/
// https://javascript-minifier.com/ https://jscompress.com/
// http://dean.edwards.name/packer/
// https://closure-compiler.appspot.com/home
// alert(time())//1300051970
// 469, 470
// https://playcode.io/new/
//
//		https://www.base64encode.org/enc/minify/

// reverse panelki dlya debug
var sds, mds, sets;
sds = $(".sideset");
mds = $(".macnt");
sets = $(".setcnt");
cnftmp = $(".scntf");
// rtc time auto from server
//sht30_1
function btn_rtc_wr() {
    //bmeOBJ = $("#scntf").serializeArray();

    // Rd mode
    var rtc_setd = {
        rtc_set: [Math.floor(Date.now() / 1000), 0, 0]
    };
    //console.log(rtc_setd);
    //console.log(input_htu21d);
    fetch("/set_rtc.json?n=" + encodeURIComponent(JSON.stringify(rtc_setd)) + "&", "GET", txjstmp, 10);
}

// zapros temperature
function sub_grad() {
    maOBJ = $("#tmpo").serializeArray();
    fetch("/temp_out.json?n=" + Math.random(), "GET", txjstmp, 10);
		 $("#temperature").val(j_T.toString().substring(0, 6));
		 $("#humudity").val(j_H.toString().substring(0, 6));
		 $("#pressure").val(j_P.toString().substring(0, 6));
    //console.log(maOBJ);
}

// cont: TEMP, RTC, DEBUG + Settings
function txjstmp(s, d) {
    var as1 = $(".pst1");
    var as0 = $(".pst0");
	var j=0,ii=0;
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
            //console.log("priem ok!");
            try {
                temp_json = JSON.parse(d);
                //console.log(s, temp_json);
            } catch (e) {
                // ftvall - form clear
                ftvall("");
                //console.log(s, e.message);
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

    str_out = "";
}


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



function fetch(url, method, callback, time_out) {
    //console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onloadend = function () {
        callback(xhr.status, xhr.responseText);
    };
    xhr.ontimeout = function () {
        callback(-1, null);
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.timeout = time_out * 200;
    xhr.send();
}


function txjs_ua(s, d) {
    seOBJ = $("#scntf").serializeArray();
    $("#btn1").prop("disabled", false);
    if (s != 200) {
        str_out1 += "Send command error" + "\n";
        //clearTimeout(rs.handle);
        //console.log("Connection proplem!");
    } else {
        if (typeof d === "string") {
            //console.log("priem ok!");
            try {
                uart_json = JSON.parse(d);
            } catch (e) {
                //console.log(e);
                return 0;
            }
        } else {
            uart_json.uart_out = "null";
            uart_json.uart_in = "null";
        }
        //console.log(uart_json);
        if (uart_json.uart_out == "") {
            str_out1 += "ACK" + "\n";
        } else {
            str_out1 += uart_json.uart_out + "\n";
        }
        //console.log(uart_json.uart_out);
    }
    var esp_uart_out_val = $("#esp_urx");
    if (esp_uart_out_val.val() != "") {
        esp_uart_out_val.val(esp_uart_out_val.val() + str_out1);
    } else {
        esp_uart_out_val.val(str_out1);
    }
    //console.log(str_out1);
    str_out1 = "";
    //clearTimeout(rs.handle);
    //rs = to(refr, 3);
    //refr();
}

window.onload = function () {
    $(".bt0st").attr("value", "off");
    $(".navia").addClass("list-group-item list-group-item-action bg-light border");
    $("#esp_tx").val("wsbuser.prints(node.heap());");
    $("#esp_urx").val("");
    rs = setInterval(refr_rtc, 3000);
    i = 0;
    //$(".bsn0").collapse('show');
    smgh();
};
