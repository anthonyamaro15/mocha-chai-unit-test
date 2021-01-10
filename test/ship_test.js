const expect = require('chai').expect;
const { checkForShip, damageShip } = require('../gameLogic/shipMethods');


describe('checkForShip', () => {
   let player;
   before(() => {
       player = {
         ships: [
            {
               locations: [[0,0], [0,1]]
            },
            {
               locations: [[1,0],[1,1]]
            },
            {
               locations: [[2,0],[2,1], [2,2], [2,3]]
            }
         ]
      };
   })

   after(() => {
      console.log("entire test suite completed");
   });

   afterEach(() => {
      console.log("one unit test completed");
   })
   it("should correctly report no ship at a given players coordinate", () => {
      expect(checkForShip(player, [9,9])).to.be.false;
   });

   it("should correctly report a ship at given coordinate", () => {
      expect(checkForShip(player, [0,0])).to.be.true;
   });

   it("should handle ships located at more than one coordinate", () => {
      expect(checkForShip(player, [0,1])).to.be.true;
      expect(checkForShip(player, [9,9])).to.be.false;
   });

   it('should handle checking multiple ships', () => {
      expect(checkForShip(player, [0,1])).to.be.true;
      expect(checkForShip(player, [0, 0])).to.be.true;
      expect(checkForShip(player, [2,3])).to.be.true;
      expect(checkForShip(player,[7,3])).to.be.false;
   })
});


describe("damageShip", () => {
   let ship;
   beforeEach(() => {
      ship = {
         locations: [[0,0]],
         damage: []
      };
   })
   it("should register damage on a given ship at a given location", () => {
      damageShip(ship, [0,0]);
      expect(ship.damage).to.not.be.empty;
      expect(ship.damage[0]).to.deep.equal([0,0]);
   });
});
