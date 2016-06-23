
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>用户信息注册</title>
        <meta name="author" content="DrawnFish">
		<meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">
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
                        <h1><a href="">UserRegist</a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="" rel="tooltip" data-placement="bottom" data-original-title="主页"></a>
                        <a class="blog" href="" rel="tooltip" data-placement="bottom" data-original-title="关于我们"></a>
                    </div>
                </div>
            </div>
        </div>
		
		<?php
			//自动识别用户端类型（电脑/手机）
			include './checkmobile.php';
			if(isMobile())
				print "<div class=\"search-container-mobile container\">\n";
			else
				print "<div class=\"search-container container\">\n";
		?>
            <div class="row">		
                <div class="search span6">
					<label for="username">注册用户名</label>
                	<input type="text" id="username" name="username" placeholder="请输入你的用户名">
                	<label for="password">密码</label>
                	<input type="password" id="password" name="password" placeholder="请输入你的密码">
                	<label for="name">姓名</label>
                	<input type="text" id="name" name="name" placeholder="请输入你的真实名字">
                	<label for="sex">性别</label>
					<select id="sex"  name="sex">
						<option value="男" selected="true">男</option>	
						<option value="女">女</option>	
                	</select>
                	<label for="birthyear">出生年份</label>
                	<input type="text" id="birthyear" name="birthyear" placeholder="请输入你的出生年份">
					<label for="birthplace">出生地点</label>
                	<select id="birthplace" name="birthplace">
						<option value="广东省" selected="true">广东省</option>
						<option value="北京市">北京市</option>	
						<option value="广西省">广西省</option>
						<option value="天津市">天津市</option>
						<option value="上海市">上海市</option>
						<option value="重庆市">重庆市</option>
						<option value="河北省">河北省</option>
						<option value="河南省">河南省</option>
						<option value="云南省">云南省</option>
						<option value="辽宁省">辽宁省</option>
						<option value="黑龙江省">黑龙江省</option>
						<option value="湖南省">湖南省</option>
						<option value="安徽省">安徽省</option>
						<option value="山东省">山东省</option>
						<option value="新疆维吾尔">新疆维吾尔</option>
						<option value="江苏省">江苏省</option>
						<option value="浙江省">浙江省</option>
						<option value="江西省">江西省</option>
						<option value="湖北省">湖北省</option>	
						<option value="甘肃省">甘肃省</option>	
						<option value="山西省">山西省</option>	
						<option value="内蒙古">内蒙古</option>	
						<option value="陕西省">陕西省</option>	
						<option value="吉林省">吉林省</option>	
						<option value="福建省">福建省</option>	
						<option value="贵州省">贵州省</option>	
						<option value="广东省">广东省</option>	
						<option value="青海省">青海省</option>	
						<option value="西藏">西藏</option>	
						<option value="四川省">四川省</option>	
						<option value="宁夏">宁夏</option>	
						<option value="海南省">海南省</option>	
						<option value="台湾省">台湾省</option>	
						<option value="香港特别行政区">香港特别行政区</option>	
						<option value="澳门特别行政区">澳门特别行政区</option>
						<option value="海外">海外</option>						
					</select>
                	<label for="phone">手机号码</label>
                	<input type="text" id="phone" name="phone" placeholder="请输入你的手机号码">
                	<label for="QQNum">QQ</label>
                	<input type="text" id="QQNum" name="QQNum" placeholder="请输入你的QQ号码">
                	<label for="Email">Email</label>
                	<input type="text" id="Email" name="Email" placeholder="请输入你的邮箱">						 				                
					<label for="payNum">支付宝账号</label>
                	<input type="text" id="payNum" name="payNum" placeholder="请输入你的支付宝">
					<label for="repassword">确认密码</label>
                	<input type="password" id="repassword" name="repassword" placeholder="请再次确认你的密码"> 
					<button type="button" id="submit">注册</button>
					<a href="search.php"><button type="button" id="search">查询</button></a>							
                </div>				
            </div>
        </div>
	<div align="center">Powered by DrawnFish at NGHCI Lab in SCUT</div>
        <!-- Javascript -->
        <script src="assets/js/jquery-1.8.2.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.backstretch.min.js"></script>
        <script src="assets/js/regist.js"></script>
</body>
</html>