
/* global $, jQuery */

$(function() {
    var INDEX = 0; 
    $("#chat-submit").click(function(e) {
      e.preventDefault();
      var msg = $("#chat-input").val(); 
      if (msg.trim() == '') {
        return false;
      }
      generate_message(msg, 'self');
      var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
      setTimeout(function() {
        generate_message(msg, 'user');  
      }, 1000)
    })
    
    function generate_message(msg, type) {
      INDEX++;
      var str = "";
      str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
      str += "          <span class=\"msg-avatar\">";
      if (type == 'self') {
        str += "            <img src=\"https://th.bing.com/th/id/OIP.J8Dfm9FOIeEJg-nHzG5nfwHaHa?w=512&h=512&rs=1&pid=ImgDetMain\">";
      } else {
        str += "            <img src=\"https://media.istockphoto.com/vectors/robot-icon-chat-bot-sign-for-support-service-concept-chatbot-flat-vector-id1060696342?k=20&m=1060696342&s=612x612&w=0&h=MJuxv66wKFKj-VnNmTZH_cg5Am3ES7R-qeLARcSjTrw=\">";
      }
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-" + INDEX).hide().fadeIn(300);
      if (type == 'self') {
        $("#chat-input").val(''); 
      }    
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);    
    }  
    
    function generate_button_message(msg, buttons) {    
      INDEX++;
      var btn_obj = buttons.map(function(button) {
        return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
      }).join('');
      var str = "";
      str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https://media.istockphoto.com/vectors/robot-icon-chat-bot-sign-for-support-service-concept-chatbot-flat-vector-id1060696342?k=20&m=1060696342&s=612x612&w=0&h=MJuxv66wKFKj-VnNmTZH_cg5Am3ES7R-qeLARcSjTrw=\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "          <div class=\"cm-msg-button\">";
      str += "            <ul>";   
      str += btn_obj;
      str += "            <\/ul>";
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-" + INDEX).hide().fadeIn(300);   
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
      $("#chat-input").attr("disabled", true);
    }
    
    $(document).delegate(".chat-btn", "click", function() {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      $("#chat-input").attr("disabled", false);
      generate_message(name, 'self');
    })
    
    $("#chat-circle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
  });
  