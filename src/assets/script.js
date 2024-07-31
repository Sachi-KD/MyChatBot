import axios from 'axios';
/* global $, jQuery */

async function getAnswer(question) {

  try {
    const { data } = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAHourGI4um3wLcLun1pPuHfY5oSMeu4pQ",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: question }] },
        ],
      },
    });
    return data;

  } catch (error) {
    console.error('Error generating answer:', error);
  }
}


$(function () {
  var INDEX = 0;
  $("#chat-submit").click(async function (e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if (msg.trim() == '') {
      return false;
    }

    generate_message(msg, 'self', '');

    const response = await getAnswer(msg);
    const answer = response['candidates'][0]['content']['parts'][0]['text'];
    
    generate_message('', 'user', answer);
  })

  function generate_message(msg, type, usermsg) {
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
    if (type == 'self') {
      str += msg;
    } else {
      str += usermsg;
    }
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX).hide().fadeIn(300);
    if (type == 'self') {
      $("#chat-input").val('');
    }
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }

  $(document).delegate(".chat-btn", "click", function () {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })

  $("#chat-circle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })

  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
});
