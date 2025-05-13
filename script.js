function mincost(arr) {
  if (arr.length <= 1) return 0;

  let minHeap = [...arr];
  minHeap.sort((a, b) => a - b); // initial sort

  let totalCost = 0;

  while (minHeap.length > 1) {
    // Get two smallest ropes
    let first = minHeap.shift();
    let second = minHeap.shift();
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back and keep it sorted
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b);
  }

  return totalCost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const ropeArray = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

  if (ropeArray.length === 0) {
    document.getElementById("result").innerText = "Please enter valid rope lengths.";
    return;
  }

  const result = mincost(ropeArray);
  document.getElementById("result").innerText = `Minimum cost to connect all ropes: ${result}`;
}
