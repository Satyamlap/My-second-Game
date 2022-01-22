            var Play = 1;
            var End  = 0;
            var gameState = Play;
            var goku,back;
            var gokuImg,backImg;
            var Inblock;
            var score = 0 ;
            var cactus , cactusGroup , birdGroup; 
            var GO;
            var bird;

            function preload() {
                // goku Img
                gokuImg = loadAnimation("goku4.png","goku5.png");
                GokuImg = loadImage("goku4.png");
                // Back Img
                backImg = loadImage("back5.jpg");
                //cactus Img
                cactusImg = loadImage("cactus.png");
                cactus2Img = loadImage("cactus2.png");
                // Gameover IMG
                Game_Over = loadImage("GO.png");
                // birds IMG
                BirdImg = loadAnimation("b1.png","b2.png","b3.png","b4.png");

            }


                function setup(){
                    //To create area
                    createCanvas(700,400)
            
                   

                    //#1
                    back = createSprite(400,10,10,10)
                    back.addImage(backImg);
                    back.scale=2;
                    back.velocityX=-2;

                    //#2
                    goku = createSprite(100,350,10,10);
                    goku.addAnimation("goku",gokuImg);
                    console.log(goku);
                    //goku.debug = true;
                    
                    
                    //#3
                    Inblock = createSprite(90,388,50,10);
                    Inblock.visible = false;

                        //#4
                        GO = createSprite(360,200,10,10);
                        GO.addImage(Game_Over);
                        GO.scale = 0.6
                      
                    /* goku.depth = back.depth;
                    Inblock = back.depth;
                        goku.depth = goku.depth+1*/
                    
                    }




                    function draw (){
                    // To clear background
                    background(180);


                // All Groups
                cactusGroup = createGroup();
                birdGroup = createGroup();

                    // Inblock collide goku
                    goku.collide(Inblock);

                  if (cactusGroup.isTouching(goku)){
                      gameState === End;
                      
                  }

                   
                   if (gameState === End){
                    GO.visible= true;

                   }

                   
                  
                    PLAY();
                    drawSprites();
                    // display score
                    textSize(15);
                    text("Score:"+score,620,20)

                    }






            function spawncactus(){
                if (frameCount % 250 == 0){
            cactus = createSprite(705,350,10,10)
                cactus.velocityX = -(2  + score/500);

                // spawn random cactus
                var rand = Math.round(random(1,2));
                switch(rand) {
                    case 1: cactus.addImage(cactusImg);
                            break;
                    case 2: cactus.addImage(cactus2Img);
                    default: break;
                }

                //cactus.debug = true;
                cactus.scale = 0.15
                cactus.lifetime = 450;
                cactusGroup.add(cactus);

            }
            }







  
                function spawnBirds(){
                    if (frameCount % 150 === 0){
                    bird = createSprite(710,150,10,10);
                    bird.addAnimation("bird",BirdImg);
                    bird.scale = 0.4;
                    bird.velocityX = -3.5;
                    bird.lifetime = 450


                    birdGroup.add(bird);
                    }
                    }


                function PLAY(){
                if (gameState === Play){
                   /* if (goku.collide(cactusGroup) || goku.collide(birdGroup)){

                        gameState === End;
                       
                    }*/
                    GO.visible = false;
                    
                     // goku jumping control
                     if (goku.y > 310){
                        if (keyDown("space")){
                            goku.velocityY = goku.velocityY-2;
                        }
                        }

                         // increasing score
                    score = score + Math.round(getFrameRate()/60);

                      // Making background Infinite
                      if (back.x < 85){
                        back.x = back.width/1    
                    }

                    //making gravity for goku
                    goku.velocityY  = goku.velocityY+0.4;

                    // spawn cactus
                    spawncactus();
                    // spawn birds
                    spawnBirds();
                   
                   /* if(cactusGroup.asTouching(goku) || birdGroup.isTouching(goku)){

                        if(gameState === End){
                            GO.visible = true;
                            text("Press R To Restart",350,50);
                            goku.setVelocity(0,0);
                            cactusGroup.setVelocity(0,0)
                            birdGroup.setVelocity(0,0);
                        } 
                    }*/

                }
                }
              




               