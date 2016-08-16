// Get all ids attached to one item (the item itself, the upgrades and infusions)
export default function getItemIds (item) {
  // Get possible infusions and upgrades
  const upgrades = (item.upgrades || []).map(x => ({id: x, count: 1, binding: 'Item'}))
  const infusions = (item.infusions || []).map(x => ({id: x, count: 1, binding: 'Item'}))

  // Return the item, upgrades and infusions
  return [].concat(item, upgrades, infusions)
}
