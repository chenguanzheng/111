window.onload=function(){
    

 // 给所有的复选框绑定change事件
    var cks=document.getElementsByClassName('ck');
    for(var k=0;k<cks.length;k++){
    	cks[k].onchange=function(){
    		checkall();
  
    	}
    }
    
// 全选事件
    var allCheck=document.getElementById('allCheck');
    allCheck.onchange=function(){
    	for(var i=0;i<cks.length;i++){
    		cks[i].checked=this.checked;
    	}
    
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
     }