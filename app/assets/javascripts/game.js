// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//require_tree .

var turn = 0;

$(window).load(
    function(){
        for (i=1; i<10; i++) {
            registerInput(i);
        }
    }
);

function registerInput(cell_id) {
    var $gameMove = $('#input_'+cell_id);
    $gameMove.on('change', function () {
        // Store the current value on focus and on change
        doSomething(this.value, cell_id);});

}


function doSomething(content, cell_id){

    alert(content + ' ' + cell_id);
    $('#input_'+cell_id).attr('readonly', true);
    $('#input_'+cell_id).css('background-color' , '#DEDEDE');

//    alert(turn+' '+ 'before move')
    turn++;
//    alert(turn+' '+ 'after move')


    jQuery.ajax({

        data: { move: content, cell_id: cell_id, turn: turn},
        type: 'post',
        url: "/game/create_game"

    });

}

function validateInput(){

}
