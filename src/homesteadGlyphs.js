import getItemIds from './helpers/getItemIds'
import valueItems from './helpers/valueItems'

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
      const originalId = glyphsMap[id]
      if (!originalId) return null

      // Use the unused ID if available
      const itemId = glyphsUnusedIds[originalId] || originalId

      return getItemIds({id: itemId, binding: 'Account', count: 1}, itemValues)
    })
    .filter(Boolean)
    .reduce((a, b) => a.concat(b), [])
}

const glyphsMap = Object.fromEntries([
  {
    id: 'alchemy_harvesting',
    item_id: 90805,
    slot: 'harvesting'
  },
  {
    id: 'alchemy_logging',
    item_id: 90805,
    slot: 'logging'
  },
  {
    id: 'alchemy_mining',
    item_id: 90805,
    slot: 'mining'
  },
  {
    id: 'crucible_harvesting',
    item_id: 90488,
    slot: 'harvesting'
  },
  {
    id: 'crucible_logging',
    item_id: 90488,
    slot: 'logging'
  },
  {
    id: 'crucible_mining',
    item_id: 90488,
    slot: 'mining'
  },
  {
    id: 'forester_harvesting',
    item_id: 87550,
    slot: 'harvesting'
  },
  {
    id: 'forester_logging',
    item_id: 87550,
    slot: 'logging'
  },
  {
    id: 'forester_mining',
    item_id: 87550,
    slot: 'mining'
  },
  {
    id: 'herbalist_harvesting',
    item_id: 88241,
    slot: 'harvesting'
  },
  {
    id: 'herbalist_logging',
    item_id: 88241,
    slot: 'logging'
  },
  {
    id: 'herbalist_mining',
    item_id: 88241,
    slot: 'mining'
  },
  {
    id: 'leatherworker_harvesting',
    item_id: 87473,
    slot: 'harvesting'
  },
  {
    id: 'leatherworker_logging',
    item_id: 87473,
    slot: 'logging'
  },
  {
    id: 'leatherworker_mining',
    item_id: 87473,
    slot: 'mining'
  },
  {
    id: 'prospector_harvesting',
    item_id: 87534,
    slot: 'harvesting'
  },
  {
    id: 'prospector_logging',
    item_id: 87534,
    slot: 'logging'
  },
  {
    id: 'prospector_mining',
    item_id: 87534,
    slot: 'mining'
  },
  {
    id: 'scavenger_harvesting',
    item_id: 87442,
    slot: 'harvesting'
  },
  {
    id: 'scavenger_logging',
    item_id: 87442,
    slot: 'logging'
  },
  {
    id: 'scavenger_mining',
    item_id: 87442,
    slot: 'mining'
  },
  {
    id: 'tailor_harvesting',
    item_id: 87407,
    slot: 'harvesting'
  },
  {
    id: 'tailor_logging',
    item_id: 87407,
    slot: 'logging'
  },
  {
    id: 'tailor_mining',
    item_id: 87407,
    slot: 'mining'
  },
  {
    id: 'unbound_harvesting',
    item_id: 87428,
    slot: 'harvesting'
  },
  {
    id: 'unbound_logging',
    item_id: 87428,
    slot: 'logging'
  },
  {
    id: 'unbound_mining',
    item_id: 87428,
    slot: 'mining'
  },
  {
    id: 'virtue_harvesting',
    item_id: 92820,
    slot: 'harvesting'
  },
  {
    id: 'virtue_logging',
    item_id: 92820,
    slot: 'logging'
  },
  {
    id: 'virtue_mining',
    item_id: 92820,
    slot: 'mining'
  },
  {
    id: 'volatility_harvesting',
    item_id: 87698,
    slot: 'harvesting'
  },
  {
    id: 'volatility_logging',
    item_id: 87698,
    slot: 'logging'
  },
  {
    id: 'volatility_mining',
    item_id: 87698,
    slot: 'mining'
  },
  {
    id: 'watchknight_harvesting',
    item_id: 87438,
    slot: 'harvesting'
  },
  {
    id: 'watchknight_logging',
    item_id: 87438,
    slot: 'logging'
  },
  {
    id: 'watchknight_mining',
    item_id: 87438,
    slot: 'mining'
  }
].map(glyph => [glyph.id, glyph.item_id]))

const glyphsUnusedIds = {
  90805: 90664, // Glyph of Alchemy
  90488: 90538, // Glyph of the Crucible
  87550: 87559, // Glyph of the Forester
  88241: 88298, // Glyph of the Herbalist
  87473: 87452, // Glyph of the Leatherworker
  87534: 87515, // Glyph of the Prospector
  87442: 87426, // Glyph of the Scavenger
  87407: 87460, // Glyph of the Tailor
  87438: 87424, // Glyph of the Watchknight
  87462: 87385, // Glyph of Bounty
  87433: 87434, // Glyph of Flight
  87432: 87451, // Glyph of Industry
  92953: 92915, // Glyph of Overload
  90950: 90726, // Glyph of Reaping
  92680: 92682, // Glyph of the Timekeeper
  87428: 87410, // Glyph of the Unbound
  87698: 88045, // Glyph of Volatility
  92820: 92833 // Glyph of Virtue
}
