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
var haufen=new Array(10),block={},tetris=[],asd,i,j,task,vtime,ttime,go,drops,level,score;

for(i=0;i<10;i++)
	haufen[i]=new Array(18)
	
$(document).ready(function(){
	reset();
    function callback() {
        tick();
        if(ttime>=60&&vtime>10){
            ttime-= 50;
            vtime=0;
            level++;
        }
        setTimeout( callback, ttime);
    }
    setTimeout( callback, ttime );
});

function tick(){
	task="down";
	move();
	task="none";
    if(go)
        draw()
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
				case 2://!!!!!1312
					block.bx=block.x+1;
					block.by=block.y;
					block.cx=block.x-1;
					block.cy=block.y;
					block.dx=block.x-1;
					block.dy=block.y-1;
					break;
				case 3:
					block.bx=block.x;
					block.by=block.y-1;
					block.cx=block.x;
					block.cy=block.y+1;
					block.dx=block.x-1;
					block.dy=block.y+1;
					break;
				case 0:
					block.bx=block.x-1;
					block.by=block.y;
					block.cx=block.x+1;
					block.cy=block.y;
					block.dx=block.x+1;
					block.dy=block.y+1;
					break;
				case 1:
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

$(document).on('keypress', function(e){	
	var code = e.keyCode || e.which;
	task="none";
	setTask(code);
	switch(task){
		case"left":
		case"right":
		case"down":
		case"drop":
			move();
			task="none";
			break;
		case"rotate":
			rotate();
			break;
		case"pause":
			if(game!="over"){
				if(go){
					go=false;
					var line=new Array(18);
                    for(i=0;i<18;i++){
                        line[i]="";
                        for(j=0;j<10;j++)
                                line[i]+='<font class="b">&bull;</font>'                        
                    }
                    var htm="";
                    for(i=17;i>=0;i--)
                        htm+=line[i]+"<br>"
                    $("#tetris").empty().append(htm);
                }else{
					go=true;
					draw();
                }
			}
			break;
	}
	
});

function rotationBlocked(){
	block.dirtemp=block.dir;
	haufen[block.x][block.y]=0;
	haufen[block.bx][block.by]=0;
	haufen[block.cx][block.cy]=0;
	haufen[block.dx][block.dy]=0;
	if(block.dir==0)
		block.dir=3
	else
		block.dir--
	setBlock();
	if(block.bx<0||block.bx>9||block.cx<0||block.cx>9||block.dx<0||block.dx>9||haufen[block.bx][block.by]!=0||haufen[block.cx][block.cy]!=0||haufen[block.dx][block.dy]!=0){
		block.dir=block.dirtemp;
		setBlock();
		addBlock();
		return true;
	}
	block.dir=block.dirtemp;
	setBlock();
	addBlock();
	
	return false;
}

function rotate(){
	if(go){
		if(!rotationBlocked()){
			haufen[block.x][block.y]=0;
			haufen[block.bx][block.by]=0;
			haufen[block.cx][block.cy]=0;
			haufen[block.dx][block.dy]=0;
			if(block.dir==0)
				block.dir=3
			else
				block.dir--
		}
		task="none";
		draw();
	}
}

function loss(){
	go=false;
	task="pause";
	game="over";
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
					if(block.y==17){
						loss();
					}else{
						next();
					}
                }
                else{
                    block.y--;
                }
                draw();
                break;
			case"drop":
				while(!blocked()){
					block.y--;
					setBlock();
				}
				next();
				break;
        }
    }
}


function blocked(){
	if(block.y==0||block.by==0||block.cy==0||block.dy==0)
		return true
	if(haufen[block.x][block.y-1]!=0||haufen[block.bx][block.by-1]!=0||haufen[block.cx][block.cy-1]!=0||haufen[block.dx][block.dy-1]!=0)
		return true
	return false;
}

function dropLines(line){
	for(i=line-drops;i<17;i++)
		for(j=0;j<10;j++)
			haufen[j][i]=haufen[j][i+1]
		
	for(j=0;j<10;j++)
		haufen[j][17]=0
	drops++;
	draw();
	go=true;
	task="none";
}


function checkLines(){
	tetris=[];
	for(i=0;i<18;i++){
		asd=0;
		for(j=0;j<10;j++)
			if(haufen[j][i]==0)
				asd=1
			
		if(asd==0)
			tetris.push(i)
		
    }
    if(tetris.length>0){
		drops=0;
        addScore();
		tetris.forEach(function(entry) {
			dropLines(entry);
		});
	}else{
		go=true;
		task="none";
	}
}

function addScore(){
    var s=level*3;
    for(i=1;i<=tetris.length;i++)
        s+=i*10
    score+=s;
    if(score>999999999999999)
        score=999999999999999
}

function next(){
    addBlock();
    block.x=-1;
    block.y=-1;
	draw();
	go=false;
	task="pause";
	checkLines();
	
	block.x=5;
	block.y=17;
	block.dir=0;
	block.type=nextBlock;
	nextBlock=getRandomInt(1,7);
	nextBlock=getRandomInt(1,7);
    vtime++;
	draw();
}

function getRandomInt(mini, maxi) {
	return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}


function reset(){
	game="";
    go=true;
    score=0;
	for(i=0;i<18;i++)
		for(j=0;j<10;j++)
			haufen[j][i]=0
		
	ttime=660;
    vtime=0;
    level=1;
	block.x=5;
    block.y=18;
    block.dir=0;
	block.type=getRandomInt(1,7);
	nextBlock=getRandomInt(1,7);
    task="none";
    draw();
}

function draw(){
	if(block.x>=0){
        setBlock();
        addBlock();
    }
	var line=new Array(18);
	for(i=0;i<18;i++){
		line[i]="";
		for(j=0;j<10;j++)
			if(haufen[j][i]==0)
				line[i]+='<font class="b">&bull;</font>'
			else
				line[i]+='<font class="t'+haufen[j][i]+'">&curren;</font>'
			
		
	}
	var htm="";
	for(i=17;i>=0;i--)
		htm+=line[i]+"<br>"
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
		htm+=line[i]+"<br>"
	$("#asd").empty().append(htm);
    $("#l").empty().append("<span class='t8'>"+level+"</span>");
    $("#s").empty().append("<span class='t8'>"+score+"</span>");
	
	block.x=block.xtemp;
	block.y=block.ytemp;
	block.dir=block.dirtemp;
	block.type=block.typetemp;
	setBlock();
}

