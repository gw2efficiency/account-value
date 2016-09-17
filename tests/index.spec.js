/* eslint-env node, mocha */
const expect = require('chai').expect
import accountValue, {allItemIds, boundItemIds} from '../src/index'
import {bankValue, bankItems} from '../src/bank'
import {sharedInventoryValue, sharedInventoryItems} from '../src/shared'
import {materialsValue, materialsItems} from '../src/materials'
import {skinsValue} from '../src/skins'
import {walletValue} from '../src/wallet'
import {dyesValue} from '../src/dyes'
import {minisValue} from '../src/minis'
import {commerceValue} from '../src/commerce'
import {unlocksValue} from '../src/unlocks'
import {
  charactersValue,
  charactersItems,
  characterItems,
  equipmentItems,
  inventoryItems,
  unlockItems
} from '../src/characters'
import accountData from './data/account'
import bankData from './data/bank'
import sharedData from './data/shared'
import materialsData from './data/materials'
import skinsData from './data/skins'
import walletData from './data/wallet'
import dyesData from './data/dyes'
import minisData from './data/minis'
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
  commerce: commerceData,
  characters: charactersData
}

const expectedValues = {
  summary: {
    liquidBuy: 9194,
    liquidSell: 10207,
    value: 3037167,
    valueMinusGemItems: 3019734
  },
  bank: {
    liquidBuy: 10,
    liquidSell: 15,
    value: 3274,
    valueMinusGemItems: 274
  },
  shared: {
    liquidBuy: 10,
    liquidSell: 15,
    value: 3274,
    valueMinusGemItems: 274
  },
  materials: {
    liquidBuy: 25,
    liquidSell: 42,
    value: 100,
    valueMinusGemItems: 100
  },
  skins: {
    value: 1840,
    fullValue: 3040,
    valueMinusGemItems: 840,
    fullValueMinusGemItems: 2040
  },
  wallet: {
    liquidBuy: 1000,
    liquidSell: 1000,
    value: 1000
  },
  dyes: {
    value: 1028,
    valueMinusGemItems: 28
  },
  minis: {
    value: 1028,
    valueMinusGemItems: 28
  },
  unlocks: {
    value: 3004433,
    valueMinusGemItems: 3000000
  },
  commerce: {
    liquidBuy: 7171,
    liquidSell: 7551,
    value: 7931,
    valueMinusGemItems: 7931,
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
      }
    }
  },
  characters: {
    liquidBuy: 978,
    liquidSell: 1584,
    value: 13259,
    valueMinusGemItems: 9259,
    details: [
      {
        name: 'Some Character',
        liquidBuy: 147,
        liquidSell: 243,
        value: 5625,
        valueMinusGemItems: 1625,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 414,
          valueMinusGemItems: 414
        },
        inventory: {
          liquidBuy: 147,
          liquidSell: 243,
          value: 4211,
          valueMinusGemItems: 1211
        },
        unlocks: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 1000,
          valueMinusGemItems: 0
        }
      },
      {
        name: 'Some other Character',
        liquidBuy: 831,
        liquidSell: 1341,
        value: 7634,
        valueMinusGemItems: 7634,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 5320,
          valueMinusGemItems: 5320
        },
        inventory: {
          liquidBuy: 831,
          liquidSell: 1341,
          value: 2314,
          valueMinusGemItems: 2314
        },
        unlocks: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0
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
      skins: null,
      wallet: null,
      unlocks: null
    }

    expect(accountValue({}, values)).to.deep.equal(result)
    expect(accountValue({commerce: {buys: null, sells: null}}, values))
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
      63604,
      19993,
      69774,
      79031,
      77429,
      39619,
      71436,
      49428,
      77230,
      77239,
      78778,
      78757
    ])

    expect(allItemIds({})).to.deep.equal([])
    expect(allItemIds({commerce: {buys: null, sells: null}})).to.deep.equal([])
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
      63604,
      19993,
      79031,
      77429,
      39619,
      71436,
      49428
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
  })

  it('calculates the wallet value correctly', () => {
    expect(walletValue(account, values)).to.deep.equal(expectedValues.wallet)
    expect(walletValue({wallet: [{id: 5, value: 123}]}, values))
      .to.deep.equal({value: 0, liquidBuy: 0, liquidSell: 0})
  })

  it('calculates the dyes value correctly', () => {
    expect(dyesValue(account, values)).to.deep.equal(expectedValues.dyes)
  })

  it('calculates the minis value correctly', () => {
    expect(minisValue(account, values)).to.deep.equal(expectedValues.minis)
  })

  it('calculates the commerce value correctly', () => {
    expect(commerceValue(account, values)).to.deep.equal(expectedValues.commerce)
  })

  it('calculates the unlocks value correctly', () => {
    expect(unlocksValue(account, values)).to.deep.equal(expectedValues.unlocks)

    const data = {
      account: {commander: false},
      bank: [
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null
      ],
      characters: [
        {crafting: []}, {crafting: []}, {crafting: []}, {crafting: []}, {crafting: []},
        {crafting: []}, {crafting: []}, {crafting: []}, {crafting: []}, {crafting: []}
      ],
      shared: [],
      materials: []
    }
    expect(unlocksValue(data, values)).to.deep.equal({value: 5000, valueMinusGemItems: 0})
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
        equipment: []
      }]
    }
    const expected = {
      value: 0,
      valueMinusGemItems: 0,
      liquidBuy: 0,
      liquidSell: 0,
      details: [{
        liquidBuy: 0,
        liquidSell: 0,
        name: 'Some Character without anything',
        value: 0,
        valueMinusGemItems: 0,
        equipment: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0
        },
        inventory: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0
        },
        unlocks: {
          liquidBuy: 0,
          liquidSell: 0,
          value: 0,
          valueMinusGemItems: 0
        }
      }]
    }

    expect(charactersValue(input, values)).to.deep.equal(expected)
  })

  // Let's be honest, I just want 100% test coverage
  it('gets the items of an account correctly', () => {
    let account = {}
    expect(bankItems(account, {})).to.deep.equal([])
    expect(sharedInventoryItems(account, {})).to.deep.equal([])
    expect(materialsItems(account, {})).to.deep.equal([])
    expect(charactersItems(account, {})).to.deep.equal([])
    expect(characterItems({equipment: [], bags: []}, {})).to.deep.equal([])
    expect(equipmentItems({equipment: []})).to.deep.equal([])
    expect(inventoryItems({bags: []})).to.deep.equal([])
    expect(unlockItems({bags: []})).to.deep.equal([])
  })
})
