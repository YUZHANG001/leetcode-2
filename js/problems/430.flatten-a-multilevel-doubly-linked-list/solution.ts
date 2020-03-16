/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

type MaybeNode = Node | null;
interface Node {
  val: number;
  prev: MaybeNode;
  next: MaybeNode;
  child: MaybeNode;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head: MaybeNode): MaybeNode => {
  // * ['48 ms', '96.35 %', '34.3 MB', '100 %']

  if (head === null) return head;

  flattenReturnEnd(head);

  let cur = head;
  while (cur.next) {
    cur.next.prev = cur;
    cur.child = null;
    cur = cur.next;
  }

  return head;
};

const flattenReturnEnd = (head: Node): Node => {
  let cur = { next: head } as Node;

  while (cur.next || cur.child) {
    if (cur.child) {
      const subEnd = flattenReturnEnd(cur.child);
      subEnd.next = cur.next;
      cur.next = cur.child;
      cur.child = null;
      cur = subEnd;
    } else {
      cur = cur.next!;
    }
  }

  return cur;
};
// @lc code=end

export { flatten };