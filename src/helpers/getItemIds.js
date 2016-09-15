// Get all ids attached to one item
export default function getItemIds (item) {
  // Get possible infusions and upgrades
  const itemUpgrades = [...(item.upgrades || []), ...(item.infusions || [])]
    .map(x => ({id: x, count: 1, binding: 'Item'}))

  // Return the item, upgrades and infusions
  return [].concat(item, itemUpgrades)
}
