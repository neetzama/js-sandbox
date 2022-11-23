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


/*
* Optional chaining演算子
* ・評価した値が null または undefined だった場合、undefined を返す。プロパティが存在した場合はその値を返す。
*/
const obj6 = {
  a: {
    b: "test"
  }
}

console.log(obj6?.a?.b) // "test"
console.log(obj6?.a?.b?.c) // undefined


/*
* プロパティ名は文字列化される
*/
const objTest1 = {};
const keyObject1 = { a: 1 };
objTest1[keyObject1] = "1";
console.log(objTest1); // {[object object]: "1"}   object型は文字列化すると [object object] に変換される

const objTest2 = {};
const keyObject2 = 1;
objTest2[keyObject2] = "2";
console.log(objTest2); // {1: "2"}


/*
* Object.assign()
* ・オブジェクトを複製、マージ可能
* ・シャローコピーとなる
* ・マージする場合は target となるオブジェクトも影響を受ける
* ・複製（target が {}）の場合は特に問題なし
*/

const obj7 = {
  name: "originalでやんす"
}

const copyObj7 = Object.assign({}, obj7);
console.log(copyObj7) // {name: 'originalでやんす'}
console.log(obj7 === copyObj7) // false


// original にも影響
const obj8 = {
  name1: "あるてた"
}

const obj9 = {
  name2: "ベンゲル"
}

const mergedObj = Object.assign(obj8, obj9);
console.log(mergedObj)  // {name1: 'あるてた', name2: 'ベンゲル'}
console.log(obj8)  // {name1: 'あるてた', name2: 'ベンゲル'}
console.log(mergedObj === obj8)  // true


// シャローコピーであるため２階層目以降は影響を受ける
const obj10 = {
  team: "アーセナル",
  position: {
    df: "サリバ"
  }
}
const copyObj10 = Object.assign({}, obj10);
// １階層目は汚染されていない
copyObj10.team = "トッテナム";
console.log(obj10)  // {team: 'アーセナル', position: {…}}
console.log(copyObj10)  // {team: 'トッテナム', position: {…}}
// ２階層目以降は汚染される
copyObj10.position.df = "まや";
console.log(obj10)  // {team: 'アーセナル', position: {df: "まや"}}
console.log(copyObj10)  // {team: 'トッテナム', position: {df: "まや"}}