// Get all ids attached to one item
export default function getItemIds (item, items) {
  const itemUpgrades = (item.upgrades || [])
    .map(x => ({id: x, count: 1, binding: 'Item', equippedInItem: item}))

  const itemInfusions = (item.infusions || [])
    .map(x => ({id: x, count: 1, equippedInItem: item})) // Infusions are not bound because they can be easily extracted

  // Get possible infusions and upgrades
  let itemCombinedUpgrades = [...itemUpgrades, ...itemInfusions]

  // There are no upgrades, no logic necessary
  if (itemCombinedUpgrades.length === 0) {
    return [item]
  }

  // Filter upgrade so it ignores upgrades that are on items by default
  // if the item has a sell price (since these are already included in the item value)
  let defaultUpgrades = items[item.id] ? items[item.id].defaultUpgrades : false
  let sellPrice = items[item.id] && items[item.id].sell && items[item.id].sell.price
  if (sellPrice && defaultUpgrades) {
    itemCombinedUpgrades = itemCombinedUpgrades.filter(x => defaultUpgrades.indexOf(x.id) === -1)
  }

  // Return the item, upgrades and infusions
  return [].concat(item, itemCombinedUpgrades)
}
