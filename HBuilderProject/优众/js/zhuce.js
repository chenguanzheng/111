$(function(){
	$(".acc").blur(function(){
			aa()
		})
		$("input").eq(1).blur(function(){
			bbc()
		})
		$("input").eq(2).blur(function(){
			cc()
		})
		$("input").eq(3).blur(function(){
			ee()
		})
		$("input").eq(3).blur(function(){
			dd()
		})
		function aa(){
			 var reg =/^1[34578][0-9]{9}/;
			 var acc=$.trim($(".acc").val());
			   if(!reg.test(acc)){
			   	$(".denglu").append("×")
			   	$(".acc").val("")
			   }
			  }
			   function bbc(){
			var reg1 = /^[\w]{6,12}$/ ;
			var possw=$.trim($("input").eq(1).val());
			if(!reg1.test(possw)){
			   	$("form div").eq(1).append("×")
			   	$("input").eq(1).val("")
			   }
			}
			   function cc(){
			var reg2 = /^[\w]{6,12}$/ ;
			var posswo=$.trim($("input").eq(2).val());
			if(!reg2.test(posswo)){
			   	$("form div").eq(2).append("×")
			   	$("input").eq(2).val("")
			   }  
			   }
			   function dd(){
			var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
			var posswor=$.trim($("input").eq(3).val());
			if(!nameReg.test(posswor)){
			   	$("form div").eq(3).append("×")
			   	$("input").eq(3).val("")
			   }
			}
			   function ee(){
			var Pa = /^[a-zA-Z0-9_-]{4,16}$/;
			var possword=$.trim($("input").eq(4).val());
			if(!Pa.test(possword)){
			   	$("form div").eq(4).append("×")
			   	$("input").eq(4).val("")
			   }
			}
//			var reg3=new RegExp("^[0-9]{6}$");
//			var possword=$.trim($("input").eq(4).val());
//			if(!reg3.test(possword)){
//			   	alert("！")
//			   	$("input").eq(4).val("")
//			   }
		$(".login_btn").click(function(){
			var x=$(".acc").val();
			var y=$(".password").val();
			localStorage.setItem("poss",x)
			localStorage.setItem("possw",y)
			window.location.href="denglu.html";
		})
		
})