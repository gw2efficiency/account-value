# account-value

[![Build Status](https://img.shields.io/travis/gw2efficiency/account-value.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/account-value)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/account-value/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/account-value)

> Calculate the value of guildwars2 accounts

*This is part of [gw2efficiency](https://gw2efficiency.com). Please report all issues in [the central repository](https://github.com/gw2efficiency/issues/issues).*

## Install

```
npm install gw2e-account-value
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

## Usage

For better understanding of how and why this does things, please read the [design document for the account value](https://github.com/gw2efficiency/issues/blob/master/docs/account-value.md).

### Calculate the account value

```js
import accountValue from 'gw2e-account-value'

// An object containing all the account data available for the API key
const accountData = {
  account: /* ... */,
  bank: /* ... */,
  shared: /* ... */,
  materials: /* ... */,
  skins: /* ... */,
  wallet: /* ... */,
  dyes: /* ... */,
  minis: /* ... */,
  outfits: /* ... */,
  recipes: /* ... */,
  finishers: /* ... */,
  commerce: {
    buys: /* ... */,
    sells: /* ... */
  },
  characters: /* ... */,

  // These are not used yet, but might be in the future
  guilds: /* ... */,
  titles: /* ... */,
  achievements: /* ... */
}

// The values for everything needed to calculate things
const values = {
  items: {
    123: {value: 3, sell: {price: 2}, buy: {price: 1}},
    456: {value: 10, defaultUpgrades: [39619]},
    789: {value: 3000, price: {gems: 150}}
  },

  skins: {
    1: {value: 1200, unlocks: [123, 56, 76], gemstore: false},
    2: {value: 420, unlocks: [1337], gemstore: 50}
  },

  dyes: {
    1: {value: 3, gemstore: false},
    2: {value: 420, gemstore: 50}
  },

  minis: {
    1: {value: 3, gemstore: false},
    2: {value: 420, gemstore: 50}
  },

  outfits: {
    1: {value: 3, gemstore: false},
    2: {value: 420, gemstore: 50}
  },

  recipes: {
    1: {value: 3},
    2: {value: 420}
  },

  finishers: {
    1: {value: 3, gemstore: false},
    2: {value: 420, gemstore: 50}
  },

  craftingProfessions: {
    weaponsmith: {
      75: 10,
      150: 20,
      225: 30,
      300: 40,
      400: 50,
      500: 100
    },
    // ...
  }
}

// Calculate everything!
accountValue(accountData, values)
// -> Object with all values calculated
```

### Calculate a part of the account value

You can import the partial calculations on their own and work with them.

```js
import {bankValue, bankItems} from 'gw2e-account-value/build/bank'

bankValue(accountData, values)
bankItems(accountData)
```

### Helper: Get needed item ids

This helper function returns a list of ids for items, which are needed for the calculation:

```js
import {allItemIds} from 'gw2e-account-value'

allItemIds(accountData)
// -> [1, 2, 3]
```

## Tests

```
npm test
```

## Licence

MIT
