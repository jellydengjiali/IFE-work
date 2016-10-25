
// function test(){
//   var con=document.getElementById('content').value;
//   var myReg=/(\d){4}/gi;//正则表达式对象，可以检索4个连续的数字
//   while (res=myReg.exec(con)){//exec函数，exec[0]就是匹配到的文本
//     window.alert("找到"+res[0]);
//   }
// }

//match方法
// function test(){
//   var con=document.getElementById('content').value;
//   var myreg=/abc/gi;
//   res=con.match(myreg);
//   for(var i=0;i<res.length;i++){
//     window.alert(i+" "+res[0]);
//   }
// }

//replace（）函数
// function test(){
//   var con=document.getElementById('content').value;
//   var myReg=/(\d){4}/gi;
//   var newCon=con.replace(myReg,"我替换了四个数");
//   con=newCon;
// }

//index,leftContext,rightContext
function test(){
  var con=document.getElementById('content').value;
  var myReg=/(\d){4}/gi;
  while(res=myReg.exec(con)){
    window.alert("index="+RegExp.index+" left ="+RegExp.leftContext+"  right ="+RegExp.rightContext);
  }
}
