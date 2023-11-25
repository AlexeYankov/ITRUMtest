// 2. Add Two Numbers
// Medium
// 27.4K
// 5.3K
// Companies
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, 
// except the number 0 itself.

// const addTwoNumbers = function(l1,l2) {
//     let newNode = new ListNode();
//     let temp = 0;
//     const headNode = newNode;
//     for (let i = 0; i < Infinity;i++) {
//         let val1 = 0, val2 = 0;
//         if (l1 === 0 && l2 === 0) {
//             return headNode.next = 0;
//         }
//         if(l1) {
//             val1 = l1.val;
//             l1 = l1.next;
//         }
//         if(l2) {
//             val2 = l2.val;
//             l2 = l2.next;
//         }
//         let sum = val1 + val2 + temp;
//         if (sum>=10) {
//             temp = 1;
//             const newSum = sum - 10;
//             const currNode = new ListNode(newSum);
//             newNode.next = currNode;
//             newNode = currNode;
//         }
//         if (sum < 10) {
//            const currNode = new ListNode(sum);
//            temp = 0;
//            newNode.next = currNode;
//            newNode = currNode;
//         }
//         if (l1 === null && l2 === null) {
//             if(temp) {
//             const currNode1 = new ListNode(1);
//             newNode.next = currNode1;
//             newNode = currNode1;
//             return headNode.next
//             }
//             return headNode.next
//         }
//     }
//     return headNode.next;
// }
