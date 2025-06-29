/* eslint-env node, mocha */
import {expect} from 'chai'
import accountValue, {allItemIds, boundItemIds} from '../src/index'
import {bankItems, bankValue} from '../src/bank'
import {sharedInventoryItems, sharedInventoryValue} from '../src/shared'
import {materialsItems, materialsValue} from '../src/materials'
import {skinsValue} from '../src/skins'
import {walletValue} from '../src/wallet'
import {dyesValue} from '../src/dyes'
import {legendaryarmoryValue} from '../src/legendaryarmory'
import {minisValue} from '../src/minis'
import {mountsValue} from '../src/mounts'
import {outfitsValue} from '../src/outfits'
import {noveltiesValue} from '../src/novelties'
import {recipesValue} from '../src/recipes'
import {finishersValue} from '../src/finishers'
import {mailcarriersValue} from '../src/mailcarriers'
import {nodesValue} from '../src/nodes'
import {heroesValue} from '../src/heroes'
import {glidersValue} from '../src/gliders'
import {commerceItems, commerceValue} from '../src/commerce'
import {unlocksItems, unlocksValue} from '../src/unlocks'
import {
  characterItems,
  charactersItems,
  charactersValue,
  equipmentItems,
  inventoryItems
} from '../src/characters'
import {homesteadDecorationsValue} from '../src/homesteadDecorations'
import accountData from './data/account'
import bankData from './data/bank'
import sharedData from './data/shared'
import materialsData from './data/materials'
import skinsData from './data/skins'
import walletData from './data/wallet'
import dyesData from './data/dyes'
import legendaryarmoryData from './data/legendaryarmory'
import minisData from './data/minis'
import skiffsData from './data/skiffs'
import emotesData from './data/emotes'
import jadebotsData from './data/jadebots'
import mountsData from './data/mounts'
import outfitsData from './data/outfits'
import noveltiesData from './data/novelties'
import recipesData from './data/recipes'
import finishersData from './data/finishers'
import mailcarriersData from './data/mailcarriers'
import nodesData from './data/nodes'
import glidersData from './data/gliders'
import heroesData from './data/heroes'
import commerceData from './data/commerce'
import charactersData from './data/characters'
import homesteadData from './data/homestead'
import values from './data/_values'

const account = {
  account: accountData,
  bank: bankData,
  shared: sharedData,
  materials: materialsData,
  skins: skinsData,
  wallet: walletData,
  dyes: dyesData,
  legendaryarmory: legendaryarmoryData,
  minis: minisData,
  mounts: {
    skins: mountsData
  },
  outfits: outfitsData,
  novelties: noveltiesData,
  recipes: recipesData,
  finishers: finishersData,
  mailcarriers: mailcarriersData,
  gliders: glidersData,
  skiffs: skiffsData,
  emotes: emotesData,
  jadebots: jadebotsData,
  home: {
    nodes: nodesData
  },
  pvp: {
    heroes: heroesData
  },
  commerce: commerceData,
  characters: charactersData,
  homestead: homesteadData
}

const expectedValues = {
  summary: {
    liquidBuy: 13218,
    liquidSell: 15394,
    value: 3057048 + 1028 * 3,
    valueMinusGemItems: 3031489 + 28 * 3,
    spentGems: 2405 + 50 * 3
  },
  bank: {
    liquidBuy: 12,
    liquidSell: 19,
    value: 3274,
    valueMinusGemItems: 274,
    spentGems: 150
  },
  shared: {
    liquidBuy: 12,
    liquidSell: 19,
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
    value: 2840,
    fullValue: 4040,
    valueMinusGemItems: 1840,
    fullValueMinusGemItems: 3040,
    spentGems: 50
  },
  wallet: {
    liquidBuy: 1126,
    liquidSell: 1126,
    value: 1126,
    valueMinusGemItems: 1000
  },
  dyes: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  legendaryarmory: {
    value: 200,
    valueMinusGemItems: 200,
    spentGems: 0,
    liquidBuy: 0,
    liquidSell: 0
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
  novelties: {
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
  skiffs: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  emotes: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  jadebots: {
    value: 1028,
    valueMinusGemItems: 28,
    spentGems: 50
  },
  homesteadDecorations: {
    liquidBuy: 0,
    liquidSell: 0,
    spentGems: 0,
    value: 8170,
    valueMinusGemItems: 8170
  },
  unlocks: {
    value: 3005433,
    valueMinusGemItems: 3000000,
    spentGems: 1300
  },
  commerce: {
    liquidBuy: 7654,
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
        liquidBuy: 360,
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
    liquidBuy: 989 + 3400,
    liquidSell: 1584 + 4250,
    value: 13069,
    valueMinusGemItems: 10069,
    spentGems: 255,
    details: [
      {
        name: 'Some Character',
        liquidBuy: 158,
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
          liquidBuy: 158,
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
        liquidBuy: 831 + 3400,
        liquidSell: 1341 + 4250,
        value: 8424,
        valueMinusGemItems: 8424,
        spentGems: 0,
        equipment: {
          liquidBuy: 3400,
          liquidSell: 4250,
          value: 5010,
          valueMinusGemItems: 5010,
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

  it('calculates the account value correctly with no commerce data', () => {
    const result = accountValue({
      ...account,
      commerce: { buys: null, sells: null, delivery: null }
    }, values)

    expect(result.summary.value).to.deep.equal(expectedValues.summary.value - expectedValues.commerce.value)
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
      legendaryarmory: null,
      minis: null,
      mounts: null,
      outfits: null,
      novelties: null,
      recipes: null,
      finishers: null,
      mailcarriers: null,
      nodes: null,
      gliders: null,
      heroes: null,
      skiffs: null,
      emotes: null,
      jadebots: null,
      skins: null,
      wallet: null,
      homesteadDecorations: null,
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
      80578,
      24836,
      69774,
      79031,
      77429,
      39619,
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
      19993,
      92209,
      92203,
      92206,
      30699,
      81957,
      2001000000035
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
      44286,
      24647,
      39223,
      20017,
      63604,
      79031,
      77429,
      67335,
      19995,
      67071,
      42932,
      42970,
      19993,
      92209,
      92203,
      92206,
      30699,
      81957
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
      .to.deep.equal({value: 2, valueMinusGemItems: 2, liquidBuy: 2, liquidSell: 2})
    expect(walletValue({wallet: [{id: 4, value: 2}]}, values))
      .to.deep.equal({value: 84, valueMinusGemItems: 0, liquidBuy: 84, liquidSell: 84})
    expect(walletValue({wallet: [{id: 5, value: 123}]}, values))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, liquidBuy: 0, liquidSell: 0})
  })

  it('calculates the dyes value correctly', () => {
    expect(dyesValue(account, values)).to.deep.equal(expectedValues.dyes)
    expect(dyesValue({dyes: [1, 2]}, {dyes: {2: {value: false, gemstore: false}}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0})
  })

  it('calculates the legendaryarmory value correctly', () => {
    expect(legendaryarmoryValue(account, values)).to.deep.equal(expectedValues.legendaryarmory)
    expect(legendaryarmoryValue({legendaryarmory: [{ id: 1, count: 1 }]}, {items: {}}))
      .to.deep.equal({value: 0, valueMinusGemItems: 0, spentGems: 0, liquidBuy: 0, liquidSell: 0})
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

  it('calculates the novelties value correctly', () => {
    expect(noveltiesValue(account, values)).to.deep.equal(expectedValues.novelties)
    expect(noveltiesValue({novelties: [1, 2]}, {novelties: {2: {value: false, gemstore: false}}}))
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
      {id: 19993, count: 1, binding: 'AccountUnlock'},
      {id: 92209, count: 1, binding: 'AccountUnlock'},
      {id: 92203, count: 1, binding: 'AccountUnlock'},
      {id: 92206, count: 1, binding: 'AccountUnlock'}
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
      {
        id: 71425,
        count: 1,
        binding: 'Item',
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      },
      {
        id: 49432,
        count: 1,
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      },
      {
        id: 49432,
        count: 1,
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      }
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
      {
        id: 71425,
        count: 1,
        binding: 'Item',
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      },
      {
        id: 49432,
        count: 1,
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      },
      {
        id: 49432,
        count: 1,
        equippedInItem: {
          id: 74264,
          count: 1,
          upgrades: [71425],
          infusions: [49432, 49432],
          skin: 234,
          binding: 'Character',
          bound_to: 'Some Character'
        }
      }
    ]

    const materials = [
      {id: 12134, category: 5, count: 1},
      {id: 12238, category: 5, count: 2},
      {id: 56789, category: 5, count: 501}
    ]

    const characters = [
      {id: 8932, count: 1, isBag: true},
      {id: 9586, count: 1, isBag: true},
      {id: 76453, count: 1, ignoreForValue: false},
      {id: 44286, count: 1, binding: 'Account', ignoreForValue: false},
      {id: 28083, count: 1, upgrades: [24647], ignoreForValue: false},
      {
        id: 24647,
        count: 1,
        binding: 'Item',
        equippedInItem: {id: 28083, count: 1, upgrades: [24647]},
        ignoreForValue: false
      },
      {id: 36708, count: 1, binding: 'Account', ignoreForValue: false},
      {
        id: 39223,
        count: 1,
        binding: 'Character',
        bound_to: 'Some Character',
        ignoreForValue: false
      },
      {id: 20017, count: 3, binding: 'Account', ignoreForValue: false},
      {
        id: 63604,
        slot: 'HelmAquatic',
        binding: 'Character',
        bound_to: 'Some Character',
        count: 1,
        location: 'Equipped',
        isEquipment: true,
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {
        id: 80578,
        slot: 'Coat',
        upgrades: [],
        infusions: [],
        location: 'LegendaryArmory',
        skin: 146,
        binding: 'Character',
        bound_to: 'Some Character',
        count: 1,
        isEquipment: true,
        ignoreForValue: true,
        ignoreForStatistics: true
      },
      {
        id: 24836,
        location: 'Armory',
        count: 6,
        tabs: [2],
        isEquipment: true,
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {id: 8932, count: 1, isBag: true},
      {id: 69774, count: 5, ignoreForValue: false},
      {id: 79031, count: 1, binding: 'Account', ignoreForValue: false},
      {
        id: 77429,
        slot: 'Backpack',
        infusions: [39619],
        skin: 2338,
        binding: 'Character',
        bound_to: 'Some other Character',
        count: 1,
        isEquipment: true,
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {
        id: 39619,
        count: 1,
        equippedInItem: {
          id: 77429,
          slot: 'Backpack',
          infusions: [39619],
          skin: 2338,
          binding: 'Character',
          bound_to: 'Some other Character',
          count: 1,
          isEquipment: true
        },
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {
        id: 80578,
        slot: 'Coat',
        upgrades: [71425],
        infusions: [49428],
        skin: 146,
        binding: 'Character',
        bound_to: 'Some other Character',
        count: 1,
        isEquipment: true,
        ignoreForValue: true,
        ignoreForStatistics: true
      },
      {
        id: 71425,
        count: 1,
        binding: 'Item',
        equippedInItem: {
          id: 80578,
          slot: 'Coat',
          upgrades: [71425],
          infusions: [49428],
          skin: 146,
          binding: 'Character',
          bound_to: 'Some other Character',
          count: 1,
          isEquipment: true
        },
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {
        id: 49428,
        count: 1,
        equippedInItem: {
          id: 80578,
          slot: 'Coat',
          upgrades: [71425],
          infusions: [49428],
          skin: 146,
          binding: 'Character',
          bound_to: 'Some other Character',
          count: 1,
          isEquipment: true
        },
        ignoreForValue: false,
        ignoreForStatistics: false
      }
    ]

    const character = [
      {id: 8932, count: 1, isBag: true},
      {id: 9586, count: 1, isBag: true},
      {id: 76453, count: 1, ignoreForValue: false},
      {id: 44286, count: 1, binding: 'Account', ignoreForValue: false},
      {id: 28083, count: 1, upgrades: [24647], ignoreForValue: false},
      {
        id: 24647,
        count: 1,
        binding: 'Item',
        equippedInItem: {id: 28083, count: 1, upgrades: [24647]},
        ignoreForValue: false
      },
      {id: 36708, count: 1, binding: 'Account', ignoreForValue: false},
      {
        id: 39223,
        count: 1,
        binding: 'Character',
        bound_to: 'Some Character',
        ignoreForValue: false
      },
      {id: 20017, count: 3, binding: 'Account', ignoreForValue: false},
      {
        id: 63604,
        slot: 'HelmAquatic',
        binding: 'Character',
        bound_to: 'Some Character',
        location: 'Equipped',
        count: 1,
        isEquipment: true,
        ignoreForValue: false,
        ignoreForStatistics: false
      },
      {
        id: 80578,
        slot: 'Coat',
        upgrades: [],
        infusions: [],
        location: 'LegendaryArmory',
        skin: 146,
        binding: 'Character',
        bound_to: 'Some Character',
        count: 1,
        isEquipment: true,
        ignoreForValue: true,
        ignoreForStatistics: true
      },
      {
        id: 24836,
        location: 'Armory',
        count: 6,
        tabs: [2],
        isEquipment: true,
        ignoreForValue: false,
        ignoreForStatistics: false
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

  it('can value valueIsVendor items as liquid value correctly.', () => {
    let account = {
      bank: [{
        id: 82111,
        count: 1,
        binding: 'Account'
      },
      {
        id: 24343,
        count: 1

      }]
    }
    let values = {
      items: {
        82111: {value: 100, valueIsVendor: true},
        24343: {value: 300, sell: {price: 300}, buy: {price: 200}}
      }
    }
    expect(accountValue(account, values)).to.deep.include({
      bank: {
        liquidBuy: 270,
        liquidSell: 355,
        value: 400,
        spentGems: 0,
        valueMinusGemItems: 400
      }
    })
  })

  it('calculates the homestead decorations value correctly', () => {
    expect(homesteadDecorationsValue(account, values)).to.deep.equal(expectedValues.homesteadDecorations)
    expect(homesteadDecorationsValue({homestead: {decorations: [{id: 1, count: 2}, {id: 3, count: 4}]}}, {items: {2001000000002: {value: false, gemstore: false}}}))
      .to.deep.equal({liquidBuy: 0, liquidSell: 0, value: 0, valueMinusGemItems: 0, spentGems: 0})
  })
})
