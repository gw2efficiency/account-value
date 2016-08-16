export function minisValue (accountData, values) {
  if (!accountData.minis) {
    return null
  }

  // Just sum up the value of all unlocked minis
  const sum = accountData.minis
    .map(x => values.minis[x])
    .filter(x => x)
    .reduce((a, b) => a + b, 0)

  return {
    value: sum
  }
}
