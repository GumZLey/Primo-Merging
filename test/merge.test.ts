import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge and sort three arrays correctly', () => {
    const collection1 = [0, 2, 4];
    const collection2 = [1, 3, 5];
    const collection3 = [6, 4, 2, 0];
    const expected = [0, 0, 1, 2, 2, 3, 4, 4, 5, 6];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2 = [1, 3, 5];
    const collection3 = [6, 4, 2, 0];
    const expected = [0, 2, 3, 4, 5, 6];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should handle duplicate values', () => {
    const collection1 = [1, 2, 2, 4];
    const collection2 = [1, 3, 5];
    const collection3 = [6, 4, 2, 0];
    const expected = [0, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });

  it('should handle one empty array', () => {
    const collection1 = [1, 2, 3];
    const collection2: number[] = [];
    const collection3 = [6, 5, 4];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
});