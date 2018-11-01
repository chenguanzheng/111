$(function(){
		$(function(){
		$("#big_box").load("toubu.html")
		$("#foot").load("foot.html")
		$(".phone").hover(function(){
			$(".erweima").show()
		},function(){
			$(".erweima").hide()
		})
//		获取pid

		function GetQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		    var r = decodeURI(window.location.search.substr(1)).match(reg);
		    if (r != null)return unescape(r[2]);
		    return null;
		}
		//获取商品id
		var pid=GetQueryString("pid");
		console.log(pid)
		//		购物车运动
        $(".gowuche>a").click(function(){
        	if(localStorage.getItem("datas")){
			    var newarr=localStorage.getItem("datas").split(","); 
			console.log(newarr)
        	var flag=true;
        	$.each(newarr,function(index,ele){
        		if(ele==pid){
        			flag=false
        		}
        	})
        	if(flag=true){
        			newarr.push(pid)
        		}
        	localStorage.setItem("datas",newarr)
        	}else{
        			localStorage.setItem("datas",pid)
        		}
        	$(".fly").show()
        	$(".fly").animate({"left":"190px","top":"-576px"},1000,function(){
        		$(".fly").hide()
        		$(".fly").animate({"left":"0","top":"0"},10,function(){
        			
        		})
        	})
        	
        })
		
		
		
		
		
		
		
		
		
		
		
		
		//发送详情页面数据请求   发送pid给后台 后台返回商品的所有信息
		
		$.ajax({
			type:"get",
			url:"shangpinxq.json",
			dataType:"json"
		}).done(function(res){
			var nowdata=null;
			console.log(res)
			//循环找到对应商品数据
			$.each(res, function(index,ele){
	
				if(ele.base.pid==pid){
					nowdata=res[index];
					console.log(nowdata)
				}
		});
		$("#box").attr("pid",nowdata.base.pid);
		$(".slidimg img").attr("src",nowdata.base.imgsrc);
	    $(".big_img img").attr("src",nowdata.base.imgsrc);
		//生成缩略图
			var simgstr='';
			$.each(nowdata.bigimg,function(index,ele){
				simgstr+='<img src="'+ele+'"/>'
			})
			$(".imgs").html(simgstr)
			$(".sright_top>h1").html(nowdata.base.pname);
			$(".man").html(nowdata.base.pname);
			$(".fuwu li").html(nowdata.color[0]);
			$(".youz>span").html(nowdata.base.price);
			$(".chu_right>span").html(nowdata.base.ping);
			$(".xy>span").html(nowdata.base.pname);
			$(".xyys>span").html(nowdata.base.pdianm);
			
//生成大图
      	$(".frist").html('<img src="'+nowdata.bigimg[0]+'" alt="" />')
      	$(".two").html('<img src="'+nowdata.bigimg[1]+'" alt="" />')
      	$(".three").html('<img src="'+nowdata.bigimg[2]+'" alt="" />')
      	$(".four").html('<img src="'+nowdata.bigimg[3]+'" alt="" />')
      	$(".five").html('<img src="'+nowdata.bigimg[4]+'" alt="" />')
      	$(".six").html('<img src="'+nowdata.bigimg[5]+'" alt="" />')
      	$(".senven").html('<img src="'+nowdata.bigimg[6]+'" alt="" />')
      	$(".eight").html('<img src="'+nowdata.bigimg[7]+'" alt="" />')
      	
      
//生成颜色
			var cstr='';
			$.each(nowdata.color,function(index,ele){
				
				cstr+='<li><img src="'+nowdata.suolue[index]+'" alt="" />'+ele+'</li>';
				
			})
			$(".fuwu ul").html(cstr)
		//加载尺码
			var sstr='';
			$.each(nowdata.size,function(index,ele){
				
				sstr+='<li>'+ele+'</li>';
				
			})
			$(".size ul").html(sstr)
		
		
		
		
		
		
		
		//点击切换大图
		$(".imgs img").click(function(){
			//把小图的src设置给大图
			$(".slidimg img:eq(0)").attr("src",$(this).attr("src"));
			$(".big_img img").attr("src",$(this).attr("src"));
			//外部轮廓
			$(this).css("outline","1px solid #333").siblings().css("outline","none");
			
		})
		//上点击
		$(".borders").click(function(){
			$(".imgs:not(:animated)").animate({top:-71},800,function(){
				//第一张图片添加到最后
				$(".imgs").find("img").eq(0).appendTo($(".imgs"));
				
				$(".imgs").css("top",0);
				
			})	
		})
		//下点击
		$(".borders_but").click(function(){
			$(".imgs").children().last().prependTo($(".imgs"));
			$(".imgs").css("top",360);
			$(".imgs:not(:animated)").stop(true).animate({top:0},800);
			
			
		})
		var timer=setInterval(move,2000);
		function move(){
			$(".imgs").animate({top:-71},800,function(){
				//第一张图片添加到最后
				$(".imgs").find("img").eq(0).appendTo($(".imgs"));
				$(".imgs").css("top",0);
			})	
		}
		//放大镜
		var Mflag=true;
		$(".slidimg").mouseenter(function(){
			if(Mflag){
				$(".mask").show();
				$(".big_img").show();
			}
					
		}).mouseleave(function(){
			
			$(".mask").hide();
			$(".big_img").hide();
			
		}).mousemove(function(e){
			if(Mflag){
	//			e.pageX--e.pageY--鼠标相对于整个页面的距离
				
				//遮罩x，y
				var mx=e.pageX-$(this).offset().left-$(".mask").width()/2;
				var my=e.pageY-$(this).offset().top-$(".mask").height()/2;
				
				//限制边界
				mx<0?mx=0:mx;
				my<0?my=0:my;
				var maxX=$(".slidimg").width()-$(".mask").width();
				var maxY=$(".slidimg").height()-$(".mask").height();
				mx>maxX?mx=maxX:mx;
				my>maxY?my=maxY:my;
				
				$(".mask").css("left",mx);
				$(".mask").css("top",my);
				//算出比例
				var bilix=$(".big_img img").width()/$(this).width();
				var biliy=$(".big_img img").height()/$(this).height();
			
				$(".big_img").scrollLeft(bilix*mx);
				$(".big_img").scrollTop(biliy*my);
			}
		})
		})
		})
		 var gus=document.getElementById('gu');
    console.log(gus)
    var flag=true;
   window.onscroll=function(){
    	var scorollTop=document.body.scrollTop||document.documentElement.scrollTop;
    	if(flag&&scorollTop>=500){
    		gus.style.display="block";
    	}else{
    		gus.style.display="none";
    	}
    }
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
})