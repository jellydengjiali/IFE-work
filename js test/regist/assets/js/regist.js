
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
    $('button#submit').click(function(){
        ////
		var username = $('input#username').val();
		var password = $('input#password').val();
		var name = $('input#name').val();
		var sex=$('select#sex').val();
		var birthyear=$('input#birthyear').val();
		var birthplace=$('select#birthplace').val();
		var phone = $('input#phone').val();
		var QQNum = $('input#QQNum').val();
		var Email= $('input#Email').val();
		var payNum= $('input#payNum').val();
		var repassword = $('input#repassword').val();
		var re = /^[a-zA-Z0-9_]{1,}$/; 

	    if(username == '') {
            $("label[for='username']").append("<span style='display:none' class='red'> - 请输入你的用户名</span>");
            $("label[for='username'] span").fadeIn('medium');
            return false;
        }
	    if(!re.test(username))
		{
		     $("label[for='username']").append("<span style='display:none' class='red'> - 用户名只能由字母数字下划线组成</span>");
            $("label[for='username'] span").fadeIn('medium');
            return false;
		}
        if(password == '') {
            $("label[for='password']").append("<span style='display:none' class='red'> - 请输入你的密码</span>");
            $("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(password.length<6) {
            $("label[for='password']").append("<span style='display:none' class='red'> - 密码长度过短</span>");
            $("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(name == '') {
            $("label[for='name']").append("<span style='display:none' class='red'> - 请输入你的真实名字</span>");
            $("label[for='name'] span").fadeIn('medium');
            return false;
        }
	   if(birthyear==''){
            	     $("label[for='birthyear']").append("<span style='display:none' class='red'> - 请输入你的出生年份</span>");
            $("label[for='birthyear'] span").fadeIn('medium');
            return false;   			
             }
        if(phone == '') {
            $("label[for='phone']").append("<span style='display:none' class='red'> - 请输入你的手机号码</span>");
            $("label[for='phone'] span").fadeIn('medium');
            return false;
        }
        if(phone.length!=11) {
            $("label[for='phone']").append("<span style='display:none' class='red'> - 请输入正确的手机号码</span>");
            $("label[for='phone'] span").fadeIn('medium');
            return false;
        }
        if(QQNum == '') {
            $("label[for='QQNum']").append("<span style='display:none' class='red'> - 请输入你的QQ号码</span>");
            $("label[for='QQNum'] span").fadeIn('medium');
            return false;
        }
        if(Email== '') {
            $("label[for='Email']").append("<span style='display:none' class='red'> - 请输入你的Email，以方便重置密码</span>");
            $("label[for='Email'] span").fadeIn('medium');
            return false;
        }
        if(payNum== '') {
            $("label[for='payNum']").append("<span style='display:none' class='red'> - 请输入你的支付宝账号，以方便获得报酬</span>");
            $("label[for='payNum'] span").fadeIn('medium');
            return false;
        }
	   if(repassword == '') {
            $("label[for='repassword']").append("<span style='display:none' class='red'> - 请再次输入你的密码</span>");
            $("label[for='repassword'] span").fadeIn('medium');
            return false;
        }
	   if(repassword != password ) {
            $("label[for='repassword']").append("<span style='display:none' class='red'> - 两次密码不一致</span>");
            $("label[for='repassword'] span").fadeIn('medium');
	        $("label[for='password']").append("<span style='display:none' class='red'> - 两次密码不一致</span>");
            $("label[for='password'] span").fadeIn('medium');
            return false;
        }
        $.ajax(
                {
                    url: 'regist.php',
                    type: 'post',
                    data: {"username":username, 
                           "password":password, 
                           "name":name, 
                           "sex":sex, 
                           "birthyear":birthyear, 
                           "birthplace":birthplace, 
                           "phone":phone, 
                           "QQNum":QQNum, 
                           "Email":Email,
                           "payNum":payNum
                       },
                    success: function(output) {
                        if (output == "1 record added") {
                            alert("1 record added");
                        }
                    },
                    error: function() {
                        alert("出现错误,请稍后重试！", false);
                    }
                }
        );
    });


});


