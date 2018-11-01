$(function(){
	   $(".acc").blur(function(){
       	loginUser()
       })
		$(".password").blur(function(){
       	isPasswd()
       })
		
		function loginUser(){
			var flag_name = $.trim($(".acc").val()) ;
			console.log(flag_name)
   var reg = /^1[34578][0-9]{9}/;
   var reg1 = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/; 
   if(!reg.test(flag_name)&&!reg1.test(flag_name)){
   	alert("请正确填写手机号码和邮箱！")
   	$(".acc").val("")
  }else{
  	$(".zheng").html("√")
  }
}
		function isPasswd(){  
  var patrn=/^(\w){6,20}$/;  
  var flag_poss =$.trim($(".password").val());
  if(!patrn.test(flag_poss)){
  	alert("密码错误！")
  	$(".password").val()
  }else{
  	$(".passw").html("√")
  }
 }
  $(".login_btn").click(function(){
  	var x=$(".acc").val()
  	var y=$(".password").val()
  	  var aa=localStorage.getItem("poss")
  	  var bb=localStorage.getItem("possw")
  	if(x==aa&&y==bb){
  		window.location.href="home.html"
  	}else{
  		alert("账户或密码错误")
  	}
  })
})