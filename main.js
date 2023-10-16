function preload() {
    classifier = ml5.imageClassifier("DoodleNet", imageLoaded);
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(760, 400);
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function draw() {
    strokeWeight(8);
    stroke("black");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result) {
}

function imageLoaded() {
    console.log("The Model Is Loaded");
}