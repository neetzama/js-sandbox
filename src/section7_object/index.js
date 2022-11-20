"use strict";

// オブジェクト


/*
* Object.freeze() メソッド
* ・変更不可のオブジェクトになる
*/
const obj = {
  key: "value"
}
Object.freeze(obj);
// obj.key = "value2";  // Uncaught TypeError: Cannot assign to read only property 'key' of object '#<Object>'


/*
* プロパティの存在を確認する方法。以下の4つがある
* ・undefined かどうか
* ・in 演算子
* ・Object.hasOwn()
* ・Object.prototype.hasOwnProperty()
*/

// undefined かどうか
// ・欠点としてプロパティが存在しているかが分からない。
const obj2 = {
  key: undefined
};

if(obj2.key !== undefined) {
  console.log("プロパティが存在しているかが分からない。");
}


// in 演算子
// key名が存在するかどうかを真偽値で返してくれる
const obj3 = {
  test: undefined
};

if("test" in obj3) { // true or false
  console.log("obj3 の key名に 'test' が存在する");
}


// Object.hasOwn()
// ・第１引数にオブジェクト、第２引数にプロパティを指定する。
const obj4 = {
  test: undefined
};

if(Object.hasOwn(obj4, "test")) { // true or false
  console.log("obj4 の key名に 'test' が存在する");
}


// Object.prototype.hasOwnProperty()
// ・欠点があったため、Object.hasOwn() を推奨している。欠点の原因としてプロトタイプオブジェクトが理由にあるらしい。TODO:あとで調べる
const obj5 = {
  test: undefined
};

if(obj5.hasOwnProperty("test")) { // true or false
  console.log("obj5 の key名に 'test' が存在する");
}