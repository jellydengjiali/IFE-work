<?php
//设置页面内容是html编码格式是utf-8
header("Content-Yype:text/plain;charset=utf-8");
//定义一个多维数组，包含用户的信息，每条用户为一个数组
$staff=array
(
array("name"=>"洪七","number"=>"101","sex"=>"男","job"=>"总经理"),
array("name"=>"郭靖","number"=>"102","sex"=>"男","job"=>"开发工程师"),
array("name"=>"黄蓉","number"=>"103","sex"=>"女","job"=>"产品经理"),
);
//判断如果是get请求，则进行搜索；如果是post请求则进行新建
if($_SERVER["REQUEST_METHOD"]=="GET"){
 search();
}elseif($_SERVER["REQUEST_METHOD"]=="POST"){
create();
}
//通过用户编号搜索用户
function search(){
//检查是否有用户编号的参数
//isset检测变量是否设置，empty判断值是否为空
//超全局变量$_GET和$_POST用于收集表单数据
if(!isset($_GET["number"])||empty($_GET["number"])){
echo "参数错误";
return;
}
global $staff;
$number=$_GET["number"];
$result="没有找到用户/(ㄒoㄒ)/~~";

//遍历$staff多维数组，查找key值为number的用户是否存在，如果存在，则修改返回结果
foreach($staff as $value){
if($value["number"]==$number){
$result="找到用户：O(∩_∩)O
用户编号：".$value["number"]."
用户姓名：".$value["name"]."
用户性别：".$value["sex"]."
用户身份：".$value["job"];
break;
   }
}
 echo $result;
}
//创建用户
function create(){
//判断信息是否填写完全
if(!isset($_POST["name"])||empty($_POST["name"])||!isset($_POST["number"])||empty($_POST["number"])||!isset($_POST["sex"])||empty($_POST["sex"])||!isset($_POST["job"])||empty($_POST["job"])){
echo "参数错误，用户信息填写不全~~~~(>_<)~~~~";
return;
}
//TODO:获取post表单数据并保存到数据库


//提示保存成功
echo "用户：".$_POST["name"]."信息保存成功！(*^__^*) ";
}

?>