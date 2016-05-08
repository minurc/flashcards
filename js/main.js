/*!
 * Additional functions
 */

var q_data = { };
var cwrd = words;


// ready event
$(document).ready(function() {

//    $('.ui.button').removeClass('blue');
    $('.ui.button')
        .click(function() {
            var id = $(this).attr('id');
            if (id == 'show') {
                show_fc();
            } else {
                next_fc();
            }
        });

        $('#fd').hide();
        init_fc();
        next_fc();


// reverse control
//
$('#reverse').checkbox({
    'onChecked': function() {
        console.log('ON');
        document.getElementById('fdw').setAttribute('id', 'fdX');
        document.getElementById('fd').setAttribute('id', 'fdw');
        document.getElementById('fdX').setAttribute('id', 'fd');

    },
    'onUnchecked': function() {
        console.log('OFF');
        document.getElementById('fdw').setAttribute('id', 'fdX');
        document.getElementById('fd').setAttribute('id', 'fdw');
        document.getElementById('fdX').setAttribute('id', 'fd');
    }
});


// show answer control
//
$('#showall').checkbox({
    'onChecked': function() {
        show_fc();
        q_data['showfc'] = true;

    },
    'onUnchecked': function() {
        hide_fc();
        q_data['showfc'] = false;
    }
});



});

if (document.layers) {
  document.captureEvents(Event.KEYDOWN);
}

document.onkeydown = function (evt) {
	var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
	if (keyCode == 13) {
		next_fc();
	}
    if (keyCode == 32) {
        show_fc();
    }
	if (keyCode == 27) {
		alert('Escape');
	} else {
	  return true;
	}
};

function show_fc() {
    $('#fd').show();
}

function hide_fc() {
    $('#fd').hide();
}

function init_fc() {
    q_data['idx'] = 1;

    cwrd=words;
    /*
    var l = Object.keys(cwrd).length;
    var w = Object.keys(cwrd);
    l2=Math.round(l/4);
    console.log(l);
    for (i=0; i<l-l2; i++) {
        delete cwrd[w[i]];
    }
    */
}

function next_fc() {


    var dw = Object.keys(cwrd);
    var len = Object.keys(cwrd).length;
    var idx = randr(len);


    $('#score').html(q_data['idx']+'/'+len);

    wrd = dw[idx-1];
    $('#fdw').html(wrd);
    // $('#fdw').html('<a href="http://www.dict.cc/?s='+wrd+'">'+wrd+'</a>');
    $('#fd').html(cwrd[wrd]);
    $('#fd').hide();

    if (len==1) { idx = 1; return 0; }

    delete cwrd[wrd];

    q_data['idx'] += 1;

    if (q_data['showfc']) {
        show_fc();
    }
}


function randr(len) {
    return Math.floor(Math.random() * len + 1);
}


