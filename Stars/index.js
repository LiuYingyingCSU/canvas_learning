
var _sto = setInterval;
window.onload=function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	canvas.width=1200;
	canvas.height=800;

	var linearGrad = context.createRadialGradient(
								600,850,0,600,850,400);
	linearGrad.addColorStop(0.0, "red");
	linearGrad.addColorStop(0.2, "red");
	linearGrad.addColorStop(0.35, "yellow");
	linearGrad.addColorStop(0.7, "black");
	linearGrad.addColorStop(1.0, "black");

	context.fillStyle = linearGrad;
	context.fillRect(0,0,canvas.width,canvas.height);

	randomStar(context);
	// var int = self.setInterval("randomStar(context)",50);
	window.setInterval = function(callback, timeout, param){
		var args = Array.prototype.slice.call(arguments,2);
		var _cb = function(){
			callback.apply(null, args);
		}
		_sto(_cb,timeout);
	}
	// randomStar(context);
	window.setInterval(randomStar,1000,context);
	// drawStar(context,150,300,400,400,0)

}

function stop(){
	window.clearInterval(_sto);
}

function randomStar(cxt){
	cxt.clearRect(0,0,800,800);
	var linearGrad = cxt.createRadialGradient(600,850,0,600,850,400);
	linearGrad.addColorStop(0.0, "red");
	linearGrad.addColorStop(0.2, "red");
	linearGrad.addColorStop(0.35, "yellow");
	linearGrad.addColorStop(0.7, "black");
	linearGrad.addColorStop(1.0, "black");

	cxt.fillStyle = linearGrad;
	cxt.fillRect(0,0,canvas.width,canvas.height);
	for (var i=0; i< 50;i++){
		var r=Math.random()*10;
		var x = Math.random()*canvas.width;
		var y = Math.random()*canvas.height*0.65;
		var rot = Math.random()*360;
		drawStar(cxt,r/2.0,r,x,y,rot);
	}
}

function drawStar(cxt,r,R,x,y,rot){
	cxt.beginPath();
	for (var i=0;i<5;i++){
		cxt.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*R+x,
						-Math.sin((18+i*72-rot)/180*Math.PI)*R+y);
		cxt.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*r+x,
						-Math.sin((54+i*72-rot)/180*Math.PI)*r+y);
	}
	cxt.closePath();

	cxt.fillStyle = "#fb3";
	cxt.strokeStyle = "#fd5";
	cxt.lineWidth = 3;
	cxt.lineJoin = "round";

	cxt.fill();
	cxt.stroke();
}