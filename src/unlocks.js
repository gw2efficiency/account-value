import _sum from 'lodash.sumby'

export function unlocksValue (accountData, values) {
  if (!accountData.account || !accountData.bank || !accountData.characters) {
    return null
  }

  // Just sum up the value of all unlocks
  const unlocks = [
    commanderUnlock(accountData)
  ]

  return {
    value: _sum(unlocks)
  }
}

function commanderUnlock (accountData) {
  return accountData.account.commander ? 3000000 : 0
}
