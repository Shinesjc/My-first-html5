
// 1= <div class='wall'></div>
// 2= <div class='coin'></div>
// 3= <div class='ground'></div>
// 4= <div class='pacman'></div>

var map = [
	[1,1,1,1,1,1,1,1,1,1,1],
	[1,2,4,2,2,2,1,2,3,2,1],
	[1,3,1,1,1,2,1,1,2,2,1],
	[1,2,2,3,3,2,3,2,2,3,1],
	[1,2,3,1,1,2,1,2,1,3,1],
	[1,2,2,2,1,1,2,2,1,2,1],
	[1,1,1,1,1,1,1,1,1,1,1]
];
var pacman = {
	r:1,
	l:2,
	dir:'right'
};
var world = document.getElementById('world');
//初始化
function draw(){
	var html = "";
	for(var i = 0; i<map.length;i++){
		for(var j=0;j<map[i].length;j++){
			if(map[i][j] == 1){
				html += "<div class='wall'></div>";
			}else if(map[i][j] == 2){
				html += "<div class='coin'></div>";
			}else if(map[i][j] == 3){
				html += "<div class='ground'></div>";
			}else if(map[i][j] == 4){
				html += "<div class='pacman "+pacman.dir+"'></div>";
			}	
		}
		html += '<br/>';
	}
	world.innerHTML = html;
}
draw();
//执行操作
document.onkeydown = function(event){
	if(event.code =='ArrowRight'){
		pacman.dir='right';
		if(map[pacman.r][pacman.l+1] !=1){
			map[pacman.r][pacman.l] = 3;
			pacman.l +=1;
			map[pacman.r][pacman.l] = 4;
		}
	}else if(event.code=='ArrowLeft'){
		pacman.dir='left'
		if(map[pacman.r][pacman.l-1] !=1){
			map[pacman.r][pacman.l] = 3;
			pacman.l -=1;
			map[pacman.r][pacman.l] = 4;
		}
	}else if(event.code=='ArrowUp'){
		pacman.dir='up'
		if(map[pacman.r-1][pacman.l] !=1){
			map[pacman.r][pacman.l] = 3;
			pacman.r -=1;
			map[pacman.r][pacman.l] = 4;
		}
	}else if(event.code=='ArrowDown'){
		pacman.dir='down'
		if(map[pacman.r+1][pacman.l] !=1){
			map[pacman.r][pacman.l] = 3;
			pacman.r +=1;
			map[pacman.r][pacman.l] = 4;
		}
	}
	draw();
}
