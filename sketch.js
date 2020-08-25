let angle = 0;
let w = 15;
let ma;
let maxD;
function setup() {
	createCanvas(400, 400, WEBGL);
	ma = atan(1/sqrt(2));
	maxD = dist(0, 0, width/2, height/2);
}

function draw() {
	background(175);
	ortho(400, -400, -400, 400, 0, 1000);
	//translate(width/2, height/2);
	rectMode(CENTER);
	//rotateX(angle * 0.25);
	rotateX(-ma);
  //rotateY(-QUARTER_PI);

	let offset = 0;
	for(let z = 0; z < height; z += w)
	{
		for(let x = 0; x < width; x+= w)
		{
			push();
			let d = dist(x, z, width/2, height/2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = floor(map(sin(a), -1, 1, 50, 300));
			normalMaterial();
			translate(x - width/2, 0, z - height/2);
			box(w - 2, h, w - 2);
			//rect(x - width/2 + w/2, 0, w - 2, h);

			pop();
		}
	}
	angle -= .1;
}
