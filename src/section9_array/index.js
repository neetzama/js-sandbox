"use strict";

// 配列


/*
* 疎な配列
* ・未定義な箇所がある配列のこと
* ・length としてはカウントされる
*/
const array = [1, , 3];
console.log(array.length); // 3
console.log(array[1]); // undefined


/*
* undefined と未定義の要素の違い
* ・Object.hasOwn() を使用し判定する
*/
// どちらも undefined と判定されてしまう
const denseArray = [1, undefined, 3];
const spaceArray = [1, , 3];
console.log("denseArray", denseArray[1])  // undefined
console.log("spaceArray", spaceArray[1])  // undefined

// Object.hasOwn() を使用。第２引数には index を指定する
console.log("denseArray", Object.hasOwn(denseArray, 1));  // true
console.log("spaceArray", Object.hasOwn(spaceArray, 1));  // false


/*
* Array.prototype.at メソッド
* ・相対的なインデックスの値を取得できる
* ・末尾から数えた値を取得可能。array2[array2.length -1] と記述する必要がなくなる。
*/
const array2 = ["a", "b", "c", "d", "e"];
console.log(array2.at(0));  // "a"
console.log(array2.at(1));  // "b"

console.log(array2.at(-1));  // "e"
console.log(array2.at(-2));  // "d"

/*
* 配列をフラット化
* ・引数の数値で何段階目をフラットにするか指定する
* ・Infinity を渡すと全段階をフラットにする
*/
const array3 = [[[1, 2], 3], 4];
console.log(array3.flat());  // [[1, 2], 3, 4]
console.log(array3.flat(1));  // [[1, 2], 3, 4]
console.log(array3.flat(2));  // [1, 2, 3, 4]
console.log(array3.flat(Infinity));  // [1, 2, 3, 4]


/*
* 配列から要素を削除
* ・splice() メソッド
* ・length に代入
* ・空配列を代入
*/
// splice() メソッド
const array4 = ["a", "b", "c", "d", "e"];
array4.splice(0, array4.length);  // deleteCount に配列の長さ指定することで削除
console.log(array4);
// length に代入
const array5 = ["a", "b", "c", "d", "e"];
array5.length = 0;
console.log(array5);
// 空配列を代入
let array6 = ["a", "b", "c", "d", "e"];
array6 = [];
console.log(array6);