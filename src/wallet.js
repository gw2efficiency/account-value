export function walletValue (accountData) {
  if (!accountData.wallet) {
    return null
  }

  // Get the user's gold by the currency id
  const gold = accountData.wallet.find(x => x.id === 1).value

  return {
    value: gold,
    liquidBuy: gold,
    liquidSell: gold
  }
}
