let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(0,200);
ctx.lineTo(600,200);
ctx.stroke();

ctx.moveTo(0,400);
ctx.lineTo(600,400);
ctx.stroke();

ctx.moveTo(200,0);
ctx.lineTo(200,600);
ctx.stroke();

ctx.moveTo(400,0);
ctx.lineTo(400,600);
ctx.stroke();

let counter = 0;
let player1 = 0;
let player2 = 0;
let won = 0;
let tie = 1;

let p1d1,p1d2,p1d3,p1d4,p1d5,p1d6,p1d7,p1d8,p1d9;
let p2d1,p2d2,p2d3,p2d4,p2d5,p2d6,p2d7,p2d8,p2d9;

function game(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    // console.log("x: " + x + " y: " + y);

    
        if(x > 0 && x < 200 && y > 0 && y < 200){
            console.log("1");
            if((!p1d1 && !p2d1) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 50,50);
                counter++;
                p1d1 = 1;
                if((p1d1 && p1d2 && p1d3) || (p1d1 && p1d4 && p1d7) || (p1d1 && p1d5 && p1d9)){
                    tie = 0;
                    player1 = 1;
                }
            }
            else if((!p1d1 && !p2d1) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 50,50);
                counter++;
                p2d1 = 1;
                if((p2d1 && p2d2 && p2d3) || (p2d1 && p2d4 && p2d7) || (p2d1 && p2d5 && p2d9)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
            
        else if(x >= 200 && x < 400 && y > 0 && y < 200){
            console.log("2");
            if((!p1d2 && !p2d2) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 250,50);
                counter++;
                p1d2 = 1;
                if((p1d1 && p1d2 && p1d3) || (p1d2 && p1d5 && p1d8)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d2 && !p2d2) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 250,50);
                counter++;
                p2d2 = 1;
                if((p2d1 && p2d2 && p2d3) || (p2d2 && p2d5 && p2d8)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }

        else if(x >= 400 && x < 600 && y > 0 && y < 200){
            console.log("3");
            if((!p1d3 && !p2d3) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 460,50);
                counter++;
                p1d3 = 1;
                if((p1d1 && p1d2 && p1d3) || (p1d3 && p1d6 && p1d9) || (p1d3 && p1d5 && p1d7)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d3 && !p2d3) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 460,50);
                counter++;
                p2d3 = 1;
                if((p2d1 && p2d2 && p2d3) || (p2d3 && p2d6 && p2d9) || (p2d3 && p2d5 && p2d7)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
        
        else if(x >= 0 && x < 200 && y > 200 && y < 400){
            console.log("4");
            if((!p1d4 && !p2d4) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 50,250);
                counter++;
                p1d4 = 1;
                if((p1d1 && p1d4 && p1d7) || (p1d4 && p1d5 && p1d6)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d4 && !p2d4) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 50,250);
                counter++;
                p2d4 = 1;
                if((p2d1 && p2d4 && p2d7) || (p2d4 && p2d5 && p2d6)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }

        else if(x >= 200 && x < 400 && y > 200 && y < 400){
            console.log("5");
            if((!p1d5 && !p2d5) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 250,250);
                counter++;
                p1d5 =1;
                if((p1d1 && p1d5 && p1d9) || (p1d3 && p1d5 && p1d7) || (p1d2 && p1d5 && p1d8) || (p1d4 && p1d5 && p1d6)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d5 && !p2d5) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 250,250);
                counter++;
                p2d5 = 1;
                if((p2d1 && p2d5 && p2d9) || (p2d3 && p2d5 && p2d7) || (p2d2 && p2d5 && p2d8) || (p2d4 && p2d5 && p2d6)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
        
        else if(x >= 400 && x < 600 && y > 200 && y < 400){
            console.log("6");
            if((!p1d6 && !p2d6) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 460,250);
                counter++;
                p1d6 = 1;
                if((p1d3 && p1d6 && p1d9) || (p1d4 && p1d5 && p1d6)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d6 && !p2d6) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 460,250);
                counter++;
                p2d6 = 1;
                if((p2d1 && p2d4 && p2d7) || (p2d4 && p2d5 && p2d6)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
        
        else if(x >= 0 && x < 200 && y > 400 && y < 600){
            console.log("7");
            if((!p1d7 && !p2d7) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 50,450);
                counter++;
                p1d7 = 1;
                if((p1d1 && p1d4 && p1d7) || (p1d7 && p1d8 && p1d9) || (p1d3 && p1d5 && p1d7)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d7 && !p2d7) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 50,450);
                counter++;
                p2d7 = 1;
                if((p2d1 && p2d4 && p2d7) || (p2d7 && p2d8 && p2d9) || (p2d3 && p2d5 && p2d7)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
        
        else if(x >= 200 && x < 400 && y > 400 && y < 600){
            console.log("8");
            if((!p1d8 && !p2d8) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 250,450);
                counter++;
                p1d8 = 1;
                if((p1d2 && p1d5 && p1d8) || (p1d7 && p1d8 && p1d9)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d8 && !p2d8) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 250,450);
                counter++;
                p2d8 = 1;
                if((p2d2 && p2d5 && p2d8) || (p2d7 && p2d8 && p2d9)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }
        
        else if(x >= 400 && x < 600 && y > 400 && y < 600){
            console.log("9");
            if((!p1d9 && !p2d9) && counter %2 == 0){
                ctx.drawImage(document.getElementById("cross"), 460,450);
                counter++;
                p1d9 = 1;
                if((p1d1 && p1d5 && p1d9) || (p1d3 && p1d6 && p1d9) || (p1d7 && p1d8 && p1d9)){
                    tie = 0;
                    player1 = 1;
                }
            }
            if((!p1d9 && !p2d9) && counter %2 != 0){
                ctx.drawImage(document.getElementById("circle"), 460,450);
                counter++;
                p2d9 = 1;
                if((p2d1 && p2d5 && p2d9) || (p2d3 && p2d6 && p2d9) || (p2d7 && p2d8 && p2d9)){
                    tie = 0;
                    player2 = 1;
                }
            }
        }


    if(player1 == 1){
        ctx.rect(0, 0, 600, 600);
        ctx.fillStyle = "rgba(192,192,192,0.3)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textalign = "center";
        ctx.fillText("PLAYER 1 WON", 190, 300);
    }

    else if(player2 == 1){
        ctx.rect(0, 0, 600, 600);
        ctx.fillStyle = "rgba(192,192,192,0.3)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textalign = "center";
        ctx.fillText("PLAYER 2 WON", 190, 300);
    }

    else if(counter == 9 && tie == 1){
        ctx.rect(0, 0, 600, 600);
        ctx.fillStyle = "rgba(192,192,192,0.3)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textalign = "center";
        ctx.fillText("IT'S A TIE !", 190, 300);
    }
}

canvas.addEventListener('mousedown', function(e) {
    game(canvas, e)
})
