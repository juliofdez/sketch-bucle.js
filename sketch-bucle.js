var n =100
var x =20
var y=y+20
function setup(){
    createCanvas(800,500);
    background(125);
}

function draw(){
    while(n>0){

        if (n%10 ==0){
            //
            y = y + 20;
            x= 20
        }else{
            x = x +20;
        }
        ellipse(x,y,10,10);

        n = n -1
    }
   
}