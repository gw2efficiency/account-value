export function walletValue (accountData, values) {
  if (!accountData.wallet) {
    return null
  }

  const gold = byId(accountData.wallet, 1)
  const gems = byId(accountData.wallet, 4) * values.wallet.gems

  return {
    value: gold + gems,
    liquidBuy: gold + gems,
    liquidSell: gold + gems
  }
}

function byId (wallet, id) {
  const currency = wallet.find(x => x.id === id)
  return currency ? currency.value : 0
}
