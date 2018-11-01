	
//		取出提示
       var tip=document.querySelector('#tip');
//     取出table
     var tab=document.querySelector('table');
       var cookiearr=getAll();
       if(cookiearr.length==0){
       	tip.style.display="block";
       	tab.style.display="none";
       }
//	   生成列表		
      var str='';
      for(var i=0;i<cookiearr.length;i++){
      	str+='<tr pid="'+cookiearr[i].pid+'">'
				+'<td><input type="checkbox" class="ck" /></td>'
				+'<td><img src="'+cookiearr[i].imgsrc+'"/></td>'
				+'<td>'+cookiearr[i].pname+'</td>'
				+'<td><button class="min">-</button><input type="text" class="num" value="'+cookiearr[i].pcount+'" /><button class="add">+</button></td>'
				+'<td>'+cookiearr[i].price+'</td>'
				+'<td>'+Number(cookiearr[i].pcount)*Number(cookiearr[i].price)+'</td>'
				+'<td><button class="del">删除</button></td>'
			+'</tr>'
      }
      tab.innerHTML+=str;  
      
// 计算总价函数
   function getTotalPrice(){
   	   var sum=0;
   	   var cks=document.getElementsByClassName('ck');
   	   
   	   for(var i=0;i<cks.length;i++){
   	   	if(cks[i].checked==true){
   	   		sum+=Number(cks[i].parentNode.parentNode.children[5].innerHTML);
   	   		console.log(sum)
   	   	}
   	   }
   	   return sum;
   }
    
document.getElementById("total").innerHTML="总价为:"+getTotalPrice();
// 给所有的复选框绑定change事件
    var cks=document.getElementsByClassName('ck');
    for(var k=0;k<cks.length;k++){
    	cks[k].onchange=function(){
    		checkall();
    		document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
    	}
    }
    
// 全选事件
    var allCheck=document.getElementById('allCheck');
    allCheck.onchange=function(){
    	for(var i=0;i<cks.length;i++){
    		cks[i].checked=this.checked;
    	}
    	document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
    }
// 判断复选框全选函数
     function checkall(){
     	   var flag=true;
     	   for(var i=0;i<cks.length;i++){
     	   	if(cks[i].checked==false){
     	   		flag=false;
     	   		break;
     	   	}
     	   }
     	   if(flag){
     	   	allCheck.checked=true;
     	   }else{
     	   	allCheck.checked=false; 
     	   }
     }
     //  
     function loading(){
     	 	allCheck.checked=true;
     	 	 for(var i=0;i<cks.length;i++){
     	 	 	cks[i].checked=allCheck.checked
     	 	 }
    		document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
     }
     loading()
//加减操作
  
 var adds=document.getElementsByClassName('add');  //加按钮
 var mins=document.getElementsByClassName('min');  //减按钮
 var dels=document.getElementsByClassName('del');  //减按钮
 var nums=document.getElementsByClassName("num");
 
   for(var t=0;t<adds.length;t++){
   	adds[t].onclick=function(){
   		var tr=this.parentNode.parentNode;
   		var pid=tr.getAttribute('pid');
   		var inp=this.previousElementSibling; //输入框
   		inp.value=Number(inp.value)+1;  //改变输入框的值
   		tr.children[5].innerHTML=Number(inp.value)*Number(tr.children[4].innerHTML);
   		updateCookie(pid,1);  //更新cookie的值
// 		假如选中状态计算总价
          if(tr.children[0].children[0].checked==true){
          	document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
          }
   	}
// }
      mins[t].onclick=function(){
      	var tr=this.parentNode.parentNode;
      	var pid=tr.getAttribute("pid");
      	var inp=this.nextElementSibling; //输入框
      	tr.children[5].innerHTML=Number(inp.value)*Number(tr.children[4].innerHTML);
      	if(inp.value>1){
      		inp.value=Number(inp.value)-1; //改变输入框的值
      		updateCookie(pid,-1);
      	}else{
      		inp.value=1;
      	}
//    	假如选中状态计算总价
        if(tr.children[0].children[0].checked==true){
        	document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
        }
      }
      
//     删除操作
       dels[t].onclick=function(){
       	var pid=this.parentNode.parentNode.getAttribute("pid");
       	
       	var cookie=getAll();
       	for(var i=0;i<cookie.length;i++){
       		if(cookie[i].pid==pid){
       			cookie.splice(i,1);
       		}
       	}
       	var tr=this.parentNode.parentNode;
       	tr.remove();  //删除本行
       	 tr=null;
       	 var cookiestr=JSON.stringify(cookie);
       	 cookieObj.set({name:"datas",value:cookiestr})
       	 
       }
     
//输入框数量改变
    nums[t].onblur=function(){
    	var tr=this.parentNode.parentNode;
    	var pid=tr.parentNode.getAttribute("pid");
    	tr.children[5].innerHTML=Number(this.value)*Number(tr.children[4].innerHTML);
    	var cookie=getAll();
    	for(var i=0;i<cookie.length;i++){
    		if(cookie[i].pid==pid){
    			cookie[i].pcount=this,value;
    		}
    	}
    	var cookiestr=JSON.stringify(cookie);
    	cookieObj.set({name:"datas",value:cookiestr});
    	 if(tr.children[0].children[0].checked==true){
        	document.getElementById('total').innerHTML="总价为:"+getTotalPrice();
        }
    }
}