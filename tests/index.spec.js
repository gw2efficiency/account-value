/* eslint-env node, mocha */
import {expect} from 'chai'
import accountValue, {allItemIds, boundItemIds} from '../src/index'
import {bankValue, bankItems} from '../src/bank'
import {sharedInventoryValue, sharedInventoryItems} from '../src/shared'
import {materialsValue, materialsItems} from '../src/materials'
import {skinsValue} from '../src/skins'
import {walletValue} from '../src/wallet'
import {dyesValue} from '../src/dyes'
import {minisValue} from '../src/minis'
import {mountsValue} from '../src/mounts'
import {outfitsValue} from '../src/outfits'
import {recipesValue} from '../src/recipes'
import {finishersValue} from '../src/finishers'
import {mailcarriersValue} from '../src/mailcarriers'
import {nodesValue} from '../src/nodes'
import {heroesValue} from '../src/heroes'
import {glidersValue} from '../src/gliders'
import {commerceValue, commerceItems} from '../src/commerce'
import {unlocksValue, unlocksItems} from '../src/unlocks'
import {
  charactersValue,
  charactersItems,
  characterItems,
  equipmentItems,
  inventoryItems
} from '../src/characters'
import accountData from './data/account'
import bankData from './data/bank'
import sharedData from './data/shared'
import materialsData from './data/materials'
import skinsData from './data/skins'
import walletData from './data/wallet'
import dyesData from './data/dyes'
import minisData from './data/minis'
import mountsData from './data/mounts'
import outfitsData from './data/outfits'
import recipesData from './data/recipes'
import finishersData from './data/finishers'
import mailcarriersData from './data/mailcarriers'
import nodesData from './data/nodes'
import glidersData from './data/gliders'
import heroesData from './data/heroes'
import commerceData from './data/commerce'
import charactersData from './data/characters'
import values from './data/_values'

const account = {
  account: accountData,
  bank: bankData,
  shared: sharedData,
  materials: materialsData,
  skins: skinsData,
  wallet: walletData,
  dyes: dyesData,
  minis: minisData,
  mounts: {
    skins: mountsData
  },
  outfits: outfitsData,
  recipes: recipesData,
  finishers: finishersData,
  mailcarriers: mailcarriersData,
  gliders: glidersData,
  home: {
    nodes: nodesData
  },
  pvp: {
    heroes: heroesData
  },
  commerce: commerceData,
  characters: charactersData
}

const expectedValues = {
  summary: {
    liquidBuy: 9783,
    liquidSell: 11136,
    value: 3046960,
    valueMinusGemItems: 3022527,
    spentGems: 2355
  },
  bank: {
    liquidBuy: 10,
    liquidSell: 15,
    value: 3274,
    valueMinusGemItems: 274,
    spentGems: 150
  },
  shared: {
    liquidBuy: 10,
    liquidSell: 15,
    value: 3274,
    valueMinusGemItems: 274,
    spentGems: 150
  },
  materials: {
    liquidBuy: 25,
    liquidSell: 42,
    value: 100,
    valueMinusGemItems: 100,
    spentGems: 0
  },
  skins: {
    value: 1840,
    fullValue: 3040,
    valueMinusGemItems: 840,
    fullValueMinusGemItems: 2040,
    spentGems: 50
  },
  wallet: {
    liquidBuy: 1126,
    liquidSell: 1126,
    value: 1126
  },
  dyes: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  minis: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  mounts: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  outfits: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  recipes: {
    value: 28
  },
  finishers: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  mailcarriers: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  nodes: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  gliders: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  heroes: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  unlocks: {
    value: 3005433,
    valueMinusGemItems: 3000000,
    spentGems: 1300
  },
  commerce: {
    liquidBuy: 7634,
    liquidSell: 8354,
    value: 9254,
    valueMinusGemItems: 9254,
    spentGems: 0,
    details: {
      buys: {
        liquidBuy: 6831,
        liquidSell: 6831,
        value: 6831
      },
      sells: {
        liquidBuy: 340,
        liquidSell: 720,
        value: 1100
      },
      delivery: {
        liquidBuy: 463,
        liquidSell: 803,
        value: 1323
      }
    }
  },
  characters: {
    liquidBuy: 978,
    liquidSell: 1584,
    value: 13379,
    valueMinusGemItems: 10379,
    spentGems: 255,
    details: [
      {
        name: 'Some Character',
        liquidBuy: 147,
        liquidSell: 243,
        value: 4645,
        valueMinusGemItems: 1645,
        spentGems: 255,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 414,
          valueMinusGemItems: 414,
          spentGems: 0
        },
        inventory: {
          liquidBuy: 147,
          liquidSell: 243,
          value: 4211,
          valueMinusGemItems: 1211,
          spentGems: 255
        },
        crafting: {
          value: 20
        }
      },
      {
        name: 'Some other Character',
        liquidBuy: 831,
        liquidSell: 1341,
        value: 8734,
        valueMinusGemItems: 8734,
        spentGems: 0,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 5320,
          valueMinusGemItems: 5320,
          spentGems: 0
        },
        inventory: {
          liquidBuy: 831,
          liquidSell: 1341,
          value: 2314,
          valueMinusGemItems: 2314,
          spentGems: 0
        },
        crafting: {
          value: 1100
        }
      }
    ]
  }
}

describe('account value', () => {
  it('calculates the account value correctly', () => {
    expect(accountValue(account, values)).to.deep.equal(expectedValues)
  })

  it('calculates the account value fast', () => {
    let start = new Date()
    accountValue(account, values)
    let diff = new Date() - start
    expect(diff).to.be.below(25)
  })

  it('can calculate the account value with no data', () => {
    const result = {
      summary: null,
      bank: null,
      shared: null,
      characters: null,
      commerce: null,
      dyes: null,
      materials: null,
      minis: null,
      mounts: null,
      outfits: null,
      recipes: null,
      finishers: null,
      mailcarriers: null,
      nodes: null,
      gliders: null,
      heroes: null,
      skins: null,
      wallet: null,
      unlocks: null
    }

    expect(accountValue({}, values)).to.deep.equal(result)
    expect(accountValue({commerce: {buys: null, sells: null, delivery: null}}, values))
      .to.deep.equal(result)
  })

  it('can fetch all item ids', () => {
    expect(allItemIds(account)).to.deep.equal([
      123,
      44,
      36708,
      58,
      74264,
      71425,
      49432,
      12134,
      12238,
      56789,
      8932,
      9586,
      76453,
      44286,
      28083,
      24647,
      39223,
      20017,
      63604,
      69774,
      79031,
      77429,
      39619,
      71436,
      49428,
      77230,
      77239,
      78778,
      78757,
      13371,
      67335,
      19995,
      67071,
      42932,
      42970,
      19993
    ])

    expect(allItemIds({})).to.deep.equal([])
    expect(allItemIds({commerce: {buys: null, sells: null, delivery: null}})).to.deep.equal([])
  })

  it('can fetch all bound ids', () => {
    expect(boundItemIds(account)).to.deep.equal([
      36708,
      123,
      58,
      74264,
      71425,
      49432,
      44286,
      24647,
      39223,
      20017,
      63604,
      79031,
      77429,
      39619,
      71436,
      49428,
      67335,
      19995,
      67071,
      42932,
      42970,
      19993
    ])

    expect(boundItemIds({})).to.deep.equal([])
  })

  it('calculates the bank value correctly', () => {
    expect(bankValue(account, values)).to.deep.equal(expectedValues.bank)
  })

  it('calculates the shared value correctly', () => {
    expect(sharedInventoryValue(account, values)).to.deep.equal(expectedValues.shared)
  })

  it('calculates the materials value correctly', () => {
    expect(materialsValue(account, values)).to.deep.equal(expectedValues.materials)
  })

  it('calculates the skins value correctly', () => {
    const ownedItems = [123]
    expect(skinsValue(account, values, ownedItems)).to.deep.equal(expectedValues.skins)
    expect(skinsValue({skins: [1, 2]}, {skins: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, fullValue: 0, fullValueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the wallet value correctly', () => {
    expect(walletValue(account, values)).to.deep.equal(expectedValues.wallet)
    expect(walletValue({wallet: [{id: 1, value: 2}]}, values))
      .to.deep.equal({value: 2, liquidBuy: 2, liquidSell: 2})
    expect(walletValue({wallet: [{id: 4, value: 2}]}, values))
      .to.deep.equal({value: 84, liquidBuy: 84, liquidSell: 84})
    expect(walletValue({wallet: [{id: 5, value: 123}]}, values))
      .to.deep.equal({value: 0, liquidBuy: 0, liquidSell: 0})
  })

  it('calculates the dyes value correctly', () => {
    expect(dyesValue(account, values)).to.deep.equal(expectedValues.dyes)
    expect(dyesValue({dyes: [1, 2]}, {dyes: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the minis value correctly', () => {
    expect(minisValue(account, values)).to.deep.equal(expectedValues.minis)
    expect(minisValue({minis: [1, 2]}, {minis: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the mounts value correctly', () => {
    expect(mountsValue(account, values)).to.deep.equal(expectedValues.mounts)
    expect(mountsValue({mounts: {skins: [1, 2]}}, {mounts: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the outfits value correctly', () => {
    expect(outfitsValue(account, values)).to.deep.equal(expectedValues.outfits)
    expect(outfitsValue({outfits: [1, 2]}, {outfits: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the recipes value correctly', () => {
    expect(recipesValue(account, values)).to.deep.equal(expectedValues.recipes)
    expect(recipesValue({recipes: [1, 2]}, {recipes: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0})
  })

  it('calculates the finishers value correctly', () => {
    expect(finishersValue(account, values)).to.deep.equal(expectedValues.finishers)
    expect(finishersValue({finishers: [1, 2]}, {finishers: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the mailcarriers value correctly', () => {
    expect(mailcarriersValue(account, values)).to.deep.equal(expectedValues.mailcarriers)
    expect(mailcarriersValue({mailcarriers: [1, 2]}, {mailcarriers: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the gliders value correctly', () => {
    expect(glidersValue(account, values)).to.deep.equal(expectedValues.gliders)
    expect(glidersValue({gliders: [1, 2]}, {gliders: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the nodes value correctly', () => {
    expect(nodesValue(account, values)).to.deep.equal(expectedValues.nodes)
    expect(nodesValue({home: {}})).to.deep.equal(null)
    expect(nodesValue({home: {nodes: [1, 2]}}, {nodes: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the heroes value correctly', () => {
    expect(heroesValue(account, values)).to.deep.equal(expectedValues.heroes)
    expect(heroesValue({pvp: {}})).to.deep.equal(null)
    expect(heroesValue({pvp: {heroes: [1, 2]}}, {heroes: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the commerce value correctly', () => {
    expect(commerceValue(account, values)).to.deep.equal(expectedValues.commerce)

    expect(commerceValue({commerce: {buys: [], sells: [], delivery: null}}, values))
      .to.deep.equal({
        liquidBuy: 0,
        liquidSell: 0,
        spentGems: 0,
        value: 0,
        valueMinusGemItems: 0,
        details: {
          buys: {
            liquidBuy: 0,
            liquidSell: 0,
            value: 0
          },
          delivery: {
            liquidBuy: 0,
            liquidSell: 0,
            value: 0
          },
          sells: {
            liquidBuy: 0,
            liquidSell: 0,
            value: 0
          }
        }
      })

    expect(commerceItems(account)).to.deep.equal([
      {id: 77230, count: 1},
      {id: 77239, count: 3},
      {id: 78778, count: 1},
      {id: 78757, count: 1},
      {id: 13371, count: 4}
    ])
  })

  it('calculates the unlocks value correctly', () => {
    expect(unlocksValue(account, values)).to.deep.equal(expectedValues.unlocks)

    expect(unlocksItems(account)).to.deep.equal([
      {id: 67335, count: 1, binding: 'AccountUnlock'},
      {id: 19995, count: 1, binding: 'AccountUnlock'},
      {id: 67071, count: 8, binding: 'AccountUnlock'},
      {id: 42932, count: 2, binding: 'AccountUnlock'},
      {id: 42970, count: 1, binding: 'AccountUnlock'},
      {id: 19993, count: 1, binding: 'AccountUnlock'}
    ])

    const data = {
      account: {commander: false},
      bank: [
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null
      ],
      characters: [
        {bags: [], crafting: []},
        {bags: [], crafting: []},
        {bags: [], crafting: []},
        {bags: [], crafting: []},
        {bags: [1, 2, 3, 4, 5, 6], crafting: []},
        {bags: [], crafting: []},
        {bags: [], crafting: []},
        {crafting: []},
        {bags: [], crafting: []},
        {bags: [], crafting: []}
      ],
      shared: [],
      materials: []
    }
    expect(unlocksValue(data, values)).to.deep.equal({value: 6000, valueMinusGemItems: 0, spentGems: 600})
  })

  it('calculates the characters value correctly', () => {
    expect(charactersValue(account, values)).to.deep.equal(expectedValues.characters)
  })

  it('calculates the characters value correctly for weird permissions', () => {
    expect(charactersValue({characters: [{name: 'Inventories permission is missing'}]}, values)).to.deep.equal(null)
    expect(charactersItems({characters: [{name: 'Inventories permission is missing'}]}, values)).to.deep.equal([])
    expect(charactersValue({characters: []}, values)).to.deep.equal(null)
    expect(charactersItems({characters: []}, values)).to.deep.equal([])
  })

  it('calculates the characters value correctly for an empty character', () => {
    const input = {
      characters: [{
        name: 'Some Character without anything',
        bags: [],
        equipment: [],
        crafting: []
      }]
    }
    const expected = {
      value: 0,
      valueMinusGemItems: 0,
      liquidBuy: 0,
      liquidSell: 0,
      spentGems: 0,
      details: [{
        liquidBuy: 0,
        liquidSell: 0,
        name: 'Some Character without anything',
        value: 0,
        valueMinusGemItems: 0,
        spentGems: 0,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0,
          spentGems: 0
        },
        inventory: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0,
          spentGems: 0
        },
        crafting: {
          value: 0
        }
      }]
    }

    expect(charactersValue(input, values)).to.deep.equal(expected)
  })

  it('gets the items of an account correctly', () => {
    const bank = [
      {id: 123, count: 3},
      {id: 44, count: 1},
      {id: 36708, count: 1, binding: 'Account'},
      {id: 123, count: 250, binding: 'Account'},
      {id: 58, count: 1, binding: 'Character', bound_to: 'SomeName'},
      {
        id: 74264,
        count: 1,
        upgrades: [71425],
        infusions: [49432, 49432],
        skin: 234,
        binding: 'Character',
        bound_to: 'Some Character'
      },
      {id: 71425, count: 1, binding: 'Item'},
      {id: 49432, count: 1, binding: 'Item'},
      {id: 49432, count: 1, binding: 'Item'}
    ]

    const shared = [
      {id: 123, count: 3},
      {id: 44, count: 1},
      {id: 123, count: 250, binding: 'Account'},
      {id: 58, count: 1, binding: 'Character', bound_to: 'SomeName'},
      {id: 36708, count: 1, binding: 'Account'},
      {
        id: 74264,
        count: 1,
        upgrades: [71425],
        infusions: [49432, 49432],
        skin: 234,
        binding: 'Character',
        bound_to: 'Some Character'
      },
      {id: 71425, count: 1, binding: 'Item'},
      {id: 49432, count: 1, binding: 'Item'},
      {id: 49432, count: 1, binding: 'Item'}
    ]

    const materials = [
      {id: 12134, category: 5, count: 1},
      {id: 12238, category: 5, count: 2},
      {id: 56789, category: 5, count: 501}
    ]

    const characters = [
      {id: 8932, count: 1, isBag: true},
      {id: 9586, count: 1, isBag: true},
      {id: 76453, count: 1},
      {id: 44286, count: 1, binding: 'Account'},
      {id: 28083, count: 1, upgrades: [24647]},
      {id: 24647, count: 1, binding: 'Item'},
      {id: 36708, count: 1, binding: 'Account'},
      {
        id: 39223,
        count: 1,
        binding: 'Character',
        bound_to: 'Some Character'
      },
      {id: 20017, count: 3, binding: 'Account'},
      {
        id: 63604,
        slot: 'HelmAquatic',
        binding: 'Character',
        bound_to: 'Some Character',
        count: 1,
        isEquipment: true
      },
      {id: 8932, count: 1, isBag: true},
      {id: 69774, count: 5},
      {id: 79031, count: 1, binding: 'Account'},
      {
        id: 77429,
        slot: 'Backpack',
        infusions: [39619],
        skin: 2338,
        binding: 'Character',
        bound_to: 'Some other Character',
        count: 1,
        isEquipment: true
      },
      {id: 39619, count: 1, binding: 'Item'},
      {
        id: 71436,
        slot: 'Coat',
        upgrades: [71425],
        infusions: [49428],
        skin: 146,
        binding: 'Character',
        bound_to: 'Some other Character',
        count: 1,
        isEquipment: true
      },
      {id: 71425, count: 1, binding: 'Item'},
      {id: 49428, count: 1, binding: 'Item'}
    ]

    const character = [
      {id: 8932, count: 1, isBag: true},
      {id: 9586, count: 1, isBag: true},
      {id: 76453, count: 1},
      {id: 44286, count: 1, binding: 'Account'},
      {id: 28083, count: 1, upgrades: [24647]},
      {id: 24647, count: 1, binding: 'Item'},
      {id: 36708, count: 1, binding: 'Account'},
      {
        id: 39223,
        count: 1,
        binding: 'Character',
        bound_to: 'Some Character'
      },
      {id: 20017, count: 3, binding: 'Account'},
      {
        id: 63604,
        slot: 'HelmAquatic',
        binding: 'Character',
        bound_to: 'Some Character',
        count: 1,
        isEquipment: true
      }
    ]

    expect(bankItems(account, {})).to.deep.equal(bank)
    expect(sharedInventoryItems(account, {})).to.deep.equal(shared)
    expect(materialsItems(account, {})).to.deep.equal(materials)
    expect(charactersItems(account, {})).to.deep.equal(characters)
    expect(characterItems(account.characters[0], {})).to.deep.equal(character)
  })

  // Let's be honest, I just want 100% test coverage
  it('gets the items of an empty account correctly', () => {
    let account = {}
    expect(bankItems(account, {})).to.deep.equal([])
    expect(sharedInventoryItems(account, {})).to.deep.equal([])
    expect(materialsItems(account, {})).to.deep.equal([])
    expect(charactersItems(account, {})).to.deep.equal([])
    expect(characterItems({equipment: [], bags: []}, {})).to.deep.equal([])
    expect(equipmentItems({equipment: []})).to.deep.equal([])
    expect(inventoryItems({bags: []})).to.deep.equal([])
  })
})
