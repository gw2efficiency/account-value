import valueItems from './helpers/valueItems'

export function unlocksValue (accountData, values) {
  if (!accountData.account || !accountData.shared || !accountData.bank || !accountData.characters || !accountData.materials) {
    return null
  }

  const unlockItems = unlocksItems(accountData)

  let summary = valueItems(unlockItems, values)
  delete summary['liquidBuy']
  delete summary['liquidSell']

  return summary
}

export function unlocksItems (accountData) {
  const items = [
    commanderStatus(accountData),
    bankSlots(accountData),
    characterSlots(accountData),
    sharedInventorySlots(accountData),
    storageExpanders(accountData),
    craftingLicences(accountData),
    characterBagSlots(accountData),
    buildTemplates(accountData),
    equipmentTemplates(accountData),
    buildStorage(accountData)
  ]

  return items.reduce((arr, elem) => arr.concat(elem), [])
    .filter(x => x.count > 0)
    .map(x => ({...x, binding: 'AccountUnlock'}))
}

function commanderStatus (accountData) {
  if (!accountData.account) {
    return []
  }

  return accountData.account.commander ? [{id: 67335, count: 1}] : []
}

function bankSlots (accountData) {
  if (!accountData.bank) {
    return []
  }

  const count = (accountData.bank.length / 30) - 1
  return [{id: 19995, count: count}]
}

function characterSlots (accountData) {
  if (!accountData.characters) {
    return []
  }

  const count = Math.max(5, accountData.characters.length) - 5
  return [{id: 19994, count: count}]
}

function sharedInventorySlots (accountData) {
  if (!accountData.shared) {
    return []
  }

  const count = accountData.shared.length
  return [{id: 67071, count: count}]
}

function storageExpanders (accountData) {
  if (!accountData.materials) {
    return []
  }

  const stacks = accountData.materials.map(x => x.count)
  const maxStack = Math.max.apply(null, stacks)
  const slots = Math.max(1, Math.ceil(maxStack / 250)) - 1

  return [{id: 42932, count: slots}]
}

function craftingLicences (accountData) {
  if (!accountData.characters) {
    return []
  }

  const activeCrafts = accountData.characters.map(x => {
    return x.crafting.filter(y => y.active).length
  })
  const licenses = Math.max(2, Math.max.apply(null, activeCrafts)) - 2

  return [{id: 42970, count: licenses}]
}

function characterBagSlots (accountData) {
  if (!accountData.characters) {
    return []
  }

  let sum = 0

  accountData.characters.map(character => {
    if (!character.bags) {
      return
    }

    sum += Math.max(character.bags.length - 5, 0)
  })

  return [{id: 19993, count: sum}]
}

function buildTemplates (accountData) {
  if (!accountData.characters) {
    return []
  }

  let sum = 0

  // A character has 3 tabs available by default and can be expanded up to 6 by purchasing
  // a Build Template Expansion (one item for one tab). These templates are character specific.
  accountData.characters.map(character => {
    if (!character.build_tabs_unlocked) {
      return
    }

    sum += Math.max(character.build_tabs_unlocked - 3, 0)
  })

  return [{id: 92209, count: sum}]
}

function equipmentTemplates (accountData) {
  if (!accountData.characters) {
    return []
  }

  let sum = 0

  // A character has 2 tabs available by default and can be expanded up to 6 by purchasing
  // a Equipment Template Expansion (one item for one tab). These templates are character specific.
  accountData.characters.map(character => {
    if (!character.equipment_tabs_unlocked) {
      return
    }

    sum += Math.max(character.equipment_tabs_unlocked - 2, 0)
  })

  return [{id: 92203, count: sum}]
}

function buildStorage (accountData) {
  if (!accountData.account) {
    return []
  }

  // An account has 3 tabs available by default and can be expanded up to 24 by purchasing
  // a Build Storage Expansion (one item for 3 tabs).
  const sum = accountData.account.build_storage_slots - 3

  return [{id: 92206, count: Math.floor(sum / 3)}]
}
