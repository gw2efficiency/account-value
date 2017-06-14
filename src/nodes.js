import _sum from 'sum-by'

export function nodesValue (accountData, values) {
  if (!accountData.home || !accountData.home.nodes) {
    return null
  }

  // Just sum up the value of all unlocked nodes
  const nodes = accountData.home.nodes
    .filter(node => values.nodes[node] && values.nodes[node].value)

  const nonGemstoreNodes = nodes.filter(node => values.nodes[node].gemstore === false)

  return {
    value: _sum(nodes, x => values.nodes[x].value),
    valueMinusGemItems: _sum(nonGemstoreNodes, x => values.nodes[x].value),
    spentGems: _sum(nodes, x => values.nodes[x].gemstore)
  }
}
