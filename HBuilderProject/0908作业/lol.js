window.onload=function(){
      //获取ul里面的li 以及li中存放图标和名字的元素
      var list = document.getElementsByClassName('skill-list')[0];
      var skills =list.getElementsByTagName('li');
      // li中所有的图标
      var icons = list.getElementsByClassName('skill-icon'); 
      // 所有名字
      var names = list.getElementsByClassName('skill-name');
      //获取右边的单个图标和名字的元素
      var breifBox=document.getElementsByClassName('skill-breif')[0];
      var iconBox = breifBox.getElementsByClassName('skill-icon')[0];
      var nameBox = breifBox.getElementsByClassName('skill-name')[0];
      //右边的文字介绍
      var textBox = document.getElementsByClassName('skill-des')[0];
      //右边的图片
      var pic = document.getElementsByClassName('skill-using-pic')[0];
      //给左边的li中放图片的div加上背景图
      for(var n=0;n<icons.length;n++){
	      icons[n].style.background='transparent url(skills/'+(n+1)+'.png) no-repeat center';
	      icons[n].style.backgroundSize='cover';      	
      }
      //点击左边的li
      for(var m=0;m<skills.length;m++){
      	  skills[m].ind=m;
	      skills[m].onclick=function(){
	      	   //清除所有li的样式
	      	   clearGreen();
	      	   //给当前的li中的内容加上样式
	      	   icons[this.ind].style.border="5px solid #00A383";
	      	   icons[this.ind].style.boxSizing="border-box";
	      	   icons[this.ind].style.backgroundSize="65px 65px";
	      	   icons[this.ind].style.backgroundOrigin='border-box';//让背景图从边框左上角开始显示
	      	   names[this.ind].style.color='#00A383';
	      	   //改变右边的图标
	      	   iconBox.style.background='seagreen url(skills/'+(this.ind+1)+'.png) no-repeat center'
	           iconBox.style.backgroundSize='cover';
	           //改变右边的名字  将当前点击的li中的名字  给 右边
	           nameBox.innerHTML=names[this.ind].innerHTML;
	           //换图片
	           pic.src='details/d'+(this.ind+1)+'.jpg';
	           //改文字
	           textBox.innerHTML=info[this.ind]
	      }      	
      }
      
      //清除所有li中元素的边框和文字颜色
      function clearGreen(){
      	   for(var n=0;n<skills.length;n++){
          	   icons[n].style.border="none";
	      	   names[n].style.color='';      	   	    
      	   }
      }
      
     var info=[
         '为你的英雄套上护盾，吸收115-455（取决于英雄等级）点伤害，持续2秒。',
         '移除身上的所有限制效果和召唤师技能的减益效果，并且若在接下来的3秒里再次被施加限制效果时，新效果的持续时间会减少65%。',
         '将地图上任意一块区域暴露给你的队伍，持续5秒。',
         '引燃是对单体敌方目标施放的持续性伤害技能，在5秒的持续时间里造成70-410（取决于英雄等级）真实伤害，获得目标的视野，并减少目标所受的治疗和回复效果。',
         '55555',
         '6666',
         '777',
         '为你的英雄和周围的友军回复40%的最大法力值。',
         '999',
         '10 10 10',
         '11 11 11',
         '把一个魄罗投向你的敌人。如果它命中了一名敌人，那么你接下来就可以快速位移到被命中的敌人旁边。',
         '对目标史诗野怪、大型野怪或敌方小兵造成390-1000（取决于英雄等级）点真实伤害。',
         '沿直线扔出一个雪球。如果雪球命中了一个敌人，那么这个敌人会被【标记】，并且你的英雄接下来可以快速突进到被【标记】的目标旁边。',
         '在引导3.5秒后，将英雄传送到友方建筑物、小兵或守卫旁边。'
     ]
      
}