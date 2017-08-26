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
  return [].concat(
    commanderStatus(accountData),
    bankSlots(accountData),
    characterSlots(accountData),
    sharedInventorySlots(accountData),
    storageExpanders(accountData),
    craftingLicences(accountData),
    characterBagSlots(accountData)
  ).filter(x => x.count > 0)
}

function commanderStatus (accountData) {
  return accountData.account.commander ? [{id: 67335, count: 1}] : []
}

function bankSlots (accountData) {
  const count = (accountData.bank.length / 30) - 1
  return [{id: 19995, count: count}]
}

function characterSlots (accountData) {
  const count = Math.max(5, accountData.characters.length) - 5
  return [{id: 19994, count: count}]
}

function sharedInventorySlots (accountData) {
  const count = accountData.shared.length
  return [{id: 67071, count: count}]
}

function storageExpanders (accountData) {
  const stacks = accountData.materials.map(x => x.count)
  const maxStack = Math.max.apply(null, stacks)
  const slots = Math.max(1, Math.ceil(maxStack / 250)) - 1

  return [{id: 42932, count: slots}]
}

function craftingLicences (accountData) {
  const activeCrafts = accountData.characters.map(x => {
    return x.crafting.filter(y => y.active).length
  })
  const licenses = Math.max(2, Math.max.apply(null, activeCrafts)) - 2

  return [{id: 42970, count: licenses}]
}

function characterBagSlots (accountData) {
  let sum = 0

  accountData.characters.map(character => {
    sum += Math.max(character.bags.length - 5, 0)
  })

  return [{id: 19993, count: sum}]
}
