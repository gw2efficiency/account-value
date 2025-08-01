import {bankValue, bankItems} from './bank'
import {sharedInventoryValue, sharedInventoryItems} from './shared'
import {materialsValue, materialsItems} from './materials'
import {walletValue} from './wallet'
import {charactersValue, charactersItems} from './characters'
import {skinsValue} from './skins'
import {legendaryarmoryItems, legendaryarmoryValue} from './legendaryarmory'
import {minisValue} from './minis'
import {mountsValue} from './mounts'
import {outfitsValue} from './outfits'
import {recipesValue} from './recipes'
import {finishersValue} from './finishers'
import {dyesValue} from './dyes'
import {mailcarriersValue} from './mailcarriers'
import {nodesValue} from './nodes'
import {noveltiesValue} from './novelties'
import {glidersValue} from './gliders'
import {heroesValue} from './heroes'
import {skiffsValue} from './skiffs'
import {emotesValue} from './emotes'
import {jadebotsValue} from './jadebots'
import {commerceValue, commerceItems} from './commerce'
import {unlocksValue, unlocksItems} from './unlocks'
import {homesteadDecorationsValue, homesteadDecorationsItems} from './homesteadDecorations'
import {summaryValue} from './summary'
import {homesteadGlyphsItems, homesteadGlyphsValue} from './homesteadGlyphs'
import calculateSummary from './helpers/calculateSummary'

export default function accountValue (accountData, values) {
  let account = {}
  const homesteadDecorations = homesteadDecorationsValue(accountData, values)
  const homesteadGlyphs = homesteadGlyphsValue(accountData, values)

  // Grab all the account's items (for the calculation of the skin values)
  const items = boundItemIds(accountData)

  // Calculate the different parts of the account value
  account.wallet = walletValue(accountData, values)
  account.bank = bankValue(accountData, values)
  account.shared = sharedInventoryValue(accountData, values)
  account.materials = materialsValue(accountData, values)
  account.commerce = commerceValue(accountData, values)
  account.skins = skinsValue(accountData, values, items)
  account.dyes = dyesValue(accountData, values)
  account.legendaryarmory = legendaryarmoryValue(accountData, values)
  account.minis = minisValue(accountData, values)
  account.mounts = mountsValue(accountData, values)
  account.outfits = outfitsValue(accountData, values)
  account.novelties = noveltiesValue(accountData, values)
  account.recipes = recipesValue(accountData, values)
  account.finishers = finishersValue(accountData, values)
  account.mailcarriers = mailcarriersValue(accountData, values)
  account.nodes = nodesValue(accountData, values)
  account.gliders = glidersValue(accountData, values)
  account.heroes = heroesValue(accountData, values)
  account.skiffs = skiffsValue(accountData, values)
  account.emotes = emotesValue(accountData, values)
  account.jadebots = jadebotsValue(accountData, values)
  account.characters = charactersValue(accountData, values)
  account.unlocks = unlocksValue(accountData, values)
  account.homestead = homesteadDecorations === null && homesteadGlyphs === null ? null : calculateSummary({homesteadDecorations, homesteadGlyphs})

  // Calculate the total summary
  account.summary = summaryValue(account)
  return account
}

// Get all items bound to the account
export function boundItemIds (accountData) {
  const items = [
    bankItems(accountData),
    charactersItems(accountData),
    sharedInventoryItems(accountData),
    unlocksItems(accountData),
    legendaryarmoryItems(accountData)
  ]

  return items
    .reduce((a, b) => a.concat(b), [])
    .filter(x => x.binding) // Ignore unbound items
    .filter(x => x.ignoreForValue !== true) // Ignore items that are explicitly filtered
    .map(x => x.id) // Get the item ids
    .filter((x, i, self) => self.indexOf(x) === i) // Unique items
}

// Get all the item ids that are required for this account calculation
export function allItemIds (accountData) {
  const items = [
    bankItems(accountData),
    materialsItems(accountData),
    charactersItems(accountData),
    commerceItems(accountData),
    sharedInventoryItems(accountData),
    unlocksItems(accountData),
    legendaryarmoryItems(accountData),
    homesteadDecorationsItems(accountData),
    homesteadGlyphsItems(accountData)
  ]

  return items
    .reduce((a, b) => a.concat(b), [])
    .map(x => x.id) // Get the item ids
    .filter((x, i, self) => self.indexOf(x) === i) // Unique items
}
