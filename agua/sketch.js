//https://p5js.org/examples/math-noise-wave.html
/**
 * Vertex y noise = agua
 *
 */
let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

//https://p5js.org/examples/math-noise-wave.html
/**
 * Noise y vergex
 *
 * s                   : save png
 */
function draw() {
  background(51);

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 100, 300);

    // Option #2: 1D Noise
    //let y = map(noise(xoff), 0, 1, 200, 300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(mouseY, width / 2);
  vertex(0, height);
  endShape(CLOSE);
}

//Jugar con el noise (randomGaussian)
//vertex(mouseY, width/2);
