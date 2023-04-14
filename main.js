img = "";
Status = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(670, 470);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {

    console.log('Model is Loaded!!');
    Status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 670, 470);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 30);
    noFill();
    stroke("#FF0000");
    rect(260, 40, 320, 400);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}