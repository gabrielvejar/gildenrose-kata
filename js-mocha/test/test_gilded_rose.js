var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
var tests = require('./tests.json');
describe("Gilded Rose", function() {

  tests.forEach(test => {
    it(`${JSON.stringify(test)}`, function() {

    const {
      name,
      incomeSellIn,
      incomeQuality,
      sellIn, 
      quality
    } = test;

      const gildedRose = new Shop([ new Item(name, incomeSellIn, incomeQuality) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal(name);
      expect(items[0].sellIn).to.equal(sellIn);
      expect(items[0].quality).to.equal(quality);
    });
  });

  // // Only to run once to generate te tests data
  // // Generate a test suite with the legacy code 
  // it("Generate a test suite with the legacy code ", function() {

  //   const names = [
  //     'Aged Brie',
  //     'Backstage passes to a TAFKAL80ETC concert',
  //     'Sulfuras, Hand of Ragnaros',
  //     'normal item',
  //     'Conjured Mana Cake'
  //   ];
  //   const [minQuality, maxQuality] = [-1, 51];
  //   const [minSellIn, maxSellIn] = [-1, 12];

  //   const testsCases = [];

  //   names.forEach(name => {
  //     for (let incomeQuality = minQuality; incomeQuality <= maxQuality; incomeQuality++) {
  //       for (let incomeSellIn = minSellIn; incomeSellIn <= maxSellIn; incomeSellIn++) {
  //         const gildedRose = new Shop([ new Item(name, incomeSellIn, incomeQuality) ]);
  //         const items = gildedRose.updateQuality();
  //         const {sellIn, quality} = items[0];

  //         testsCases.push({
  //           name,
  //           incomeSellIn,
  //           incomeQuality,
  //           sellIn, 
  //           quality
  //         })
  //       }
  //     }
  //   });

  //   console.log(JSON.stringify(testsCases, null, 2));
  // });
});
