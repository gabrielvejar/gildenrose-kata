class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemTypes = {
  BRIE: 'Aged Brie',
  PASS: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros',
  CONJURED: 'Conjured Mana Cake'
}

/**
 * Method to update an 'Aged Brie'
 *
 * @param {Object} item - The 'Aged Brie' object to be updated.
 * @param {number} item.quality - The quality of the item.
 * @param {number} item.sellIn - The number of days to sell the item.
 */
const updateBrie = (item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

/**
 * Method to update a 'Backstage passes to a TAFKAL80ETC concert'
 *
 * @param {Object} item - The 'Backstage passes to a TAFKAL80ETC concert' object to be updated.
 * @param {number} item.quality - The quality of the item.
 * @param {number} item.sellIn - The number of days to sell the item.
 */
const updatePass = (item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  } 
}

/**
 * Method to update an 'Sulfuras, Hand of Ragnaros'
 *
 * @param {Object} item - The 'Sulfuras, Hand of Ragnaros' object to be updated.
 * @param {number} item.quality - The quality of the item.
 * @param {number} item.sellIn - The number of days to sell the item.
 */
const updateSulfuras = (item) => {
  // Sulfuras does not update the quality or sellIn values
}

/**
 * Method to update a normal item
 *
 * @param {Object} item - The normal item object to be updated.
 * @param {number} item.quality - The quality of the item.
 * @param {number} item.sellIn - The number of days to sell the item.
 */
const updateNormalItem = (item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

/**
 * Method to update a 'Conjured Mana Cake' item
 *
 * @param {Object} item - The 'Conjured Mana Cake' item object to be updated.
 * @param {number} item.quality - The quality of the item.
 * @param {number} item.sellIn - The number of days to sell the item.
 */
const updateConjured = (item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 2;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 2;
  } 
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case itemTypes.BRIE:
          updateBrie(item);
          break;
        case itemTypes.PASS:
          updatePass(item);
          break;
        case itemTypes.SULFURAS:
          updateSulfuras(item);
          break;
        case itemTypes.CONJURED:
          updateConjured(item);
          break;
        default:
          updateNormalItem(item);
          break;
      }
    }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
