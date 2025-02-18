export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < collection1.length || j < collection2.length || k < collection3.length) {
    let minVal: number | null = null;

    if (i < collection1.length && (minVal === null || collection1[i] <= minVal)) {
      minVal = collection1[i];
    }
    if (j < collection2.length && (minVal === null || collection2[j] <= minVal)) {
      minVal = collection2[j];
    }
    if (k < collection3.length && (minVal === null || collection3[k] <= minVal)) {
      minVal = collection3[k];
    }

    if (minVal !== null) {
      result.push(minVal);
      if (i < collection1.length && collection1[i] === minVal) i++;
      if (j < collection2.length && collection2[j] === minVal) j++;
      if (k < collection3.length && collection3[k] === minVal) k++;
    }
  }

  return result;
}