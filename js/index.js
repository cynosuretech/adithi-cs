const notifyForm = document.getElementById('notify-form');
notifyForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  $.ajax({
    url: "https://formspree.io/agney.menons@live.com", 
    method: "POST",
    data: {message: $('[name="_replyto"]').val()},
    dataType: "json",
    success: function(response) {
      if(response) {
        $('#notify-form').hide();
        $('#thank-you').show("slow","swing");
      }
    }
  });
});