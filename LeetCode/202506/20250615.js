/*
================================================================================
問題: 232. Implement Queue using Stacks
出典: https://leetcode.com/problems/implement-queue-using-stacks/description/
================================================================================
*/

// ✅ 自分の解答

var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 配列のpopメソッドは配列の末尾の要素を取り出すことができる
- 配列のlengthプロパティは要素の数を取得することができる
--------------------------------------------------------------------------------
*/
