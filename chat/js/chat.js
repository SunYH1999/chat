function loadTime() {
	var time = new Date();

	var hours = (time.getHours()).toString();
	if(hours.length < 2) {
		hours = "0" + hours;
	}
	var minutes = (time.getMinutes()).toString();
	if(minutes.length < 2) {
		minutes = "0" + minutes;
	}
	var seconds = (time.getSeconds()).toString();
	if(seconds.length < 2) {
		seconds = "0" + seconds;
	}
	var timeReturn = hours + ":" + minutes + ":" + seconds;
	document.getElementById("left").innerHTML = timeReturn;
	return timeReturn;
}
setInterval("loadTime()", 1000);
var chatContents = "";
var count = 0;

function sendMessage() {

	//通过调用randomName()函数来得到一个随机的名字 
	var name = randomName();
	//通过调用randomColor()函数来得到一个随机的颜色 
	var colorR = randomColor();
	//得到textarea中的内容 
	var content = document.getElementById("content").value;
	//判断输入内容是否为空 
	if(content == "") {
		alert("输入内容不能为空！！！");
		return;
	}
	//通过正则表达式来获取要替换的字符串 
	var regExp = /aa|bb|cc|dd/g;
	var regExp1 = /开心/g;
	var regExp2 = /尴尬/g;
	//   var imgReplace = content.replace(regExp,"高兴"); 
	//获取开心图片路径 
	var path1 = '<img src="img/happy.png" />';
	//获取尴尬图片的路径 
	var path2 = '<img src="img/awkward.png"/>';
	//敏感字替换； 
	content = content.replace(regExp, "***");
	//将开心替换成开心图片的字符串； 
	//   txtReplace(content); 
	var imgReplace = content.replace(regExp1, path1);
	//   alert(imgReplace); 
	//将尴尬替换成尴尬图片的字符串； 
	imgReplace = imgReplace.replace(regExp2, path2);
	//   alert(imgReplace); 
	var chatContent = "<span>" + name + ":" + "</span>" + " " + imgReplace;
	//   字符串拼接聊天记录 
	chatContents = chatContents + chatContent + " " + loadTime() + "<br/>";
	document.getElementById("chatList").innerHTML = chatContents;
	//点击发送后，textarea中的内容设为空 
	document.getElementById("content").value = "";
	var txtColor = document.getElementsByTagName("span")[count];
	count++;
	//设置span的随机颜色 
	txtColor.style.color = colorR;
	document.getElementById("content").focus();
}

function randomName() {
	var i = parseInt(Math.random() * (6 - 0 + 1) + 0);
	var arrName = new Array("Reyi", "Sury", "Lumi", "Jinn", "Gilli", "Eliwa", "Tako");
	return arrName[i];
}

function randomColor() {
	var r = parseInt(Math.random() * (255 - 0 + 1) + 0).toString(16);
	if(r.length < 2) {
		r = "0" + r;
	}
	var g = parseInt(Math.random() * (255 - 0 + 1) + 0).toString(16);
	if(g.length < 2) {
		g = "0" + g;
	}
	var b = parseInt(Math.random() * (255 - 0 + 1) + 0).toString(16);
	if(b.length < 2) {
		b = "0" + b;
	}
	return "#" + r + g + b;
}

document.onkeydown = function(event) {

	var e = event || window.event || arguments.callee.caller.arguments[0];

	if(e && e.keyCode == 13) {

		sendMessage();
		e.returnValue = false;
		return false;
	}

}