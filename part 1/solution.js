// 2. Add Two Numbers
// Medium
// 27.4K
// 5.3K
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
    let a = l1,
        b = l2,
        c = 0,
        f = [];
    if (a.length < 2 || b.length < 2) {
        c = +a + +b;
        return c.toString().split("").reverse();
    }
    let g = [...a],
        t = [...b];
    c = +g.reverse().join("") + +t.reverse().join("");
    if (c === 0) {
        return [0];
    }
    return c.toString().split("").reverse();
};
