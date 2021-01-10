const checkForShip = (player, coordinate) => {
   let shipPresent;
   let ship;

   for(let i = 0; i < player.ships.length; i++) {
      ship = player.ships[i];

      shipPresent = ship.locations.filter(actualCoordinates => {
         return (actualCoordinates[0] === coordinate[0]) && (actualCoordinates[1] === coordinate[1]);
      })[0];

      if(shipPresent) {
         return true;
      }
   }

   return false;
}

const damageShip = (ship, coordinate) => {
   ship.damage.push(coordinate);
};


module.exports = {
   checkForShip,
   damageShip
}
