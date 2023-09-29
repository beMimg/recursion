function merge(a, b) {
  let i = 0;
  let j = 0;
  let k = 0;
  let m = a.length;
  let n = b.length;
  const c = [];

  while (i < m && j < n) {
    if (a[i] < b[j]) {
      c[k] = a[i];
      i++;
      k++;
    } else {
      c[k] = b[j];
      j++;
      k++;
    }
  }

  for (; j < n; j++) {
    c[k] = b[j];
    k++;
  }

  for (; i < m; i++) {
    c[k] = a[i];
    k++;
  }
  return c;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid, arr.length);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

console.log(mergeSort([2, 5, 2, 1, 2, 5, 2, 12]));
