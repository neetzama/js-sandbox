"use strict";

// 関数と宣言


/*
* 可変長引数
* ・任意の数の引数を受け取れる
*/

const max = Math.max(1, 2, 3, 11);
console.log(max) // 11

/* Rest Parameters */
// スプレッド構文で渡ってきた値が配列に変換される

function fn1(...args) {
  console.log(args)  // [1, 2, 3]
}
fn1(1, 2, 3);

function fn2(arg, ...restArgs) {
  console.log(arg)  // 1
  console.log(restArgs)  // [2, 3]
}
fn2(1, 2, 3);


// スプレッド構文を用いて配列を展開して引数に渡すことも可能
function fn3(x, y, z) {
  console.log(x)  // 1
  console.log(y)  // 2
  console.log(z)  // 3
}
const array = [1, 2, 3];
fn3(...array);  // fn3(array[0], array[1], array[2]) と同じ


// 関数内で特殊なオブジェクト arguments を扱うことができる。arguments の特徴は以下
// ・関数に引数が定義されていなくても渡された値を Array型のような形で参照できてしまう。
// ・実際は Array型では無いため、Arrayオブジェクトのメソッドは使用できない。
// ・アロー関数には存在しない。
function fn4() {
  console.log(arguments[0])  // 1
  console.log(arguments[1])  // 2
  console.log(arguments[2])  // 3
  // console.log(arguments.map(arg => arg + 10)) // Uncaught TypeError: arguments.map is not a function
}
fn4(1, 2, 3)


/*
* 関数式
* ・関数を値として扱うことができ、この場合、function の右辺の関数名を省略できる。
*/

const fn5 = function() {
  return "無名関数（匿名関数）です。";
}
console.log(fn5()) // 無名関数（匿名関数）です。

// function の右辺に関数名をつけることも可能だが以下のような制約がある
// ・関数の外から呼び出すことはできず、関数の中のみで呼び出すことが可能である。そのため、再帰処理をする際に利用される。らしい
const fn6 = function innerFn6(num) {
  if (num === 0) {
    return 1;
  }
  // innerFn6を再帰的に呼び出している
  return num * innerFn6(num - 1);
  // 3 * a
  // a = 2 * b
  // b = 1 * c
  // c = 1  条件分岐「num == 0」内を通る
}
console.log(fn6(3))  // 6


/*
* Arrow Function
* ・arguments 変数が存在しない
*/
const fn7 = () => {
  // console.log("fn7", arguments) // Uncaught ReferenceError: arguments is not defined
}
fn7();


/*
* メソッド
* ・オブジェクトのプロパティに定義してある関数をメソッドと言う
* ・短縮記法がある。
*/
const obj = {
  method1: function () {
    console.log("メソッド１")
  },
  method2: () => {
    console.log("メソッド2")
  }
};

obj.method1();
obj.method2();

const obj2 = {
  method1() {
    console.log("短縮記法のメソッド１")
  },
};

obj2.method1();

