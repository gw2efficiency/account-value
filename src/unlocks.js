import _sum from 'lodash.sumby'
import _get from 'lodash.get'

export function unlocksValue (accountData, values) {
  if (!accountData.account || !accountData.shared || !accountData.bank || !accountData.characters || !accountData.materials) {
    return null
  }

  // Just sum up the value of all unlocks
  const goldUnlocks = [
    commanderStatus(accountData)
  ]

  const gemUnlocks = [
    bankSlots(accountData, values),
    characterSlots(accountData, values),
    sharedInventorySlots(accountData, values),
    storageExpanders(accountData, values),
    craftingLicences(accountData, values)
  ]

  return {
    value: _sum(goldUnlocks) + _sum(gemUnlocks),
    valueMinusGemItems: _sum(goldUnlocks)
  }
}

function commanderStatus (accountData) {
  return accountData.account.commander ? 3000000 : 0
}

function bankSlots (accountData, values) {
  const slots = accountData.bank.length / 30
  return (slots - 1) * _get(values.items[19995], 'value', 0)
}

function characterSlots (accountData, values) {
  const slots = Math.max(5, accountData.characters.length)
  return (slots - 5) * _get(values.items[19994], 'value', 0)
}

function sharedInventorySlots (accountData, values) {
  const slots = accountData.shared.length
  return slots * _get(values.items[67071], 'value', 0)
}

function storageExpanders (accountData, values) {
  const stacks = accountData.materials.map(x => x.count)
  const maxStack = Math.max.apply(null, stacks)
  const slots = Math.max(1, Math.ceil(maxStack / 250))
  return (slots - 1) * _get(values.items[42932], 'value', 0)
}

function craftingLicences (accountData, values) {
  const activeCrafts = accountData.characters.map(x => {
    return x.crafting.filter(y => y.active).length
  })

  const licenses = Math.max(2, Math.max.apply(null, activeCrafts))
  return (licenses - 2) * _get(values.items[42970], 'value', 0)
}
