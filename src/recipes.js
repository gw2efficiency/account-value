import _sum from 'lodash.sumby'

export function recipesValue (accountData, values) {
  if (!accountData.recipes) {
    return null
  }

  // Just sum up the value of all unlocked recipes
  const recipes = accountData.recipes
    .filter(recipe => values.recipes[recipe] && values.recipes[recipe].value)

  return {
    value: _sum(recipes, x => values.recipes[x].value)
  }
}
