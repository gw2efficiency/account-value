import valueItems from './helpers/valueItems'

export function materialsValue (accountData, values) {
  if (!accountData.materials) {
    return null
  }

  const items = materialsItems(accountData)
  return valueItems(items, values)
}

export function materialsItems (accountData) {
  if (!accountData.materials) {
    return []
  }

  return accountData.materials.filter(item => item.count > 0)
}
