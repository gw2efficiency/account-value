import skinInheritance from './static/skinInheritance'

export function skinsValue (accountData, values, ownedItems) {
  if (!accountData.skins) {
    return null
  }

  // Get the skins we have values for and remove skins that unlock each other
  // (e.g. for Sunrise -> Dawn -> ... only keep Sunrise and discard the others)
  const skins = accountData.skins
    .filter(skin => !!values.skins[skin])
    .filter(s => {
      const inheritance = skinInheritance[s]
      return !inheritance || accountData.skins.indexOf(inheritance) === -1
    })

  // Filter out the skins that are unlocked but NOT in the users inventory
  const valuedSkins = skins.filter(skin => {
    const skinUnlocks = values.skins[skin].unlocks
    return skinUnlocks.filter(i => ownedItems.indexOf(i) !== -1).length === 0
  })

  return {
    value: valuedSkins.map(x => values.skins[x].value).reduce((a, b) => a + b, 0),
    fullValue: skins.map(x => values.skins[x].value).reduce((a, b) => a + b, 0)
  }
}
