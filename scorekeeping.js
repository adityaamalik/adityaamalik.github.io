var p1b = document.querySelector("#p1");
var p2b = document.querySelector("#p2");
var h1 = document.querySelector("h1");
var p1d = document.querySelector("#p1display");
var p2d = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var num = document.querySelector("input");
var p = document.querySelector("p");
var winningscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var maxscore = 5;
var gameover = false;
p1b.addEventListener("click",function(){

	if(!gameover){
		p1score++ ;
		if(p1score === maxscore){
			gameover = true;
			p1display.classList.add("winner");
		}
		p1display.textContent = p1score;
	}
	

});

p2b.addEventListener("click",function(){

	if(!gameover){
		p2score++ ;
		if(p2score === maxscore){
			gameover = true;
			p2display.classList.add("winner");
		}
		p2display.textContent = p2score;
	}
});

reset.addEventListener("click",function(){

	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;

	p1display.classList.remove("winner");
	p2display.classList.remove("winner");

	gameover = false;
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;

	p1display.classList.remove("winner");
	p2display.classList.remove("winner");

	gameover = false;
}
num.addEventListener("change",function(){
	maxscore = Number(num.value);
	winningscoredisplay.textContent = maxscore;

	reset();
});
