import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'

export function homesteadDecorationsValue (accountData, values) {
  if (!accountData.homestead || !accountData.homestead.decorations) {
    return null
  }

  const items = homesteadDecorationsItems(accountData, values.items)
  return valueItems(items, values)
}

export function homesteadDecorationsItems (accountData, itemValues = {}) {
  if (!accountData.homestead || !accountData.homestead.decorations) {
    return []
  }

  return accountData.homestead.decorations
    .map((decoration) => {
      const fakeItem = {...decoration, id: decoration.id + 2001000000000}
      return getItemIds(fakeItem, itemValues)
    }) // Get fake items representing decorations by matching the id offset
    .reduce((a, b) => a.concat(b), []) // Return a single array
}
