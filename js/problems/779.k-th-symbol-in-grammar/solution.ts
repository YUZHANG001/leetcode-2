/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = (N: number, K: number): number => {
  // * ['48 ms', '88.36 %', '33.8 MB', '100 %']

  if (N === 1) return 0;

  const prev = kthGrammar(N - 1, Math.ceil(K / 2));
  return prev === 0 ? (K % 2 ? 0 : 1) : K % 2 ? 1 : 0;
};

// @lc code=end

export { kthGrammar };
