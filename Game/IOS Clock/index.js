var oDial = document.getElementsByClassName('dial')[0];
var oSecond = document.getElementsByClassName('second')[0];
var oHour = document.getElementsByClassName('hour')[0];
var oMin = document.getElementsByClassName('min')[0];
var total= 12;
var str = '';
function init(){
	for(var i =1; i<= total ;i++){
		str += 
				'<li class="num" style="transform:rotate('+i*30+'deg)">\
					<span style="transform:rotate('+(-i)*30+'deg)">\
					'+ i +'</span>\
				</li>';
	}
	oDial.innerHTML=str;
	time();
}
init();

function time(){
	//second
	var date = new Date();
	var second= date.getSeconds();
	var msec = date.getMilliseconds();
	var fillSecond = second + msec / 1000;
	oSecond.style.transform = 'rotate('+ fillSecond*6 +'deg)';
	// minutes
	var min = date.getMinutes();
	var fillMin = min+fillSecond/60;
	oMin.style.transform = 'rotate('+ fillMin*6 +'deg)';
	//hour
	var hour = date.getHours();
	var fillHour = hour+fillMin/60;
	oHour.style.transform = 'rotate('+ fillHour*30 +'deg)';
	
	setTimeout(time,1000/60);
}
