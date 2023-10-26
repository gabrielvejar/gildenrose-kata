class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemTypes = {
  BRIE: 'Aged Brie',
  PASSES: 'Backstage passes to a TAFKAL80ETC concert',
  SULFURAS: 'Sulfuras, Hand of Ragnaros'
}

const updateBrie = (item) => {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

const updatePasses = (item) => {
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
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality = item.quality + 1;
  } 
}

const updateSulfuras = (item) => {
  // sulfuras doesn't updates quality nor sellIn
}

const updateNormalItem = (item) => {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    const updateMethods = {
      BRIE: updateBrie,
      PASSES: updatePasses,
      SULFURAS: updateSulfuras,
      default: updateNormalItem
    }
    this.items.forEach(function (item) {

      updateSulfuras(item)
    })

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
