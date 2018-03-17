var a;
var ready;
var loading=0;
var clicks=30;
var login;
var l=0;

function setup() {
    a = createCanvas(windowWidth, windowHeight);
    noStroke();
    ready = 0;
    login = select(".login");
    login.style("display","none");
    logo = select("#logo");
    logo.mouseClicked(logToggle);
    logo.mouseOver(borderThis);
    logo.mouseOut(unborderThis);


    center= select(".center");

    a.touchStarted(grow);
    a.mouseClicked(grow);

     if(windowWidth<=400){
        pxs=select(".subtitle");
         pxs.style("margin-top","25px");
        pxs.html("(touch the logo to login)");
        pxs.style("font-size","8pt");
    }
    else{
         pxx=select(".title");
         pxx.style("width","70%");
        pxs=select(".subtitle");
        pxs.html("(press l to login)");
        pxs.style("font-size","12pt");
    }


    
}
function unborderThis() {
    this.style("border", "0px");

}
function borderThis(){

     this.style("border", "0px");

    }
function logToggle(){
    print(l);
    if (l===0) {
        login.style("display", "block");
        l=1;
    }
    else{
        login.style("display", "none");
        l=0;
    }

}

function keyPressed(e) {
if (keyCode==76){
    logToggle();

}
}

function draw() {


    if (ready === 0) {
        background(125,30,80);
        fill(255,150);

        rect(0, windowHeight, windowWidth, -loading);
        loading += random(15);

        if (loading >= windowHeight) {
            background(125,30,80);
            rect(0, windowHeight, windowWidth, -windowHeight);
            ready = 1;
        }

    }
    else {
        var times=500;
        if(l==1){
            times=times/3;
        }
        for (i = 0; i < times-clicks; i++) {
            colorMode(RGB);
            fill(random(mouseX), random(255), random(mouseY), random(255));

            ellipse(random(windowWidth), random(windowHeight), 3+clicks, 3+clicks);

        }

    }
  
}
function mouseClicked(event) {
    grow();

}
function touchStarted() {
    grow();




}

function grow(){
    print(this);
    clicks+=1;
}
function deviceShaken() {
    clicks=0;
}
function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    if(windowWidth<=400){
        pxs=select(".subtitle");
        pxs.html("(touch the logo to login)");
        pxs.style("font-size","8pt");
    }
    else{
        pxs=select(".subtitle");
        pxs.html("(press l to login)");
        pxs.style("font-size","12pt");
    }
}