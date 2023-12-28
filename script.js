var h_score = 0;
            function start()
            {
                game = true;
                score = 0;
            }
            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) ) + min;
            }
            var round = 0;
            var a_t = 30;
            var score = 0;
            var i = 0
            var t = 30;
            canvas = document.getElementById("win");
            const ctx = canvas.getContext("2d");
            const p = {size:20, x:0, y:canvas.width-20,};
            var game = false;
            
            var k = randomNumber(0, canvas.height-p.size/2-score)
            var j = randomNumber(0, canvas.width-p.size/2-score)
            console.log(k,j)



            function frame()
            {
                if (game == true)
                {
                i++;
                if (i==100)
                {
                    t--;
                    document.getElementById("tim").innerHTML="Time remaining: " + t;
                    i=0;
                }
                if (t==0)
                {
                   game = false;
                   if (score > h_score)
                   {
                        h_score=score
                        document.getElementById("h_score").innerHTML="High Score: " + score;
                   }
                }
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 0, canvas.width, canvas.height );

                ctx.fillStyle = "#FFFF00";
                ctx.fillRect(j, k, (p.size+score)/2, (p.size+score)/2 );

                ctx.fillStyle = "#FF0000";
                ctx.fillRect(p.x, p.y, p.size+score, p.size+score );

                const sq = new Path2D();
                    sq.rect(p.x, p.y, p.size+score, p.size+score );
                    ctx.fillStyle = "red";
                    ctx.fill(sq);

                if (ctx.isPointInPath(sq, j+(p.size+score)/4, k+(p.size+score)/4)) 
                {
                    k = randomNumber(0, canvas.height-p.size/2-score);
                    j = randomNumber(0, canvas.width-p.size/2-score);
                    score++;
                    t=a_t;
                    document.getElementById("tim").innerHTML="Time remaining: " + t;
                    document.getElementById("score").innerHTML="Score: " + score;
                    round++;
                };

                if (round==10)
                {
                    a_t--;
                    round=0;
                }

                document.onkeypress = function (e) {
                    e = e || window.event;
                    if (e.keyCode==97)
                    {
                        if (p.x > 0) p.x-=2;
                    }
                    if (e.keyCode==100)
                    {
                        if (p.x < canvas.width-p.size-score) p.x+=2;
                    }

                    if (e.keyCode==119)
                    {
                        if (p.y > 0)p.y-=2;
                    }
                    if (e.keyCode==115)
                    {
                        if (p.y < canvas.height-p.size-score) p.y+=2;
                    }
                }
                }
                else
                {
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height );
                    if (h_score>0)
                    {
                        ctx.font = "30px Comic Sans MS";
                        ctx.fillStyle = "red";
                        ctx.textAlign = "center";
                        ctx.fillText("You lost the game", canvas.width/2, canvas.height/2);
                        ctx.fillText("but yout score was: " + score, canvas.width/2, canvas.height/2+ 50);
                    }
                }
            }
            setInterval(frame, 20);
