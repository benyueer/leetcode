/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function nextPoint(head, step) {
    let p = head
    for (let i = 0; i < step; i++) {
      if (p.next) {
        p = p.next
      } else {
        return false
      }
    }
    return p
  }

  let hPre = new ListNode(), pre = new ListNode()
  hPre.next = head
  pre.next = head

  let s = k
  while(s--) {
    hPre = hPre.next
  }

  let cur, sPre = new ListNode(), setNPre = false

  while(cur = nextPoint(pre, k)) {
    let next = cur.next

    

    let rCur = pre.next, rNext = null, rPre = next, thisNPre = false
    sPre = pre.next
    while(rCur !== next) {
      if (!thisNPre) {
        thisNPre = rCur
      }
      rNext = rCur.next
      rCur.next = rPre·
      rPre = rCur
      rCur = rNext
    }·
    pre.next = rCur

    if (setNPre) {
      setNPre.next = rPre  
    }

    setNPre = thisNPre
    
  }

  return hPre

  // const arr = []
  // let phead = new ListNode(), cur
  // phead.next = head

  // let p = head, last = true

  // while(p) {
  //   let h = p
  //   for (let i = 0; i < k-1 && p; i++) {
  //     p = p.next
  //   }
  //   arr.push(h)
  //   if (p) {
  //     let r = p.next
  //     p.next = null
  //     p = r
  //   } else {
  //     last = false
  //   }
  // }


  // let hpre = new ListNode()
  // for (let i = 0; i < arr.length; i++) {
  //   if (!last && i === arr.length - 1) {
  //     hpre.next = arr[i]
  //     break
  //   }
  //   let cur = arr[i], pre = null, h = arr[i]
  //   while(cur) {
  //     next = cur.next
  //     cur.next = pre
  //     pre = cur
  //     cur = next
  //   }
  //   arr[i] = pre
  //   hpre.next = arr[i]
  //   hpre = h
  // }

  // return arr[0]
};
// @lc code=end

