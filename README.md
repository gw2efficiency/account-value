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
  characters: /* ... */,
  bank: /* ... */,
  materials: /* ... */,
  commerce: {
    buys: /* ... */,
    sells: /* ... */
  },
  skins: /* ... */,
  wallet: /* ... */,
  dyes: /* ... */,
  minis: /* ... */,

  outfits: /* ... */,
  recipes: /* ... */,
  guilds: /* ... */,
  inventory: /* ... */,

  titles: /* ... */,
  achievements: /* ... */
}

// The values for everything needed to calculate things
const values = {
  // Items have a value (& prices) given to them in the backend
  items: {
    123: {value: 3, sell: {price: 2}, buy: {price: 1}}
  },
  // Skin prices are pre-calculated based on some rules
  skins: {
    1: {value: 1200, unlocks: [123, 56, 76]},
    2: {value: 420, unlocks: [1337]}
  },
  // Dyes and miniatures just unlock, so we just need to know their value
  dyes: {1: 3, 2: 6, 3: 19},
  minis: {1: 3, 2: 6, 3: 19}
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
