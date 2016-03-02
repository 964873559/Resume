window.onload = function  () {
	
}

//滚屏方法
function  scrollDown(id) {
	//获取屏幕的宽度
	var windowH = document.body.clientHeight;
	for (var i = 0; i < windowH*id; i++) {
		parent.scroll(1,i);
	}
}