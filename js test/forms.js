function checkinfo(){
    span1.innerText="";
    span2.innerText="";
    span3.innerText="";
  //获取表单的用户名
  if (document.forms[0].username.value.length<4||document.forms[0].username.value.length>6){
    // window.alert(hello);

    span1.innerText="用户名应在4-6位间";
    return false;
  }
  //判断密码是否为空
  if(document.forms[0].pwd1.value.length<=3){
    span2.innerText="密码要求大于三位";
    return false;
  }
  if(document.forms[0].pwd1.value!=document.forms[0].pwd2.value){
    span3.innerText="输入的两次密码不一样";
    return false;
  }
}
