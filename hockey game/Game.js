class Game {
    constructor(){

    }
   async start(){
    car1 = createSprite(50,30);
    car1.addImage("car1",car1_img);
   }

   play(){
       drawSprites();
   }

}