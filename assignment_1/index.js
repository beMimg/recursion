/*
  Basicly, Fibonacci really just sums its index- 1index and its index- 2index.
  Let's say we have an array[0, 1, 1, 2].
  The THIRD index, is a sum of the [THIRD index - 1 Index] and [THIRD index - 2 Index]
  For example: Arr[3] = arr[3-1] + arr[3-2]
  Which is the same as(in this case): 2 = 1 + 1
*/

function fibs(n) {
  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/*
Recursive
*/

function fibsRec(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  console.log(sequence.length - 1);
  return sequence;
}
