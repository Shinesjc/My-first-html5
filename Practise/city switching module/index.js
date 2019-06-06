var btn = document.getElementsByClassName('btn')[0];
var spans = document.getElementsByTagName('span');
var spanArr = Array.prototype.slice.call(spans); //将类数组转化为数组
var card = document.getElementsByClassName('card')[0];
var oReturn = document.getElementsByClassName('return')[0];
var ul = document.getElementsByTagName('ul')[0];
var activeDome;
var angle=0;
btn.onclick = function(){
	angle += 180;
	this.style.transform = 'rotate('+ angle +'deg)';
	spanArr.forEach(function (ele,index) {
		ele.className = ele.className == 'state1'? 'state2':'state1';//三目运算符
		//if(ele.className =='state1'){
		//	ele.className ='state2';
		//}else{
		//	ele.className ='state1'
		//}
	});
}
spanArr.forEach(function(ele,index){
	ele.onclick=function(){
		card.style.left = 0;
		activeDome = ele;
	}
});
oReturn.onclick = function(){
	card.style.left = '100%';
}
ul.addEventListener('click',function(e){
	var target = e.target;
	if(target.nodeName !== 'LI') return;
	var val = target.innerHTML;
	activeDome.innerHTML = val;
	oReturn.onclick();
})