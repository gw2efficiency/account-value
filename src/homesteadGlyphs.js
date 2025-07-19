import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'
import GAME_DATA_HOME_GLYPHS from '@gw2efficiency/game-data/home/glyphs'

export function homesteadGlyphsValue (accountData, values) {
  if (!accountData.homestead || !accountData.homestead.glyphs || accountData.homestead.glyphs.length === 0) {
    return null
  }

  const items = homesteadGlyphsItems(accountData, values.items)
  return valueItems(items, values)
}

export function homesteadGlyphsItems (accountData, itemValues = {}) {
  if (!accountData.homestead || !accountData.homestead.glyphs || accountData.homestead.glyphs.length === 0) {
    return []
  }

  return accountData.homestead.glyphs
    .map((id) => {
      const glyph = GAME_DATA_HOME_GLYPHS.find((g) => g.id === id)
      if (!glyph) return null

      const itemId = glyph.unusedItemId || glyph.item_id
      return getItemIds({id: itemId, binding: 'Account', count: 1}, itemValues)
    })
    .filter(Boolean)
    .reduce((a, b) => a.concat(b), [])
}
