export default function bubble_sort(arr: number[]): void {
  while (true) {
    let wasSorted = false;
    for (let i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i + 1]) {
        wasSorted = true;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
    
    if (!wasSorted) {
      break;
    }
  }
}