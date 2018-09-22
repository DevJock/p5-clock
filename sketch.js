let Width = window.innerWidth;
let Height = window.innerHeight;

let padding;
let thickness;
let radius;

let textFontSize;
let textCircleRadius;

let h = 0;
let m = 0;
let s = 0;

function scaler() {
	radius = Width / 12;
	textFontSize = radius / 4;
	textCircleRadius = radius / 1.5;
	thickness = radius / 2;
	padding = thickness;
}

function setup() {
	scaler();
	createCanvas(Width, Height);
	textAlign(CENTER, CENTER);
	ellipseMode(CENTER);
	rectMode(CENTER);
	angleMode(DEGREES);
	frameRate(1);
}

function draw() {
	background(0);
	h = hour();
	m = minute();
	s = second();
	fill(75);
	textSize(Width / 100);
	text("Ⓒ Chiraag Bangera 2018", Width / 2, Height - 50);
	textSize(textFontSize);
	translate(Width / 2, Height / 2);
	fill(125, 125, 125);
	ellipse(0, 0, radius - textCircleRadius / 2, radius - textCircleRadius / 2);

	fill(255);
	text(h >= 12 ? "PM" : "AM", 0, 0);

	noFill();
	strokeWeight(thickness);

	let radH = radius + padding;
	let clockRotH = map(h % 12, 0, 12, 0, 360);
	let radM = 2 * (radius + padding);
	let clockRotM = map(m, 0, 60, 0, 360);
	let radS = 3 * (radius + padding);
	let clockRotS = map(s, 0, 60, 0, 360);


	rotate(-90);
	stroke(255, 0, 0);
	arc(0, 0, radH, radH, 0, clockRotH);
	stroke(0, 255, 0);
	arc(0, 0, radM, radM, 0, clockRotM);
	stroke(0, 0, 255);
	arc(0, 0, radS, radS, 0, clockRotS);


	strokeWeight(thickness / 16);
	stroke(0);
	let circleHX = radH * cos(clockRotH) / 2;
	let circleHY = radH * sin(clockRotH) / 2;
	let circleMX = radM * cos(clockRotM) / 2;
	let circleMY = radM * sin(clockRotM) / 2;
	let circleSX = 0 + radS * cos(clockRotS) / 2;
	let circleSY = 0 + radS * sin(clockRotS) / 2;

	fill(255, 0, 0);
	ellipse(circleHX, circleHY, textCircleRadius, textCircleRadius);
	fill(0, 255, 0);
	ellipse(circleMX, circleMY, textCircleRadius, textCircleRadius);
	fill(0, 0, 255);
	ellipse(circleSX, circleSY, textCircleRadius, textCircleRadius);

	fill(255);
	push();
	translate(circleHX, circleHY);
	rotate(90);
	text(h % 12, 0, 0);
	pop();
	push();
	translate(circleMX, circleMY);
	rotate(90);
	text(m, 0, 0);
	pop();
	push();
	translate(circleSX, circleSY);
	rotate(90);
	text(s, 0, 0);
	pop();
}
