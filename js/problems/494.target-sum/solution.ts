/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = (nums: number[], S: number): number => {
  // * dp ['188 ms', '71.81 %', '39.5 MB', '100 %']
  // * https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode/

  let pool = new Map<number, number>();
  pool.set(0, 1);

  nums.forEach((n, i) => {
    const nextPool = new Map<number, number>();
    pool.forEach((step, sum) => {
      nextPool.set(sum + n, (nextPool.get(sum + n) || 0) + step);
      nextPool.set(sum - n, (nextPool.get(sum - n) || 0) + step);
    });
    pool = nextPool;
  });
  return pool.get(S) || 0;
};
// @lc code=end

export { findTargetSumWays };
