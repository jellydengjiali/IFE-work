
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('button#search').click(function(){
		
        ////
		var username = $('input#username').val();
		$.ajax(
                {
                    url: 'userinfo.php?username=' + username,
                    success: function(output) {
                        if (output != "passwd error") {
                            var outputs = output.split("_");
                            $('input#RealName').val(outputs[0]);
                            $('input#sex').val(outputs[1]);
                            $('input#birthyear').val(outputs[2]);
                            $('input#birthplace').val(outputs[3]);
                            $('input#PhoneNumber').val(outputs[4]);
                            $('input#QQNumber').val(outputs[5]);
                            $('input#PayNumber').val(outputs[6]);
                            $('input#Email').val(outputs[7]);
                            $('input#SpeechCount').val(outputs[8]);
                            $('input#CorrectCount').val(outputs[9]);
                        }
                    },
                    error: function() {
                        alert("出现错误,请稍后重试！", false);
                    }
                }

            );

    });


});


