var c = document.createElement('canvas');
var ctx = c.getContext('2d');
var cw, ch;
var stars = [];
var PI2 = Math.PI*2;
var mX = 0;
var mY = 0;
var canvasRun = true;
var mouseMoved = false;
var element = null;

var canvasOne = false;
var canvasTwo = false;

var heightDivision = 41;
var widthDivision = 41;

var starInt = null;

var resize = function() {
	try {
		cw = c.width;
		ch = c.height;
	} catch (e ) {
		console.log(e);
		cw = c.width;
		ch = c.height;
	}
	
}

var rand = function(a, b) {
    return (Math.random())*b+a;
}

function getDeg(rad) {
  var deg = rad * 180/Math.PI;
  return deg;
}

var Star = function() {
    this.X = (Math.random())*c.width+(0);
    this.Y = (Math.random())*c.height+(0);
    this.VX = .00+(Math.random())*.9;
	this.VY = .00+(Math.random())*.9;
    this.radius = Math.random()*.1;
	this.color = "rgba(255,255,255,.8)";
    this.innerColor = "rgb(255,255,255)";
	if (Math.floor(rand(1,3)) == 1) {
		this.VX*=-1;
	}
	if (Math.floor(rand(1,3)) == 1) {
		this.VY*=-1;
	}
}

Star.prototype = {

    update: function(i) {
        //Get position relative to center.
        this.X = this.X + this.VX;
        this.Y = this.Y + this.VY;
		if (this.X < -5)  { 
			this.VX = Math.abs(this.VX);
			this.X = 0;
		}
		else if ( this.X > cw+5) {
			this.VX = -Math.abs(this.VX);
			this.X = cw;
		}
		if (this.Y < -5)  { 
			this.VY = Math.abs(this.VY);
			this.Y = 0;
		}
		else if ( this.Y > ch+5) {
			this.VY = -Math.abs(this.VY);
			this.Y = ch;
		}

    }
}

var starRender = function() {
	resize();
    ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#242424";
    ctx.rect(0,0,c.width,c.height);
    ctx.fill();
	
	for (var x = 0; x < stars.length; x++) {
		ctx.beginPath();
		stars[x].update();
		ctx.arc(stars[x].X, stars[x].Y, stars[x].radius, 0, PI2, false);
		ctx.fillStyle = stars[x].color;
		ctx.fill();
		ctx.strokeStyle = stars[x].innerColor;
		ctx.stroke();
		ctx.closePath();
	}

}


var startStar = function () {
	cw = c.width = document.querySelector('.fun-content').offsetWidth;
	ch = c.height = document.querySelector('.fun-content').offsetHeight;

	for (var x = 0; x < cw/4; x++) {
		stars.push(new Star());
	}

	starCanvasRun = true;
	element = document.querySelector('.fun-content');
	element.append(c);


	starInt = setInterval(function() {
		if (starCanvasRun) {
			starRender();
		}
	}, 1000/60);
}

var stopStar = function () {
	stars = [];
	element = document.querySelector('.fun-content');
	c.remove();
	element.css("background-color", "rgba(255,255,255,.2)");
	clearInterval(starInt);
	starCanvasRun = false;
}
