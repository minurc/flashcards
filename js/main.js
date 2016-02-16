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
        next_fc();


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

function next_fc() {

    var dw = Object.keys(words);
    var idx = randr(Object.keys(words).length);

    $('#fdw').html(dw[idx]);
    $('#fd').html(words[dw[idx]]);
    $('#fd').hide();

}


function randr(len) {
    return Math.floor(Math.random() * len + 1);
}


