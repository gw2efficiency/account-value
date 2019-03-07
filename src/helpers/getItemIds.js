// Get all ids attached to one item
export default function getItemIds (item, items) {
  // Get possible infusions and upgrades
  let itemUpgrades = [...(item.upgrades || []), ...(item.infusions || [])]
    .map(x => ({id: x, count: 1, binding: 'Item', equippedInItem: item}))

  // There are no upgrades, no logic necessary
  if (itemUpgrades.length === 0) {
    return [item]
  }

  // Filter upgrade so it ignores upgrades that are on items by default
  // if the item has a sell price (since these are already included in the item value)
  let defaultUpgrades = items[item.id] ? items[item.id].defaultUpgrades : false
  let sellPrice = items[item.id] && items[item.id].sell && items[item.id].sell.price
  if (sellPrice && defaultUpgrades) {
    itemUpgrades = itemUpgrades.filter(x => defaultUpgrades.indexOf(x.id) === -1)
  }

  // Return the item, upgrades and infusions
  return [].concat(item, itemUpgrades)
}
