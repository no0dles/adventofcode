import {parse, solution} from './day5'

describe('2021/day5', () => {
  it('should 1,1 -> 3,3', () => {
    const iterator = solution(parse('1,1 -> 3,3'));
    expect(iterator.next().value).toEqual([1, 1]);
    expect(iterator.next().value).toEqual([2, 2]);
    expect(iterator.next().value).toEqual([3, 3]);
    expect(iterator.next().done).toBeTruthy();
  });

  it('should 9,7 -> 7,9', () => {
    const iterator = solution(parse('9,7 -> 7,9'));
    expect(iterator.next().value).toEqual([9, 7]);
    expect(iterator.next().value).toEqual([8, 8]);
    expect(iterator.next().value).toEqual([7, 9]);
    expect(iterator.next().done).toBeTruthy();
  });
});
