
	
		$(function(){
		$("#big_box").load("toubu.html")
		$("#foots").load("foot.html")
		var str="";
		$.ajax({
			type:"get",
			url:"shangpinxq.json"
		}).done(function(res){
			$.each(res,function(index,ele){
			str+='<div class="last" pid="'+ele.base.pid+'">'
				+'<div class="img_top">'
					+'<img src="'+ele.bigimg[0]+'"/>'
					+'<ul class="sm">'
						+'<li><img src="'+ele.suolue[0]+'"/></li>'
						+'<li><img src="'+ele.suolue[1]+'"/></li>'
						+'</ul>'
					+'<div class="pic">'+ele.base.price+'<span><img src="'+ele.gouwu+'"/>'+'</div>'
					+'<div class="clothes">'+ele.base.pname+'</div>'
					+'<div class="pingjia">'+'已有<span>'+ele.base.ping+'</span>人评价'+'</div>'
					+'<div class="shop">'+ele.base.pdianm+'</div>'
					+'</div>'
					+'</div>'
			});
			$("#commodity").html(str)
		$(".last").click(function(){
			window.location.href="xiangqingye.html?pid="+$(this).attr("pid")
			
		})
		})
		})
		 var gus=document.getElementById('gu');
    var flag=true;
   window.onscroll=function(){
    	var scorollTop=document.body.scrollTop||document.documentElement.scrollTop;
    	console.log(scorollTop)
    	if(flag&&scorollTop>=500){
    		gus.style.display="block";
    	}else{
    		gus.style.display="none";
    	}
    }
// 一键置顶
    gus.onclick=function(){
    	this.style.display="none";
				var timer=setInterval(function(){
					flag=false;
					var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
					window.scrollBy(0,-100);
					if(scrollTop<=0){
						clearInterval(timer);
						flag=true;
					}
				},50)

    }
