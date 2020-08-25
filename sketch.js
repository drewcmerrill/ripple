let angle = 0;
let w = 15;
let ma;
let maxD;
function setup() {
	createCanvas(400, 400, WEBGL);
	createP('');
	ma = atan(1/sqrt(2));
	maxD = dist(0, 0, width/2, height/2);
	createP('Speed');
	angleSlider = createSlider(-.3, .3, .1, .001);
	createP('Cubes');
	wSlider = createSlider(30, 100, 85, .001);
	createP('Frequency')
	offsetSlider = createSlider(0, 3*PI, PI, .001);
}

function draw() {
	background(175);
	ortho(400, -400, -400, 400, 0, 1000);
	createP('')
	rectMode(CENTER);
	rotateX(-ma);
  rotateY(-QUARTER_PI);

	let offset = 0;
	for(let z = 0; z < height; z += 108 - wSlider.value())
	{
		for(let x = 0; x < width; x+= 108 - wSlider.value())
		{
			push();
			let d = dist(x, z, width/2, height/2);
			let offset = map(d, 0, maxD, -offsetSlider.value(), offsetSlider.value());
			let a = angle + offset;
			let h = floor(map(sin(a), -1, 1, 5, 300));
			normalMaterial();
			translate(x - width/2, 0, z - height/2);
			box(108 - wSlider.value() - 2, h, 108 - wSlider.value() - 2);

			pop();
		}
	}
	angle -= angleSlider.value();
}
