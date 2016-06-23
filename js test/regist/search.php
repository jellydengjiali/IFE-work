
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>用户信息查询</title>
        <meta name="author" content="DrawnFish">
		<meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="format-detection" content="telephone=no">
        <!-- CSS -->
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    </head>

    <body>

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4">
                        <h1><a href="">用户信息查询</a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="" rel="tooltip" data-placement="bottom" data-original-title="主页"></a>
                        <a class="blog" href="" rel="tooltip" data-placement="bottom" data-original-title="关于我们"></a>
                    </div>
                </div>
            </div>
        </div>
		
		<div class="search-container container">
            <div class="row">		
                <div class="search span6">
					<label for="username">用户名</label>
                	<input type="text" id="username" name="username" />
                    <button type="button" id="search">查询</button>   
                    <a href="index.php"><button type="button" id="submit">新用户请点注册</button> </a>
                	<label for="RealName">姓名</label>
                	<input type="text" id="RealName" name="RealName" />

                	<label for="sex">性别</label>
				    <input id="sex" type="text" name="sex"/>

                	<label for="birthyear">出生年份</label>
                	<input type="text" id="birthyear" name="birthyear" />

				    <label for="birthplace">出生地点</label>
                	<input type="text" id="birthplace" name="birthplace"/ >

                	<label for="PhoneNumber">手机号码</label>
                	<input type="text" id="PhoneNumber" name="PhoneNumber" />

                	<label for="QQNumber">QQ</label>
                	<input type="text" id="QQNumber" name="QQNumber" />

				    <label for="PayNumber">支付宝账号</label>
                	<input type="text" id="PayNumber" name="PayNumber" />

					<label for="Email">Email</label>
                	<input type="text" id="Email" name="Email"/ >

                	<label for="SpeechCount">总录音次数</label>
                	<input type="text" id="SpeechCount" name="SpeechCount"/ >	

				    <label for="CorrectCount">录音正确次数</label>
                	<input type="text" id="CorrectCount" name="CorrectCount" />						
                </div>				
            </div>
        </div>


<div align="center" id="food">Powered by Jelly at NGHCI Lab in SCUT</div>

        <!-- Javascript -->	
        <script src="assets/js/jquery-1.8.2.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/search.js"></script>
</body>
</html>