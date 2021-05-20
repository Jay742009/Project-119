function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(650, 400);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/ku5-c72ud/model.json', modelloaded);
}

function modelloaded() {
    console.log('Model loaded!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
    rect(75, 200, 25, 30);
    stroke('darkblue');
    fill('aqua');
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("ges_name").innerHTML = results[0].label;
        document.getElementById("ges_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}