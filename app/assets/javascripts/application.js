// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

scroll_botton = function() {
  if ($('#messages-box').length > 0){
    $('#messages-box').scrollTop($('#messages-box')[0].scrollHeight);
  }
}


$('#new_message').on('ajax:send', function() {
  $('#message_body').val("").focus();
});

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  
  scroll_botton()
  
  $(document).bind("ajax:beforeSend", function(){
    $('#message_body').val('');
  });
})