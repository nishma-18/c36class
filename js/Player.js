class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
    name: this.name, distance: this.distance
    });
  }
 //static is common to all players, not confined to one player
 static getPlayerinfo(){

  //to get info from player
var playerInforeference= database.ref('players');

//to get all details of players from the database
playerInforeference.on("value",(data)=>{allPlayers=data.val});

 }
}



