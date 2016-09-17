export default {
  items: {
    // Bank
    123: {value: 1, sell: {price: 6}, buy: {price: 4}},
    58: {value: 3, sell: {price: 3}, buy: {price: 1}},
    74264: {value: 8, sell: {price: 7}, buy: {price: 6}},
    71425: {value: 6, sell: {price: 4}, buy: {price: 2}},
    49432: {value: 2, sell: {price: 2}, buy: {price: 1}},

    // Materials
    12134: {value: 100, sell: {price: 50}, buy: {price: 30}},
    12147: {value: 20, sell: {price: 10}, buy: {price: 8}},

    // Commerce
    77239: {value: 300, sell: {price: 200}, buy: {price: 100}},
    78778: {value: 200, sell: {price: 200}, buy: {price: 100}},

    // Characters
    63604: {value: 414, sell: {price: 314}, buy: {price: 214}},
    8932: {value: 368, sell: {price: 268}, buy: {price: 168}},
    76453: {value: 118, sell: {price: 18}, buy: {price: 5}},
    44286: {value: 273, sell: {price: 173}, buy: {price: 73}},
    24647: {value: 140, sell: {price: 40}, buy: {price: 20}},
    39223: {value: 312, sell: {price: 212}, buy: {price: 112}},
    77429: {value: 10, defaultUpgrades: [39619]},
    39619: {value: 5000, sell: {price: 5000}, buy: {price: 4000}},
    71436: {value: 310, sell: {price: 210}, buy: {price: 110}, defaultUpgrades: [71425, 49428]},
    49428: {value: 143, sell: {price: 43}, buy: {price: 23}},
    69774: {value: 362, sell: {price: 262}, buy: {price: 162}},
    79031: {value: 136, sell: {price: 36}, buy: {price: 66}},

    // Gemstore items
    36708: {value: 3000, price: {gems: 150}},

    19995: {value: 100, price: {gems: 100}}, // bank slot
    19994: {value: 1000, price: {gems: 100}}, // character slot
    67071: {value: 250, price: {gems: 100}}, // shared bag
    42932: {value: 1000, price: {gems: 100}}, // storage expander
    42970: {value: 333, price: {gems: 100}}, // additional crafting licence
    19993: {value: 1000, price: {gems: 100}} // bag slot
  },

  skins: {
    1: {value: 1200, unlocks: [123, 56, 76], gemstore: false},
    2: {value: 420, unlocks: [1337], gemstore: false},
    4678: {value: 420, unlocks: [1337], gemstore: false},
    4679: {value: 420, unlocks: [1337], gemstore: false},
    994: {value: 1000, unlocks: [64740], gemstore: 50}
  },

  dyes: {
    1: {value: 3, gemstore: false},
    2: {value: 6, gemstore: false},
    3: {value: 19, gemstore: false},
    6: {value: 1000, gemstore: 50}
  },

  minis: {
    1: {value: 3, gemstore: false},
    2: {value: 6, gemstore: false},
    3: {value: 19, gemstore: false},
    6: {value: 1000, gemstore: 50}
  }
}
