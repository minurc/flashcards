/*!
 * Additional functions
 */

var q_data = { };


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
    },
    'onUnchecked': function() {
        console.log('OFF');
    }
});


// show answer control
//


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

function init_fc() {
    q_data['idx'] = 1;
}

function next_fc() {

    var dw = Object.keys(words);
    var len = Object.keys(words).length;
    var idx = randr(len);


    $('#score').html(q_data['idx']+'/'+len);

    wrd = dw[idx-1];
    $('#fdw').html(wrd);
    $('#fd').html(words[wrd]);
    $('#fd').hide();

    if (len==1) { idx = 1; return 0; }

    delete words[wrd];

    q_data['idx'] += 1;
}


function randr(len) {
    return Math.floor(Math.random() * len + 1);
}


