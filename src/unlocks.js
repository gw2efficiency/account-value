export function unlocksValue (accountData, values) {
  if (!accountData.account || !accountData.bank || !accountData.characters) {
    return null
  }

  // Just sum up the value of all unlocks
  const sum = [
    commanderUnlock(accountData)
  ].reduce((a, b) => a + b, 0)

  return {
    value: sum
  }
}

function commanderUnlock (accountData) {
  return accountData.account.commander ? 3000000 : 0
}
