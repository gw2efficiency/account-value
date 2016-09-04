export function walletValue (accountData) {
  if (!accountData.wallet) {
    return null
  }

  // Get the user's gold by the currency id
  const goldField = accountData.wallet.find(x => x.id === 1)
  const gold = goldField ? goldField.value : 0

  return {
    value: gold,
    liquidBuy: gold,
    liquidSell: gold
  }
}
