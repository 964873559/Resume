
//获取屏幕的宽度
var windowH ;
var start ;
var end ;
var time;

//滚屏方法
function  scrollDown(id) {
	//初始化
	windowH = document.body.clientHeight;
	start = 0;
	end = 100;
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
