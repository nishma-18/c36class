class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playercountref= await database.ref('playerCount').once("value") //use await with async
      if(playercountref.exists()){
      playerCount= playercountref.val();
      player.getCount;
      }
      
      form = new Form()
      form.display();
    }
  }

play(){
  form.hide();
  textSize(30);
  text("game Start",120,100);
  Player.getPlayerinfo();
  if(allPlayers !== undefined){
var displayposition=130;
for (var plr in allplayers){//i=0 or player = 0, player<4, player++
if(plr==="player"+player.index){
fill("blue");
else
fil("black");
displayposition+=20; //OR displayposition=displayposition+20
textSize(15);
text(allPlayers[plr].name+": "+allPlayers[plr].distance, 120,displayposition);

}
}

  
  if(keyIsDown(UP_ARROW) && player.index!==null){
    player.distance+=50;
    player.update;
    }
}


}


