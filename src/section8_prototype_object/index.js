"use strict";

// プロトタイプオブジェクト

/*
* Object のインスタンスは自動的に prototype という特殊なプロパティが追加されている。prototype は Object.prototype を継承している。
* Object.prototype　オブジェクトにはメソッドが定義されており、プロトタイプメソッドと呼ばれる。以下のようなプロトタイプメソッドが存在する。
* ・toString()
* ・valueOf()
* ・hasOwnProperty() ...etc
*
*/

const obj = {
  key: "value"
}
console.log(obj.toString() === Object.prototype.toString())  // true

/*
* プロトタイプメソッドとインスタンスメソッドの優先順位
* ・インスタンスメソッドが優先される
*/
const obj2 = {
  toString() {
    return "インスタンスメソッドが優先される"
  }
}
console.log(obj2.toString())  // "インスタンスメソッドが優先される"


/*
* Object.hasOwn() メソッドと in 演算子の違い
* ・Object.hasOwn() は引数に渡したオブジェクトのみを判定する
* ・in 演算子は最初にオブジェクトを判定しプロパティがなければ、継承元の prototype オブジェクトまで探索する
*/
const obj3 = {};
console.log(Object.hasOwn(obj3, "toString")); // false
console.log("toString" in obj3);  // true


/*
* Array も Object を継承
* ・Array のインスタンスは Array.prototype を継承している。さらに Array.prototype は Object.prototype を継承している。
* ・Array.prototype にも toString メソッドがあり、そちらが優先される。Object.prototype.toString メソッドとの挙動にも差異がある。
*/
const array = [1, 2, 3];
console.log(array.toString()) // "1,2,3"
// console.log(array.prototype.toString()) // Uncaught TypeError: Cannot read properties of undefined (reading 'toString')


/*
* Object.prototype を継承しないオブジェクト
* ・Object.create(null) で prototype を継承しないオブジェクトを生成することができる。
*/
const obj4 = Object.create(null);
console.log("toString" in obj4) // false

// Object.hawOwn() メソッドが導入された経緯も prototype を継承しないオブジェクトを生成可能なためである。
// console.log(obj4.hasOwnProperty("key")); // prototype.hasOwnProperty が呼び出せない。「Uncaught TypeError: obj4.hasOwnProperty is not a function」が吐かれる
console.log(Object.hasOwn(obj4, "key")); // false




