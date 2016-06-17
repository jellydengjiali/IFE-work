
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
    $('.register form').submit(function(){
		$(this).find("label[for='username']").html('注册用户名');
		$(this).find("label[for='password']").html('密码');
		$(this).find("label[for='name']").html('姓名');
		$(this).find("label[for='sex']").html('性别');
		$(this).find("label[for='birthyear']").html('出生年份');
		$(this).find("label[for='birthplace']").html('出生地点');
		$(this).find("label[for='phone']").html('手机号码');
		$(this).find("label[for='QQNum']").html('QQ');
		$(this).find("label[for='Email']").html('Email');
		$(this).find("label[for='payNum']").html('支付宝账号');
		$(this).find("label[for='repassword']").html('确认密码');
        ////
		var username = $(this).find('input#username').val();
		var password = $(this).find('input#password').val();
		var name = $(this).find('input#name').val();
		var sex=$(this).find('input#sex').val();
		var birthyear=$(this).find('input#birthyear').val();
		var birthplace=$(this).find('input#birthplace').val();
		var phone = $(this).find('input#phone').val();
		var QQNum = $(this).find('input#QQNum').val();
		var Email= $(this).find('input#Email').val();
		var payNum= $(this).find('input#payNum').val();
		var repassword = $(this).find('input#repassword').val();
		var re = /^[a-zA-Z0-9_]{1,}$/; 

	    if(username == '') {
            $(this).find("label[for='username']").append("<span style='display:none' class='red'> - 请输入你的用户名</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            return false;
        }
	    if(!re.test(username))
		{
		     $(this).find("label[for='username']").append("<span style='display:none' class='red'> - 用户名只能由字母数字下划线组成</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            return false;
		}
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 请输入你的密码</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(password.length<6) {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 密码长度过短</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(name == '') {
            $(this).find("label[for='name']").append("<span style='display:none' class='red'> - 请输入你的真实名字</span>");
            $(this).find("label[for='name'] span").fadeIn('medium');
            return false;
        }
	   if(birthyear==''){
            	     $(this).find("label[for='birthyear']").append("<span style='display:none' class='red'> - 请输入你的出生年份</span>");
            $(this).find("label[for='birthyear'] span").fadeIn('medium');
            return false;   			
             }
        if(phone == '') {
            $(this).find("label[for='phone']").append("<span style='display:none' class='red'> - 请输入你的手机号码</span>");
            $(this).find("label[for='phone'] span").fadeIn('medium');
            return false;
        }
        if(phone.length!=11) {
            $(this).find("label[for='phone']").append("<span style='display:none' class='red'> - 请输入正确的手机号码</span>");
            $(this).find("label[for='phone'] span").fadeIn('medium');
            return false;
        }
        if(QQNum == '') {
            $(this).find("label[for='QQNum']").append("<span style='display:none' class='red'> - 请输入你的QQ号码</span>");
            $(this).find("label[for='QQNum'] span").fadeIn('medium');
            return false;
        }
        if(Email== '') {
            $(this).find("label[for='Email']").append("<span style='display:none' class='red'> - 请输入你的Email，以方便重置密码</span>");
            $(this).find("label[for='Email'] span").fadeIn('medium');
            return false;
        }
        if(payNum== '') {
            $(this).find("label[for='payNum']").append("<span style='display:none' class='red'> - 请输入你的支付宝账号，以方便获得报酬</span>");
            $(this).find("label[for='payNum'] span").fadeIn('medium');
            return false;
        }
	   if(repassword == '') {
            $(this).find("label[for='repassword']").append("<span style='display:none' class='red'> - 请再次输入你的密码</span>");
            $(this).find("label[for='repassword'] span").fadeIn('medium');
            return false;
        }
	   if(repassword != password ) {
            $(this).find("label[for='repassword']").append("<span style='display:none' class='red'> - 两次密码不一致</span>");
            $(this).find("label[for='repassword'] span").fadeIn('medium');
	        $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 两次密码不一致</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
    });


});


