
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();
    // Messages
    var messages = $('.messages');
    // Recieve Update Event From The Server
    socket.on('updateMessages', function(html){
      
        var messageItem = '<li>' + html + '</li>';

      // Update chat
      messages.append(messageItem);
    });

    $('a').click(function() {

        var message = $('#messageBox').val();

        socket.emit('sendMessage', message);

    });

});