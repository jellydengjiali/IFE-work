<?php
$con=mysql_connect("127.0.0.1","root","");
mysql_query("set names utf8");
if(!$con)
{
	//echo "Can not login the database!";
	return array($user,"false","Can not login the database!");
}
mysql_select_db("unifo",$con);
$user=$_GET['username'];
$result=mysql_query("SELECT * FROM students WHERE UserName='$user'" );

if($row=mysql_fetch_array($result)) {
//	if(strcmp($row['Password'],$passwd))
	if (false) {
	//echo "Login Failure";
	mysql_close($con);
	echo("passwd error");
	}else {
	//echo "Login Success";
	mysql_close($con);
	echo($row['RealName'].'_'.$row['sex'].'_'.$row['birthyear'].'_'.$row['birthplace'].'_'.$row['PhoneNumber'].'_'.$row['QQNumber'].'_'.$row['PayNumber'].'_'.$row['Email'].'_'.$row['SpeechCount'].'_'.$row['CorrectCount'] );
	}
}else { 
	//echo "User Not Found";
	mysql_close($con);
	echo("passwd error");
}
mysql_close($con);

?>