var CANCAS=document.getElementById("Canvas");
var ctx=CANCAS.getContext("2d");
var RACEHeight=90;
var RACEWidth=100;
var RACEX=10;
var RACEY=10;
var RACEIMG="RaceCar.jpg";
var RACE1IMG="RaceCar2.jpg";
var RACE1Height=90;
var Race1Width=100;
var Race1Y=100;
var Race1X=10;
function add(){
 bgimg=new Image();
 bgimg.onload=uploadbg;
 bgimg.src="RacingBG.jpg";
 Race1imgDub=new Image();
 Race1imgDub.onload=uploadimg;
 Race1imgDub.src=RACE1IMG;
 Raceimg=new Image();
 Raceimg.onload=uploadimg;
 Raceimg.src=RACEIMG;
}
function uploadbg(){
ctx.drawImage(bgimg , 0 , 0 , CANCAS.width , CANCAS.height);
}
function uploadimg(){
ctx.drawImage(Raceimg , RACEX, RACEY , RACEWidth , RACEWidth );
ctx.drawImage(Race1imgDub , Race1X , Race1Y , Race1Width , RACE1Height);
}
window.addEventListener("keydown" , Imogen)
function Imogen(e){
    var KeyPressDarra=e.keyCode;
    console.log(KeyPressDarra);
    if (KeyPressDarra=="38"){UpOrla()}
    if (KeyPressDarra=="40"){DownSean()}
    if (KeyPressDarra=="37"){LeftKyra()}
    if (KeyPressDarra=="39"){RightPeter()}
    if (KeyPressDarra=="68"){ReveloutinaryRight()}
    if (KeyPressDarra=="83"){DevestatingDown()}
    if (KeyPressDarra=="65"){LazyLeft()}
    if (KeyPressDarra=="87"){UpliftingUp()}
}
function UpOrla(){
if (RACEY>=0){
    RACEY=RACEY-10;
    console.log("When UP arrow is pressed, x = " + RACEX + " | y = " +RACEY);
    uploadbg();
    uploadimg();
}
}
function DownSean(){
    if (RACEY<=500){
        RACEY=RACEY+10;
        console.log("When DOWN arrow is pressed, x = " + RACEX+ " | y = " +RACEY);
        uploadbg(); 
        uploadimg();
}
}
function LeftKyra(){
    if (RACEX>=0){
        RACEX=RACEX-10;
        console.log("When LEFT arrow is pressed, x = " + RACEX + " | y = " +RACEY);
        uploadbg();
        uploadimg();
}
}
function RightPeter(){
    if (RACEX<=700){
        RACEX=RACEX+10;
        console.log("When RIGHT arrow is pressed, x = " + RACEX + " | y = " +RACEY);
        uploadbg();
        uploadimg();
}
else
{
    console.log("Red Car Wins!");
    document.getElementById('Game_Status').innerHTML="Red Car Wins!";
    RACEX = 10;
    RACEY = 10;
    Race1X = 10;
    Race1Y = 100;
    uploadbg();
    uploadimg();
}
}
function UpliftingUp(){
if (Race1Y>=0){
    Race1Y=Race1Y-10;
    console.log("When UP arrow is pressed, x = " + Race1X + " | y = " +Race1Y);
    uploadbg();
    uploadimg();
}
}
function DevestatingDown(){
if (Race1Y<=500){
    Race1Y=Race1Y+10;
    console.log("When DOWN arrow is pressed, x = " + Race1X + " | y = " +Race1Y);
    uploadbg();
    uploadimg();
}
}
function ReveloutinaryRight(){
if (Race1X<=700){
    Race1X=Race1X+10;
    console.log("When RIGHT arrow is pressed, x = " + Race1X + " | y = " +Race1Y);
    uploadbg();
    uploadimg();
}
else
{
    console.log("Yellow Car Wins!");
    document.getElementById('Game_Status').innerHTML="Yellow Car Wins!";
    RACEX = 10;
    RACEY = 10;
    Race1X = 10;
    Race1Y = 100;
    uploadbg();
    uploadimg();
}
}
function LazyLeft(){
if (Race1X>=0){
    Race1X=Race1X-10;
    console.log("When LEFT arrow is pressed, x = " + Race1X + " | y = " +Race1Y);
    uploadbg();
    uploadimg();
}
}




/*
if (Race1X<700&&RACEX<700){
    document.getElementById('Game_Status').innerHTML="Be the first to reach the end";
}
*/
