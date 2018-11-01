$(function(){
	$(document).ready(function(){
		$("#foots").load("foot.html","",function(){
  	
  })
		if(localStorage.getItem("datas")){
		var str="";
		$.ajax({
			type:"get",
			url:"shangpinxq.json",
			async:true,
		}).done(function(res){
			
	var cc=localStorage.getItem("datas").split(",")
	$.each(cc,function(index,ele){
		var pid=ele;
	 var str='';
	 $.each(res,function(index,ele){
	 	var dd=localStorage.getItem("acc")
	 	
	 	if(ele.base.pid==pid){

      	str+='<tr pid="'+pid+'">'
				+'<td><input type="checkbox" class="ck" /></td>'
				+'<td><img src="'+ele.base.imgsrc+'"/></td>'
				+'<td>'+ele.base.pname+'</td>'
				+'<td>'+ele.color+'</td>'
				+'<td class="pic">'+ele.base.price+'</td>'
				+'<td><button class="min">-</button><input type="text" class="num" value="1" /><button class="add">+</button></td>'
				+'<td class="xiaoji">'+parseInt(ele.base.price)+'</td>'
				+'<td><button class="dels">删除</button></td>'
			+'</tr>'
			
			 }
		})
	         $("#xyy").append(str)
	       dd()
		maths()
	
		$("#xyy").on("click",".add",function(){
var t=$(this).parent().find('input[class*=num]');

t.val(Number(t.val())+1)
dd()
maths()
})
$("#xyy").on("click",".min",function(){
var t=$(this).parent().find('input[class*=num]');
t.val(parseInt(t.val())-1)
if(parseInt(t.val())<0){
t.val(0);
}
dd()
maths()
})

	 
	 
	function dd(){
	 var x=null
	var	s=null
		$(".xiaoji").each(function(index,ele){
		x=Number($('.pic').eq(index).html())*Number($('.num').eq(index).val())
		$(this).html(x)
		s+=x
		console.log(x)
	})
		
	$("#total").html(s)
	}
//	删除按钮
 $(".dels").click(function(){
 	$(this).parent().parent().remove()
 	var kfc=$(this).parent().parent().attr("pid")
 	$.each(cc,function(index,ele){
 		if(kfc==ele){
 			cc.splice(index,1)
 		}
 	})
 	localStorage.setItem("datas",cc)
 })
//	商品数量
function maths(){
	var k=null;
	var f=null;
	$(".num").each(function(index,ele){
		k=Number($(".num").eq(index).val())
		f+=k
		console.log(f)
	})
	$("#jian").html(f)
}

	
	})	
	})
		}else{
			$(".shuju").html("您还没有添加商品")
		}
//弹出
var g=0;
$(".sub>p").click(function(){
	g++;
	if(g%2==0){
		$("#toux").hide()
	}else{
	$("#toux").show()
	}
})
    



		
		})
		
})