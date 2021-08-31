<canvas id="myCanvas" width="800" height="600">
</canvas>

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}

function aplhabetkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
        if(keyPressed == '65')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '66')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '67')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '68')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '69')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '70')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '71')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '72')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '73')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '74')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '75')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '76')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '77')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '78')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '79')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '80')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '81')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '82')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '83')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '84')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '85')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '86')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '87')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '88')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '89')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '90')
		{
			img_image="Alpkey.png";
		add();
		}
}
function numberkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '48') {
		img_image = "numpkey.png";
		add();
	}
		if(keyPressed == '49')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '50')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '51')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '52')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '53')
		{
			img_image="Alpkey.png";
		add();
		}
		if(keyPressed == '54')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '55')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '56')
		{
			img_image="numpkey.png";
		add();
		}
		if(keyPressed == '57')
		{
			img_image="numpkey.png";
		add();
		}
}
function arrowkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		img_image = "Arrkey.png";
		add();
	}
	if (keyPressed == '40') {
		img_image = "Arrkey.png";
		add();
	}
	if (keyPressed == '39') {
		img_image = "Arrkey.png";
		add();
	}
	if (keyPressed == '37') {
		img_image = "Arrkey.png";
		add();
	}
}
function specialkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '18') {
		img_image = "spkey.png";
		add();
	}
	if (keyPressed == '91') {
		img_image = "spkey.png";
		add();
	}
	if (keyPressed == '27') {
		img_image = "spkey.png";
		add();
	}
}
function otherkey()
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '') {
		img_image = "otherkey.png";
		add();
	}
	if (keyPressed == '91') {
		img_image = "otherkey.png";
		add();
	}
	if (keyPressed == '27') {
		img_image = "otherkey.png";
		add();
	}
}
	
