
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();
    // Messages
    var messages = $('.messages');
    // Recieve Update Event From The Server
    socket.on('updateMessages', function(html){
      // Update chat
      messages.html(html);
    });


    var box = $('.box');

  	var orientationChange = funtion(event) {
 	var x = Math.floor(event.beta);
 	var y = Math.floor(event.gamma);
 
 	socket.emit('move', [x,y]);

	};


	$(window).on('deviceorientation',orientationChange);

	// Recieve Update Event From The Server
    socket.on('update', function(coord){
    var str = 'rotateX('+ coord[0] +'deg) rotateY('+coord[1] +'deg)';
    box.css({ transform: str, webkitTransform: str });
    
    });

});