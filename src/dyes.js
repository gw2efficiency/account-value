export function dyesValue (accountData, values) {
  if (!accountData.dyes) {
    return null
  }

  // Just sum up the value of all unlocked dyes
  const sum = accountData.dyes
    .map(x => values.dyes[x])
    .filter(x => x)
    .reduce((a, b) => a + b, 0)

  return {
    value: sum
  }
}
