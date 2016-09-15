/*	 
*/


$(document).ready(function(){
	


	
	draw();
});


$(document).on('click', 'font',function(){
	var auswahl=$(this).attr('class');
	
	
	
});

function draw(){
	
	var htm="";
	for(i=0;i<12;i++)
		htm+=line[i]+"<br>";
	$("#tetris").empty().append(htm);
}

