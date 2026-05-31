//     |
// [ 0 1 2 3 4 5 ]

export default function bs_list(haystack: number[], needle: number): boolean {
  // let pivot = (haystack.length / 2).toFixed(0);
  let start = 0;
  let end = haystack.length;
  do {
    let middle = Math.floor(start + (end - start) / 2);
    console.log(middle);

    if (haystack[middle] === needle) {
      return true;
    } else if (haystack[middle] > needle) {
      end = middle;
    } else {
      start = middle + 1;
    }
  } while (start < end);

  return false;
}