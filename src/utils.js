export function isAllNodeisConnected(nodes, edges) {
  console.log(nodes, edges, "is");
  const allNodesIds = nodes.map((node) => node.id);
  const allSourceEdges = edges.map((edge) => edge.source);
  let count = 0;
  for (let i = 0; i < allNodesIds.length; i++) {
    if (!allSourceEdges.includes(allNodesIds[i])) count++;
  }
  console.log(allNodesIds, allSourceEdges);
  if (count >= 2) {
    return false;
  }
  return true;
}
