$('#btn-send').click(function(e) {
  $.ajax({
      url: "https://formspree.io/nazavr@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             namefield: namefield.value,
             email: email.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  });
  e.preventDefault();
});