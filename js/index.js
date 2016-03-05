window.onload = function  () {
	//时间轴Li对齐
	var timeline = document.getElementById('timeline-line');
	var obj = timeline.getElementsByClassName('even');
	for (var i = 0; i < obj.length; i++) {
		obj[i].style.top = 0 - obj[i].offsetHeight - 20 +"px";
	};
}
//获取屏幕的宽度
var windowH ;
var start ;
var end ;
var time;
var back = document.getElementById('back-top');

//滚屏方法
function  scrollDown(id) {
	//初始化
	windowH = document.documentElement.clientHeight || document.body.clientHeight;
	start = 0;
	end = 100;
	//显示返回按钮
	back.style.display = "block";
	if (id>0) {
		windowH = windowH*id;
		scrollBegin();
	}
}

function scrollBegin () {
	if (end>=windowH) {
		end = windowH;
		for (var i = start; i <= end; i++) {
			parent.scroll(1,i);
		};
		clearTimeout(time);
		return;
	};
	for (var i = start; i < end; i++) {
			parent.scroll(1,i);
	};
	start = end;
	end += 100;
	time = setTimeout("scrollBegin()",50);
}

//返回顶部
function backTop() {
	parent.scroll(0,0);
	back.style.display = "none";
}
