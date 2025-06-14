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

// 📘 模範解答
var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack.pop();
};

MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- JSでは関数に対してもnewを使うことができ、コンストラクタ関数を使用することができる
- newした時点で空のオブジェクトが生成され、コンストラクタ関数内ではthisを使って
  そのオブジェクトを操作することができる
- prototypeについて、一つのメソッド内に関数が定義されている場合は、
  インスタンス化する度に関数を生成してしまうが、prototypeを使って関数を定義することで
  インスタンス化した場合でも、共通して呼び出すことができるため、メモリを節約することができる
- なぜ配列1本で処理していけないかというと、問題の指定で2つの配列を使うよう指定があるから
- inStackは値を追加する用
- outStackは値を取り出す用で、inStackの配列の値を逆に並べる必要がある
--------------------------------------------------------------------------------
*/
