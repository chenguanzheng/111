//轮播图
window.onload=function(){
	var box=document.querySelector(".box");
	var imgs=document.querySelectorAll(".main_hidden>img");
	var lis=document.querySelectorAll(".ols li");
	var index=0;
		var timer=null;
		 timer=setInterval(function(){
			index++;
			change();
		},2000)
		
        box.onmouseenter=function(){
        	clearInterval(timer)
        }
		box.onmouseleave=function(){
			 timer=setInterval(function(){
			index++;
			change();
		},2000)
		}
		
		for(var a=0;a<lis.length;a++){
			lis[a].index=a;
			lis[a].onclick=function(){
				index++;
				change();
			}
		}
		var that=this;
		function change(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].index=i;
				imgs[i].style.display="none";
				lis[i].style.background="#D0D7DA";
			}
			if(index==4){
				index=0;
			}
			imgs[index].style.display="block";
			lis[index].style.background="#BB1E7B";
		}

//一件置顶
    var gus=document.getElementById('gu');
    console.log(gus)
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
 
































}