import _get from 'lodash.get'

export default function sumItems (items, itemValues, valueKey, includeBound = false) {
  return items
    .filter(item => item) // Ignore possible empty slots
    .reduce((a, b) => a.concat(b), []) // Get a single array
    .filter(item => includeBound || item.binding === undefined) // Bound items setting
    .map(item => item.count * _get(itemValues[item.id], valueKey, 0)) // Sum for stack
    .reduce((a, b) => a + b, 0) // Total sum
}
