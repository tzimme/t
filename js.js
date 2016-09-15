/*	
  ¤       
 ¤¤¤      
          
  ¤¤  ¤¤  
 ¤¤    ¤¤ 
          
          
 ¤¤¤   ¤¤ 
 ¤     ¤¤ 
          
 ¤        
 ¤¤¤  ¤¤¤¤ 
*/
var haufen=new Array(10),
	block={},
	tetris=[],
	asd,i,j,task,vtime,ttime,go;

for(i=0;i<10;i++)
	haufen[i]=new Array(18)
	
$(document).ready(function(){
	reset();
	block.x=5;
    block.y=18;
    block.dir=0;
	block.type=getRandomInt(1,7);
	nextBlock=getRandomInt(1,7);
    task="none";
    
    draw();
	var intervalID = setInterval(function(){tick();}, vtime);
	
	draw();
});

function tick(){
	task="down";
	move();
	task="none";
	draw();
}

function addBlock(){
	haufen[block.x][block.y]=block.type;
	haufen[block.bx][block.by]=block.type;
	haufen[block.cx][block.cy]=block.type;
	haufen[block.dx][block.dy]=block.type;
}

function setBlock(){
	switch(block.type){
		case 1:
			switch(block.dir){
				case 0:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x+1;
					block.dy=block.y;
					break;
				case 1:
					block.bx=block.x;
					block.by=block.y+1;
					block.cx=block.x+1;
					block.cy=block.y;
					block.dx=block.x;
					block.dy=block.y-1;
					break;
				case 2:
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x;
					block.cy=block.y-1;
					block.dx=block.x-1;
					block.dy=block.y;
					break;
				case 3:
					block.bx=block.x;
					block.by=block.y-1;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x;
					block.dy=block.y+1;
					break;
			}
			break;
		case 2:switch(block.dir){
				case 0:
				case 2:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x+1;
					block.dy=block.y+1;
					break;
				case 1:
				case 3:
					block.bx=block.x;
					block.by=block.y+1;
					block.cx=block.x+1;
					block.cy=block.y;
					block.dx=block.x+1;
					block.dy=block.y-1;
					break;
			}
			break;
		case 3:switch(block.dir){
				case 0:
				case 2:
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x-1;
					block.dy=block.y+1;
					break;
				case 1:
				case 3:
					block.bx=block.x;
					block.by=block.y+1;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x-1;
					block.dy=block.y-1;
					break;
			}
			break;
		case 4:switch(block.dir){
				case 0:
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x-1;
					block.dy=block.y-1;
					break;
				case 1:
					block.bx=block.x;
					block.by=block.y-1;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x-1;
					block.dy=block.y+1;
					break;
				case 2:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x+1;
					block.cy=block.y;
					block.dx=block.x+1;
					block.dy=block.y+1;
					break;
				case 3:
					block.bx=block.x;
					block.by=block.y+1;
					block.cx=block.x;
					block.cy=block.y-1;
					block.dx=block.x+1;
					block.dy=block.y-1;
					break;
			}
			break;
		case 5:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x-1;
					block.dy=block.y+1;
					break;
				
			
			break;
		case 6:switch(block.dir){
				case 0:
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x-1;
					block.dy=block.y+1;
					break;
				case 1:
					block.bx=block.x;
					block.by=block.y-1;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x+1;
					block.dy=block.y+1;
					break;
				case 2:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x+1;
					block.cy=block.y;
					block.dx=block.x+1;
					block.dy=block.y-1;
					break;
				case 3:
					block.bx=block.x;
					block.by=block.y+1;
					block.cx=block.x;
					block.cy=block.y-1;
					block.dx=block.x-1;
					block.dy=block.y-1;
					break;
			}
			break;
		case 7:switch(block.dir){//
				case 0:
				case 2:
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x-2;
					block.dy=block.y;
					break;
				case 1:
				case 3:
					block.bx=block.x;
					block.by=block.y-1;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x;
					block.dy=block.y+2;
					break;
			}
			break;
	}
}

function setTask(code){
	if(code==65||code==37||code==97)
		task="left"
	if(code==68||code==39||code==100)
		task="right"
	if(code==83||code==40||code==115)
		task="down"
	if(code==87||code==38||code==119)
		task="rotate"
	if(code==32)
		task="drop"
	if(code==80||code==112)
		task="pause"
}

$(document).on('keydown', function(e){	
	var code = e.keyCode || e.which;
	task="none";
	setTask(code);
	switch(task){
		case"left":
		case"right":
		case"down":
			move();
			task="none";
			break;
		case"drop":
			break;
		case"rotate":
			rotate();
			break;
		case"pause":
            if(go)
                go=false
            else
                go=true;
			break;
	}
	
});

function rotate(){
    haufen[block.x][block.y]=0;
    haufen[block.bx][block.by]=0;
    haufen[block.cx][block.cy]=0;
    haufen[block.dx][block.dy]=0;
	if(block.dir==0){
		block.dir=3;
    }
	else{
		block.dir--;
    }
	task="none";
	draw();
}

function move(){
    if(go){
        haufen[block.x][block.y]=0;
        haufen[block.bx][block.by]=0;
        haufen[block.cx][block.cy]=0;
        haufen[block.dx][block.dy]=0;
        switch(task){
            case"left":
                if(block.x==0||block.bx==0||block.cx==0||block.dx==0||haufen[block.x-1][block.y]!=0||haufen[block.bx-1][block.by]!=0||haufen[block.cx-1][block.cy]!=0||haufen[block.dx-1][block.dy]!=0){}
                else{
                    block.x--;
                }
                draw();
                break;
            case"right":
                if(block.x==9||block.bx==9||block.cx==9||block.dx==9||haufen[block.x+1][block.y]!=0||haufen[block.bx+1][block.by]!=0||haufen[block.cx+1][block.cy]!=0||haufen[block.dx+1][block.dy]!=0){}
                else{
                    block.x++;
                }
                draw();
                break;
            case"down":
                if(blocked()){
                    next();
                }
                else{
                    block.y--;
                }
                draw();
                break;
        }
    }
}


function blocked(){
	if(block.y==0||block.by==0||block.cy==0||block.dy==0)
		return true;
	if(haufen[block.x][block.y-1]!=0||haufen[block.bx][block.by-1]!=0||haufen[block.cx][block.cy-1]!=0||haufen[block.dx][block.dy-1]!=0)
		return true;
	return false;
}

function markLine(line){ 
    for(i=0;i<10;i++){
        haufen[i][line]=8;
    }
}
function dropLine(line){
    for(i=0;i<10;i++){
        haufen[i][line]=0;
    }
}
function dropLines(line){
    tetris.forEach(function(entry) {
		dropLine(entry);
	});
	draw();
	setTimeout(dropRest, vtime/10  );
}
function dropRest(){
    tetris.forEach(function(entry) {
		dropTop(entry);
	});
	go=true;
	task="none";
}
function dropTop(line){
	for(i=line;i<17;i++){
		for(j=0;j<10;j++){
			haufen[j][i]=haufen[j][i+1];
		}
	}
	for(j=0;j<10;j++){
		haufen[j][17]=0;
	}
}

function checkLines(){
	tetris=[];
	for(i=0;i<18;i++){
		asd=0;
		for(j=0;j<10;j++){
			if(haufen[j][i]==0){
				asd=1
		
			}
		}
		if(asd==0){
			tetris.push(i);
		}
    }
    if(tetris.length>0){
		tetris.forEach(function(entry) {
			markLine(entry);
		});
		setTimeout(dropLines, vtime/6*3);
	}else{
		go=true;
		task="none";
	}
}

function next(){
	//bla
    
    haufen[block.x][block.y]=block.type;
    haufen[block.bx][block.by]=block.type;
    haufen[block.cx][block.cy]=block.type;
    haufen[block.dx][block.dy]=block.type;
    block.x=-1;
    block.y=-1;
	go=false;
	task="pause";
	checkLines();
	
	block.x=5;
	block.y=18;
	block.dir=0;
	block.type=nextBlock;
	nextBlock=getRandomInt(1,7);
	
	draw();
	
}

function getRandomInt(mini, maxi) {
	return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}


function reset(){
    go=true;
	for(i=0;i<18;i++){
		for(j=0;j<10;j++){
			haufen[j][i]=0
		}
	}
	vtime=500;
}
	
// 				<div id="asd">
// 					<font class="t1">&curren;</font><font class="t2">&curren;</font><font class="t3">&curren;</font><font class="t4">&curren;</font><br>
// 					<font class="t5">&curren;</font><font class="t6">&curren;</font><font class="t7">&curren;</font><font class="t8">&curren;</font>
// 				</div>

function draw(){
	if(block.x>=0){
        setBlock();
        addBlock();
    }
	var line=new Array(18);
	for(i=0;i<18;i++){
		line[i]="";
		for(j=0;j<10;j++){
			if(haufen[j][i]==0){
				line[i]+='<font class="b">&bull;</font>';
			}else{
				line[i]+='<font class="t'+haufen[j][i]+'">&curren;</font>';
			}
		}
	}
	
	var htm="";
	for(i=17;i>=0;i--)
		htm+=line[i]+"<br>";
	$("#tetris").empty().append(htm);
	
	
	block.xtemp=block.x;
	block.ytemp=block.y;
	block.dirtemp=block.dir;
	block.typetemp=block.type;
		
	block.x=2;
	block.y=0;
	block.dir=0;
	block.type=nextBlock;
	setBlock();
	for(j=0;j<2;j++){
		line[j]="";
		for(i=0;i<4;i++){
			if (i == block.x && j==block.y ||
				i == block.bx && j==block.by ||
				i == block.cx && j==block.cy ||
				i == block.dx && j==block.dy){
					line[j]+='<font class="t8">&curren;</font>';
			}
			else{
					line[j]+='<font>&nbsp;</font>';	
			}
		}
	}
	var htm="";
	for(i=1;i>=0;i--)
		htm+=line[i]+"<br>";
	$("#asd").empty().append(htm);
	
	block.x=block.xtemp;
	block.y=block.ytemp;
	block.dir=block.dirtemp;
	block.type=block.typetemp;
	
	setBlock();
}

