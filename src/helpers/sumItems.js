import _get from 'fast-get'

export default function sumItems (options) {
  const { items, itemValues, valueKey, includeBound, fallbackValueKey = false } = options

  return items
    .filter(item => item) // Ignore possible empty slots
    .reduce((a, b) => a.concat(b), []) // Get a single array
    .filter(item => includeBound || item.binding === undefined) // Bound items setting
    .map(item => {
      let value = _get(itemValues[item.id], valueKey, 0)

      if (!value && fallbackValueKey) {
        value = _get(itemValues[item.id], fallbackValueKey, 0)
      }

      return item.count * value
    })
    .reduce((a, b) => a + b, 0) // Total sum
}
